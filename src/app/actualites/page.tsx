import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity/client";
import { getAllPosts } from "@/lib/sanity/queries";
import type { Post } from "@/lib/sanity/queries";

/* ──────────────────── Metadata ──────────────────── */

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Actualités & Blog | OMERYX Group",
    description:
      "Découvrez les dernières actualités, articles et analyses d'OMERYX Group. Actualités sectorielles, innovations et perspectives dans l'eau, l'immobilier et le transport en Côte d'Ivoire.",
    openGraph: {
      title: "Actualités & Blog | OMERYX Group",
      description:
        "Articles, actualités et analyses d'OMERYX Group — Eau, Immobilier, Transport & Logistique.",
      url: "https://omeryxgroup.com/actualites",
      type: "website",
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

function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen).trimEnd() + "…";
}

/* ──────────────────── Placeholder Data ──────────────────── */

const PLACEHOLDER_POSTS: Post[] = [
  {
    _id: "placeholder-1",
    title: "OMERYX Group lance sa nouvelle gamme d'eau conditionnée premium",
    slug: { current: "nouvelle-gamme-eau-premium" },
    publishedAt: "2026-03-15T10:00:00Z",
    excerpt:
      "Découvrez notre nouvelle ligne de produits d'eau conditionnée, conçue pour répondre aux plus hauts standards de qualité et de durabilité environnementale.",
    mainImage: undefined,
    categories: [
      { _id: "cat-eau", title: "Eau Conditionnée", slug: { current: "eau" } },
    ],
    author: { _id: "auth-1", name: "OMERYX Group", bio: "Équipe éditoriale" },
  },
  {
    _id: "placeholder-2",
    title: "Le marché immobilier abidjanais en pleine expansion en 2026",
    slug: { current: "marche-immobilier-abidjan-2026" },
    publishedAt: "2026-03-01T09:00:00Z",
    excerpt:
      "Analyse des tendances du marché immobilier à Abidjan et perspectives de croissance pour les investisseurs nationaux et internationaux.",
    mainImage: undefined,
    categories: [
      {
        _id: "cat-immo",
        title: "Immobilier & BTP",
        slug: { current: "immobilier" },
      },
    ],
    author: { _id: "auth-1", name: "OMERYX Group", bio: "Équipe éditoriale" },
  },
  {
    _id: "placeholder-3",
    title: "Transport sous-régional : les opportunités de la CEDEAO",
    slug: { current: "transport-cedeao-opportunites" },
    publishedAt: "2026-02-20T08:00:00Z",
    excerpt:
      "Les accords de libre-échange de la CEDEAO ouvrent de nouvelles perspectives pour le transport de marchandises en Afrique de l'Ouest.",
    mainImage: undefined,
    categories: [
      {
        _id: "cat-transport",
        title: "Transport & Logistique",
        slug: { current: "transport" },
      },
    ],
    author: { _id: "auth-1", name: "OMERYX Group", bio: "Équipe éditoriale" },
  },
  {
    _id: "placeholder-4",
    title: "Normes OHADA : ce que tout entrepreneur doit savoir",
    slug: { current: "normes-ohada-entrepreneur" },
    publishedAt: "2026-02-10T07:00:00Z",
    excerpt:
      "Guide pratique des normes OHADA applicables aux SARL en Côte d'Ivoire : obligations comptables, fiscales et juridiques essentielles.",
    mainImage: undefined,
    categories: [
      {
        _id: "cat-general",
        title: "Général",
        slug: { current: "general" },
      },
    ],
    author: { _id: "auth-1", name: "OMERYX Group", bio: "Équipe éditoriale" },
  },
  {
    _id: "placeholder-5",
    title: "Investir en Côte d'Ivoire : les secteurs porteurs de 2026",
    slug: { current: "investir-cote-ivoire-2026" },
    publishedAt: "2026-01-28T10:00:00Z",
    excerpt:
      "Panorama des secteurs les plus dynamiques pour les investisseurs en Côte d'Ivoire cette année : agriculture, numérique, énergie et infrastructure.",
    mainImage: undefined,
    categories: [
      {
        _id: "cat-general",
        title: "Général",
        slug: { current: "general" },
      },
    ],
    author: { _id: "auth-1", name: "OMERYX Group", bio: "Équipe éditoriale" },
  },
  {
    _id: "placeholder-6",
    title: "Logistique du dernier kilomètre : défis et solutions à Abidjan",
    slug: { current: "logistique-dernier-kilometre-abidjan" },
    publishedAt: "2026-01-15T09:00:00Z",
    excerpt:
      "Comment optimiser les livraisons en milieu urbain à Abidjan ? Analyse des solutions technologiques et organisationnelles mises en place par OMERYX Group.",
    mainImage: undefined,
    categories: [
      {
        _id: "cat-transport",
        title: "Transport & Logistique",
        slug: { current: "transport" },
      },
    ],
    author: { _id: "auth-1", name: "OMERYX Group", bio: "Équipe éditoriale" },
  },
];

