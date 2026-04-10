/**
 * Sanity Seed Script
 * Creates 4 categories, 1 author, and 4 blog posts in Sanity CMS.
 * Run with: npx tsx src/lib/sanity/seed.ts
 */

import { createClient } from "@sanity/client";

// ─── Configuration ───────────────────────────────────────────────────────────

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN || "";

if (!projectId || !token) {
  console.error("❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: false,
  token,
});

// ─── Seed Data ───────────────────────────────────────────────────────────────

const AUTHOR = {
  _type: "author" as const,
  name: "OMERYX Group",
  bio: "Équipe éditoriale d'OMERYX Group — SARL multisectorielle basée en Côte d'Ivoire, spécialisée dans la production d'eau conditionnée, l'immobilier & BTP, et le transport & logistique.",
};

const CATEGORIES = [
  { _type: "category" as const, title: "Eau Conditionnée", slug: { _type: "slug" as const, current: "eau" } },
  { _type: "category" as const, title: "Immobilier & BTP", slug: { _type: "slug" as const, current: "immobilier" } },
  { _type: "category" as const, title: "Transport & Logistique", slug: { _type: "slug" as const, current: "transport" } },
  { _type: "category" as const, title: "Actualités", slug: { _type: "slug" as const, current: "actualites" } },
];

