import { groq } from "next-sanity";
import { getClient } from "./client";

/* ──────────────────── Types ──────────────────── */

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface PostAuthor {
  _id: string;
  name: string;
  image?: SanityImage;
  bio?: string;
}

export interface PostCategory {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  excerpt?: string;
  mainImage?: SanityImage;
  categories?: PostCategory[];
  body?: unknown[];
  author?: PostAuthor;
}

/* ──────────────────── Queries ──────────────────── */

const postFields = groq`
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage,
  categories[]->{
    _id,
    title,
    "slug": slug.current
  },
  author->{
    _id,
    name,
    image,
    bio
  }
`;

const postFullFields = groq`
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage,
  categories[]->{
    _id,
    title,
    "slug": slug.current
  },
  body,
  author->{
    _id,
    name,
    image,
    bio
  }
`;

/**
 * Get all published posts sorted by date (newest first).
 * Returns empty array if Sanity is not configured.
 */
export async function getAllPosts(): Promise<Post[]> {
  const client = getClient();
  if (!client) return [];
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      ${postFields}
    }`
  );
}

/**
 * Get a single post by its slug.
 * Returns null if Sanity is not configured or post not found.
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const client = getClient();
  if (!client) return null;
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      ${postFullFields}
    }`,
    { slug }
  );
}

/**
 * Get the N most recent posts.
 * Returns empty array if Sanity is not configured.
 */
export async function getLatestPosts(n: number): Promise<Post[]> {
  const client = getClient();
  if (!client) return [];
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) [0...$n] {
      ${postFields}
    }`,
    { n }
  );
}

/**
 * Get all post slugs for generateStaticParams.
 * Returns empty array if Sanity is not configured.
 */
export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  const client = getClient();
  if (!client) return [];
  return client.fetch(
    groq`*[_type == "post"] {
      "slug": slug.current
    }`
  );
}
