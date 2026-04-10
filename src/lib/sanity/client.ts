import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityClient } from "@sanity/client";

let _client: SanityClient | null = null;
let _writeClient: SanityClient | null = null;

type ImageUrlBuilder = ReturnType<ReturnType<typeof imageUrlBuilder>["image"]>;

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

/**
 * Public read-only client (uses CDN in production).
 */
export function getClient(): SanityClient | null {
  if (_client) return _client;

  if (!PROJECT_ID) {
    return null;
  }

  _client = createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: "2024-01-01",
    useCdn: process.env.NODE_ENV === "production",
  });

  return _client;
}

/**
 * Write client with API token for mutations (create, update, delete).
 * Only used server-side.
 */
export function getWriteClient(): SanityClient | null {
  if (_writeClient) return _writeClient;

  const token = process.env.SANITY_API_TOKEN;
  if (!PROJECT_ID || !token) {
    return null;
  }

  _writeClient = createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: "2024-01-01",
    useCdn: false,
    token,
  });

  return _writeClient;
}

/* ──────────────────── Image URL Helper ──────────────────── */

function noopBuilder(): ImageUrlBuilder {
  return {
    width: () => noopBuilder(),
    height: () => noopBuilder(),
    fit: () => noopBuilder(),
    url: () => "",
    toString: () => "",
  };
}

export function urlFor(source: Record<string, unknown>): ImageUrlBuilder {
  const client = getClient();
  if (!client) return noopBuilder();

  const builder = imageUrlBuilder(client);
  return builder.image(source as Parameters<typeof builder.image>[0]);
}
