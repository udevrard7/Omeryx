import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  User,
  ChevronRight,
  ArrowLeft,
  Tag,
} from "lucide-react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity/client";
import { getPostBySlug, getAllPostSlugs } from "@/lib/sanity/queries";
import type { Post, SanityImage } from "@/lib/sanity/queries";

/* ──────────────────── Portable Text Components ──────────────────── */

function PortableTextImage({
  value,
}: {
  value: SanityImage & { caption?: string; alt?: string };
}): React.ReactElement {
  const imageUrl = urlFor(value)
    .width(1200)
    .fit("max")
    .url();

  return (
    <figure className="my-8">
      <img
        src={imageUrl}
        alt={value.alt || value.caption || "Image"}
        className="w-full rounded-xl"
      />
      {(value.caption || value.alt) && (
        <figcaption className="mt-2 text-center text-sm text-[#6B7280]">
          {value.caption || value.alt}
        </figcaption>
      )}
    </figure>
  );
}

const portableTextComponents = {
  types: {
    image: PortableTextImage,
    code: ({
      value,
    }: {
      value: { code: string; language?: string; filename?: string };
    }) => (
      <pre className="my-6 overflow-x-auto rounded-xl bg-[#1B3A5C] p-4 text-sm text-white/90">
        {value.filename && (
          <div className="mb-2 text-xs text-white/50">{value.filename}</div>
        )}
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="mb-4 mt-10 text-3xl font-extrabold tracking-tight text-[#1B3A5C]">
        {children}
      </h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="mb-3 mt-8 text-2xl font-bold tracking-tight text-[#1B3A5C]">
        {children}
      </h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="mb-3 mt-6 text-xl font-bold text-[#1B3A5C]">
        {children}
      </h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className="mb-2 mt-4 text-lg font-semibold text-[#1B3A5C]">
        {children}
      </h4>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="my-6 border-l-4 border-[#2563EB] bg-[#EFF6FF] py-4 pl-6 pr-4 text-base italic text-[#1B3A5C]">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="mb-4 text-base leading-relaxed text-[#374151]">
        {children}
      </p>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-bold text-[#1B3A5C]">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em>{children}</em>
    ),
    underline: ({ children }: { children: React.ReactNode }) => (
      <u>{children}</u>
    ),
    "strike-through": ({ children }: { children: React.ReactNode }) => (
      <s>{children}</s>
    ),
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: { href: string };
    }) => (
      <a
        href={value?.href}
        className="font-medium text-[#2563EB] underline underline-offset-2 transition-colors hover:text-[#1D4ED8]"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

/* ──────────────────── Static Params ──────────────────── */

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    // If Sanity is not configured, return empty to avoid build failure
    return [];
  }
}

/* ──────────────────── Metadata ──────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let post: Post | null = null;

  try {
    post = await getPostBySlug(slug);
  } catch {
    // fallback
  }

  if (!post) {
    return {
      title: "Article introuvable | OMERYX Group",
    };
  }

  const ogImage = post.mainImage
    ? urlFor(post.mainImage)
        .width(1200)
        .height(630)
        .fit("crop")
        .url()
    : undefined;

  return {
    title: post.title,
    description:
      post.excerpt ||
      `Article d'OMERYX Group — ${post.categories?.map((c) => c.title).join(", ") || "Actualités"}`,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      url: `https://omeryxgroup.com/actualites/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : undefined,
      tags: post.categories?.map((c) => c.title),
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || undefined,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

/* ──────────────────── Helpers ──────────────────── */

function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

/* ──────────────────── Page ──────────────────── */

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  const { slug } = await params;
  let post: Post | null = null;

  try {
    post = await getPostBySlug(slug);
  } catch (error) {
    console.warn("Sanity fetch failed:", error);
  }

  if (!post) {
    notFound();
  }

  const mainImage = post.mainImage
    ? urlFor(post.mainImage)
        .width(1200)
        .height(630)
        .fit("crop")
        .url()
    : null;

  return (
    <>
      {/* ── Breadcrumb bar ── */}
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-sm text-[#6B7280]">
            <Link href="/" className="transition-colors hover:text-[#1B3A5C]">
              Accueil
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href="/actualites"
              className="transition-colors hover:text-[#1B3A5C]"
            >
              Actualités
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#1B3A5C]">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* ── Article Hero ── */}
      <section className="bg-white pb-12 pt-8 lg:pb-16 lg:pt-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/actualites"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#6B7280] transition-colors hover:text-[#2563EB]"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux articles
          </Link>

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {post.categories.map((cat) => (
                <span
                  key={cat._id}
                  className="inline-flex items-center gap-1 rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#2563EB]"
                >
                  <Tag className="h-3 w-3" />
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-[#1B3A5C] sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-gray-100 pb-6 text-sm text-[#6B7280]">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </span>
            {post.author && (
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author.name}
              </span>
            )}
          </div>

          {/* Main Image */}
          {mainImage && (
            <div className="overflow-hidden rounded-2xl shadow-lg shadow-black/[.08]">
              <img
                src={mainImage}
                alt={post.title}
                className="h-auto w-full"
              />
            </div>
          )}
        </div>
      </section>

      {/* ── Article Body ── */}
      <section className="bg-white pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Excerpt */}
          {post.excerpt && (
            <p className="mb-10 text-lg font-medium leading-relaxed text-[#374151]/80 sm:text-xl">
              {post.excerpt}
            </p>
          )}

          {/* Portable Text body */}
          {post.body && post.body.length > 0 ? (
            <div className="prose-custom">
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-200 bg-[#F9FAFB] p-8 text-center">
              <p className="text-sm text-[#6B7280]">
                Le contenu de cet article sera bientôt disponible.
              </p>
            </div>
          )}

          {/* Author card */}
          {post.author && (
            <div className="mt-16 flex items-start gap-4 rounded-2xl border border-gray-100 bg-[#F9FAFB] p-6">
              {post.author.image ? (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#1B3A5C]">
                  <img
                    src={urlFor(post.author.image).width(96).height(96).fit("crop").url()}
                    alt={post.author.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1B3A5C] text-sm font-bold text-white">
                  {post.author.name.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <p className="text-sm font-bold text-[#1B3A5C]">
                  {post.author.name}
                </p>
                {post.author.bio && (
                  <p className="mt-1 text-sm text-[#6B7280]">
                    {post.author.bio}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#EFF6FF] py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-[#1B3A5C]">
            Cet article vous a intéressé ?
          </h2>
          <p className="mb-6 text-base text-[#6B7280]">
            Contactez-nous pour en savoir plus sur nos activités.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1D4ED8]"
          >
            Nous contacter
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
        </div>
      </section>
    </>
  );
}