const POSTS = [
  {
    _type: "post" as const,
    title: "OMERYX Group lance sa nouvelle gamme d'eau conditionnée premium",
    slug: { _type: "slug" as const, current: "nouvelle-gamme-eau-premium" },
    publishedAt: "2026-03-15T10:00:00Z",
    excerpt:
      "Découvrez notre nouvelle ligne de produits d'eau conditionnée, conçue pour répondre aux plus hauts standards de qualité et de durabilité environnementale. Une innovation qui renforce notre engagement envers la santé des consommateurs ivoiriens.",
    body: [
      {
        _type: "block",
        _key: "p1",
        style: "normal",
        markdefs: [],
        children: [
          { _type: "span", _key: "s1", text: "OMERYX Group est fier d'annoncer le lancement de sa nouvelle gamme d'eau conditionnée premium, fruit de plusieurs mois de recherche et développement. Cette nouvelle ligne de produits s'inscrit dans notre volonté constante d'offrir aux consommateurs ivoiriens une eau de la plus haute qualité." },
        ],
      },
      {
        _type: "block",
        _key: "h2-1",
        style: "h2",
        markdefs: [],
        children: [
          { _type: "span", _key: "s2", text: "Un processus de production rigoureux" },
        ],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        markdefs: [],
        children: [
          { _type: "span", _key: "s3", text: "Notre nouvelle usine, située dans la zone industrielle d'Abidjan, est équipée des technologies les plus avancées en matière de traitement et de conditionnement de l'eau. Chaque étape du processus — de la source à l'embouteillage — est soumise à des contrôles qualité stricts conformes aux normes internationales ISO 22000 et HACCP." },
        ],
      },
      {
        _type: "block",
        _key: "h2-2",
        style: "h2",
        markdefs: [],
        children: [
          { _type: "span", _key: "s4", text: "Engagement environnemental" },
        ],
      },
      {
        _type: "block",
        _key: "p3",
        style: "normal",
        markdefs: [],
        children: [
          { _type: "span", _key: "s5", text: "Conscients de notre responsabilité envers l'environnement, nous avons adopté des emballages 100% recyclables et mis en place un programme de collecte et de recyclage des bouteilles usagées. Notre objectif est de réduire de 40% notre empreinte carbone d'ici 2028." },
        ],
      },
      {
        _type: "block",
        _key: "blockquote-1",
        style: "blockquote",
        markdefs: [],
        children: [
          { _type: "span", _key: "s6", text: "\"L'accès à une eau de qualité est un droit fondamental. Chez OMERYX Group, nous nous engageons à rendre ce droit réalité pour chaque foyer ivoirien.\"" },
        ],
      },
      {
        _type: "block",
        _key: "h2-3",
        style: "h2",
        markdefs: [],
        children: [
          { _type: "span", _key: "s7", text: "Disponibilité" },
        ],
      },
      {
        _type: "block",
        _key: "p4",
        style: "normal",
        markdefs: [],
        children: [
          { _type: "span", _key: "s8", text: "La nouvelle gamme sera disponible dans tous les supermarchés, épiceries et points de vente partenaires à travers Abidjan, Bouaké, San-Pédro et Daloa dès le 1er avril 2026. Différents formats seront proposés : 500ml, 1L, 1.5L et 5L pour répondre à tous les besoins." },
        ],
      },
    ],
    categoryRef: "eau",
  },
  {
    _type: "post" as const,
    title: "Le marché immobilier abidjanais en pleine expansion en 2026",
    slug: { _type: "slug" as const, current: "marche-immobilier-abidjan-2026" },
    publishedAt: "2026-03-01T09:00:00Z",
    excerpt:
      "Analyse des tendances du marché immobilier à Abidjan et perspectives de croissance pour les investisseurs nationaux et internationaux. Tour 2 Lagos, Riviera Palmeraie, Zone 4 : les quartiers qui attirent le plus.",
    body: [
      {
        _type: "block",
        _key: "p1",
        style: "normal",
        markdefs: [],
        children: [
          { _type: "span", _key: "s1", text: "Le marché immobilier abidjanais connaît une croissance remarquable en 2026, porté par le dynamisme économique de la Côte d'Ivoire et les investissements massifs dans les infrastructures. OMERYX Group, fort de son expertise dans le secteur de l'immobilier et du BTP, analyse les tendances clés de ce marché en pleine mutation." },
        ],
      },
      {
        _type: "block",
        _key: "h2-1",
        style: "h2",
        markdefs: [],
        children: [
          { _type: "span", _key: "s2", text: "Les quartiers les plus dynamiques" },
        ],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        markdefs: [],
        children: [
          { _type: "span", _key: "s3", text: "Plusieurs zones concentrent l'essentiel des projets immobiliers neufs. Le Plateau reste le cœur des affaires avec des tours de bureaux modernes. La Riviera Palmeraie attire une clientèle haut de gamme avec ses villas et résidences sécurisées. La Zone 4 et Cocody Riviera continuent de voir leurs prix au mètre carré progresser de 8 à 12% par an." },
        ],
      },
      {
        _type: "block",
        _key: "h2-2",
        style: "h2",
        markdefs: [],
        children: [
          { _type: "span", _key: "s4", text: "Des opportunités pour les investisseurs" },
        ],
      },
      {
        _type: "block",
        _key: "p3",
        style: "normal",
        markdefs: [],
        children: [
          { _type: "span", _key: "s5", text: "Le retour à la stabilité politique et les réformes du code foncier ont ravivé l'intérêt des investisseurs internationaux. Les rendements locatifs à Abidjan oscillent entre 7% et 10% par an, bien au-dessus des moyennes européennes. OMERYX Group accompagne les investisseurs dans l'identification de projets rentables et conformes à la réglementation OHADA." },
        ],
      },
      {
        _type: "block",
        _key: "blockquote-1",
        style: "blockquote",
        markdefs: [],
        children: [
          { _type: "span", _key: "s6", text: "\"Abidjan est aujourd'hui l'une des villes les plus attractives d'Afrique de l'Ouest pour l'investissement immobilier. Les fondamentaux économiques sont solides et la demande ne cesse de croître.\"" },
        ],
      },
      {
        _type: "block",
        _key: "h2-3",
        style: "h2",
        markdefs: [],
        children: [
          { _type: "span", _key: "s7", text: "Les défis à relever" },
        ],
      },
      {
        _type: "block",
        _key: "p4",
        style: "normal",
        markdefs: [],
        children: [
          { _type: "span", _key: "s8", text: "Malgré cet essor, le marché fait face à des défis structurels : le coût élevé des matériaux de construction, les lenteurs administratives pour l'obtention des permis de construire, et la nécessité de développer un logement social accessible. OMERYX Group s'engage à proposer des solutions immobilières innovantes et abordables." },
        ],
      },
    ],
    categoryRef: "immobilier",
  },
  {
    _type: "post" as const,
    title: "Transport sous-régional : les opportunités de la CEDEAO",
    slug: { _type: "slug" as const, current: "transport-cedeao-opportunites" },
    publishedAt: "2026-02-20T08:00:00Z",
    excerpt:
      "Les accords de libre-échange de la CEDEAO ouvrent de nouvelles perspectives pour le transport de marchandises en Afrique de l'Ouest. OMERYX Group positionne sa flotte logistique pour capter cette dynamique.",
    body: [
      {
        _type: "block",
        _key: "p1",
        style: "normal",
        markdefs: [],
        children: [
          { _type: "span", _key: "s1", text: "L'espace CEDEAO représente un marché de plus de 400 millions de consommateurs, mais les échanges intra-régionnels ne représentent que 15% du commerce total. Le secteur du transport et de la logistique joue un rôle crucial dans la réalisation du potentiel commercial de la sous-région ouest-africaine." },
        ],
      },
      {
        _type: "block",
        _key: "h2-1",
        style: "h2",
        markdefs: [],
        children: [
          { _type: "span", _key: "s2", text: "Le corridor Abidjan-Ouagadougou-Bamako" },
        ],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        markdefs: [],
        children: [
          { _type: "span", _key: "s3", text: "Ce corridor stratégique est l'un des axes de transport les plus importants d'Afrique de l'Ouest. OMERYX Group y opère une flotte de camions modernes dédiés au transport de marchandises, reliant les ports d'Abidjan et San-Pédro aux marchés intérieurs du Burkina Faso, du Mali et au-delà. En 2025, notre volume de fret sous-régional a augmenté de 35%." },
        ],
      },
      {
        _type: "block",
        _key: "h2-2",
        style: "h2",
        markdefs: [],
        children: [
          { _type: "span", _key: "s4", text: "Modernisation et digitalisation" },
        ],
      },
      {
        _type: "block",
        _key: "p3",
        style: "normal",
        markdefs: [],
        children: [
          { _type: "span", _key: "s5", text: "OMERYX Group investit massivement dans la digitalisation de sa chaîne logistique : GPS en temps réel, gestion d'entrepôts automatisée, et plateforme de suivi en ligne pour les clients. Ces innovations permettent de réduire les délais de livraison de 20% et d'optimiser les coûts de transport." },
        ],
      },
      {
        _type: "block",
        _key: "blockquote-1",
        style: "blockquote",
        markdefs: [],
        children: [
          { _type: "span", _key: "s6", text: "\"La performance logistique est un avantage compétitif décisif. Nos investissements dans la technologie nous permettent de proposer des délais et une fiabilité inégalés sur le marché sous-régional.\"" },
        ],
      },
      {
        _type: "block",
        _key: "h2-3",
        style: "h2",
        markdefs: [],
        children: [
          { _type: "span", _key: "s7", text: "Perspectives 2026-2028" },
        ],
      },
      {
        _type: "block",
        _key: "p4",
        style: "normal",
        markdefs: [],
        children: [
          { _type: "span", _key: "s8", text: "Avec l'amélioration prévue des infrastructures routières et l'harmonisation douanière au sein de la CEDEAO, OMERYX Group prévoit d'étendre ses opérations vers le Ghana, la Guinée et le Liberia d'ici 2028, avec l'ouverture de nouveaux centres logistiques à Yamoussoukro et Takoradi." },
        ],
      },
    ],
    categoryRef: "transport",
  },
  {
    _type: "post" as const,
    title: "Normes OHADA : ce que tout entrepreneur doit savoir",
    slug: { _type: "slug" as const, current: "normes-ohada-entrepreneur" },
    publishedAt: "2026-02-10T07:00:00Z",
    excerpt:
      "Guide pratique des normes OHADA applicables aux SARL en Côte d'Ivoire : obligations comptables, fiscales et juridiques essentielles pour tout entrepreneur.",
    body: [
      {
        _type: "block",
        _key: "p1",
        style: "normal",
        markdefs: [],
        children: [
          { _type: "span", _key: "s1", text: "L'Organisation pour l'Harmonisation en Afrique du Droit des Affaires (OHADA) régit le droit des affaires dans 17 États membres, dont la Côte d'Ivoire. Pour les entrepreneurs, comprendre ces normes est indispensable pour structurer et pérenniser leur activité. OMERYX Group partage son expérience en tant que SARL ivoirienne." },
        ],
      },
      {
        _type: "block",
        _key: "h2-1",
        style: "h2",
        markdefs: [],
        children: [
          { _type: "span", _key: "s2", text: "Les obligations comptables" },
        ],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        markdefs: [],
        children: [
          { _type: "span", _key: "s3", text: "Toute SARL soumise au régime normal doit tenir sa comptabilité conformément au Système Comptable OHADA (SYSCOHADA). Cela inclut la tenue d'un journal général, d'un grand livre, d'une balance et de l'établissement des états financiers annuels (bilan, compte de résultat, tableau des flux de trésorerie). Les entreprises soumises au régime simplifié bénéficient d'allégements comptables." },
        ],
      },
      {
        _type: "block",
        _key: "h2-2",
        style: "h2",
        markdefs: [],
        children: [
          { _type: "span", _key: "s4", text: "Le droit commercial et les sociétés" },
        ],
      },
      {
        _type: "block",
        _key: "p3",
        style: "normal",
        markdefs: [],
        children: [
          { _type: "span", _key: "s5", text: "L'Acte Uniforme relatif au Droit des Sociétés Commerciales et du GIE définit les règles de constitution, de fonctionnement et de dissolution des sociétés. Pour une SARL, le capital social minimum est fixé à 1 000 000 FCFA. La rédaction des statuts, l'enregistrement au RCCM et la publication d'un avis de constitution sont des étapes obligatoires." },
        ],
      },
      {
        _type: "block",
        _key: "blockquote-1",
        style: "blockquote",
        markdefs: [],
        children: [
          { _type: "span", _key: "s6", text: "\"Une bonne connaissance des normes OHADA dès la création de son entreprise permet d'éviter de coûteuses rectifications ultérieures et de rassurer les partenaires financiers.\"" },
        ],
      },
      {
        _type: "block",
        _key: "h2-3",
        style: "h2",
        markdefs: [],
        children: [
          { _type: "span", _key: "s7", text: "Conseils pratiques" },
        ],
      },
      {
        _type: "block",
        _key: "p4",
        style: "normal",
        markdefs: [],
        children: [
          { _type: "span", _key: "s8", text: "OMERYX Group recommande à tout entrepreneur de : s'entourer d'un expert-comptable certifié OHADA, souscrire une assurance responsabilité civile professionnelle, respecter les délais de dépôt des états financiers (6 mois après la clôture de l'exercice), et consulter régulièrement les mises à jour juridiques publiées par la CCJA (Cour Commune de Justice et d'Arbitrage)." },
        ],
      },
    ],
    categoryRef: "actualites",
  },
];