/* ──────────────────── Component ──────────────────── */

function PostCard({ post }: { post: Post }): React.ReactElement {
  const image = post.mainImage
    ? urlFor(post.mainImage)
        .width(800)
        .height(450)
        .fit("crop")
        .url()
    : null;

  const excerpt = post.excerpt
    ? truncate(post.excerpt, 150)
    : "Découvrez cet article récent d'OMERYX Group.";

  const category = post.categories?.[0];

  return (
    <Link href={`/actualites/${post.slug.current}`} className="block group">
      <Card className="h-full overflow-hidden border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[.06]">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-[#F3F4F6]">
          {image ? (
            <img
              src={image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #1B3A5C 0%, #2563EB 100%)",
              }}
            >
              <span className="px-4 text-center text-sm font-semibold text-white/70">
                OMERYX Group
              </span>
            </div>
          )}

          {/* Category badge */}
          {category && (
            <div className="absolute left-3 top-3">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1B3A5C] backdrop-blur-sm">
                {category.title}
              </span>
            </div>
          )}
        </div>

        <CardContent className="p-5 lg:p-6">
          {/* Meta */}
          <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-[#6B7280]">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.publishedAt)}
            </span>
            {post.author && (
              <span className="inline-flex items-center gap-1">
                <User className="h-3.5 w-3.5" />
                {post.author.name}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="mb-2 text-lg font-bold leading-snug text-[#1B3A5C] transition-colors group-hover:text-[#2563EB]">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mb-4 text-sm leading-relaxed text-[#6B7280]">
            {excerpt}
          </p>

          {/* Read more */}
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] transition-all duration-300 group-hover:gap-2">
            Lire l&apos;article
            <ArrowRight className="h-4 w-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}

/* ──────────────────── Page ──────────────────── */

export default async function ActualitesPage(): Promise<React.ReactElement> {
  let posts: Post[] = PLACEHOLDER_POSTS;

  try {
    const sanityPosts = await getAllPosts();
    if (sanityPosts && sanityPosts.length > 0) {
      posts = sanityPosts;
    }
  } catch (error) {
    console.warn(
      "Sanity fetch failed, using placeholder posts:",
      error instanceof Error ? error.message : error
    );
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0F2640 0%, #1B3A5C 40%, #2563EB 100%)",
          }}
        />
        <div className="bg-pattern-dots absolute inset-0 opacity-15" />
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center justify-center gap-1.5 text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">
              Accueil
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Actualités</span>
          </nav>

          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Actualités &amp; Blog
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/75">
            Suivez les dernières nouvelles, analyses et perspectives
            d&apos;OMERYX Group et de ses secteurs d&apos;activité.
          </p>
        </div>
      </section>

      {/* ── Posts Grid ── */}
      <section className="bg-[#F9FAFB] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-[#1B3A5C] sm:text-3xl">
                Tous les articles
              </h2>
              <p className="mt-1 text-sm text-[#6B7280]">
                {posts.length} article{posts.length > 1 ? "s" : ""} publié
                {posts.length > 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>

          {/* Empty state */}
          {posts.length === 0 && (
            <div className="py-20 text-center">
              <p className="mb-4 text-lg font-medium text-[#6B7280]">
                Aucun article publié pour le moment.
              </p>
              <p className="text-sm text-[#9CA3AF]">
                Revenez bientôt pour découvrir nos actualités.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden bg-[#2563EB] py-16 lg:py-20">
        <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-white/5" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Restez informé
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base text-white/75 sm:text-lg">
            Contactez-nous pour en savoir plus sur nos activités ou pour
            soumettre un partenariat.
          </p>
          <Button
            size="lg"
            className="group rounded-xl bg-white px-8 py-6 text-base font-bold text-[#2563EB] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/95 hover:shadow-xl"
            asChild
          >
            <Link href="/#contact">
              Nous contacter
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
