import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityClient } from "@sanity/client";

let _client: SanityClient | null = null;

type ImageUrlBuilder = ReturnType<ReturnType<typeof imageUrlBuilder>["image"]>;

/**
 * Lazy-initialized Sanity client.
 * Returns null if env vars are missing — callers should handle this gracefully.
 */
export function getClient(): SanityClient | null {
  if (_client) return _client;

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

  if (!projectId || projectId === "") {
    return null;
  }

  _client = createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: process.env.NODE_ENV === "production",
  });

  return _client;
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