// ─── Helper: check if document exists ────────────────────────────────────────

async function exists(type: string, slug: string): Promise<string | null> {
  try {
    const docs = await client.fetch<{ _id: string }[]>(
      `*[_type == $type && slug.current == $slug]{_id}`,
      { type, slug }
    );
    return docs.length > 0 ? docs[0]._id : null;
  } catch {
    return null;
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log("🌱 Sanity Seed — Début\n");

  // 1. Create author
  console.log("📝 Auteur...");
  try {
    const existingAuthor = await client.fetch<{ _id: string }[]>(
      `*[_type == "author" && name == $name]{_id}`,
      { name: AUTHOR.name }
    );
    let authorId: string;

    if (existingAuthor.length > 0) {
      authorId = existingAuthor[0]._id;
      console.log(`   ✓ Auteur existant: ${authorId}`);
    } else {
      const doc = await client.create(AUTHOR);
      authorId = doc._id;
      console.log(`   ✓ Auteur créé: ${authorId}`);
    }

    // 2. Create categories
    console.log("\n📂 Catégories...");
    const categoryIds: Record<string, string> = {};

    for (const cat of CATEGORIES) {
      try {
        const existing = await exists("category", cat.slug.current);
        if (existing) {
          categoryIds[cat.slug.current] = existing;
          console.log(`   ✓ "${cat.title}" existe déjà (${existing})`);
        } else {
          const doc = await client.create(cat);
          categoryIds[cat.slug.current] = doc._id;
          console.log(`   ✓ "${cat.title}" créé (${doc._id})`);
        }
      } catch (err) {
        console.error(`   ✗ Erreur pour "${cat.title}":`, err);
      }
    }

    // 3. Create posts
    console.log("\n📰 Articles...");

    for (const post of POSTS) {
      try {
        const existingId = await exists("post", post.slug.current);
        if (existingId) {
          console.log(`   ✓ "${post.title}" existe déjà (${existingId})`);
          continue;
        }

        const catId = categoryIds[post.categoryRef];
        if (!catId) {
          console.error(`   ✗ Catégorie "${post.categoryRef}" non trouvée pour "${post.title}"`);
          continue;
        }

        const doc = await client.create({
          _type: "post",
          title: post.title,
          slug: post.slug,
          publishedAt: post.publishedAt,
          excerpt: post.excerpt,
          body: post.body,
          author: { _type: "reference", _ref: authorId },
          categories: [{ _type: "reference", _ref: catId }],
        });

        console.log(`   ✓ "${post.title}" créé (${doc._id})`);
      } catch (err) {
        console.error(`   ✗ Erreur pour "${post.title}":`, err);
      }
    }

    console.log("\n✅ Seed terminé avec succès !");
  } catch (error) {
    console.error("\n❌ Erreur générale:", error);
    process.exit(1);
  }
}

main();
