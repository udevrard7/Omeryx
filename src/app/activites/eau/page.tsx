import type { Metadata } from "next";
import Link from "next/link";
import {
  Droplets,
  Beaker,
  Package,
  Truck,
  Globe,
  ChevronRight,
  ShieldCheck,
  Leaf,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/* ──────────────────── Metadata ──────────────────── */

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Eau Conditionnée | OMERYX Group",
    description:
      "OMERYX Group — Production et commercialisation d'eau conditionnée en Côte d'Ivoire. Eau purifiée aux normes internationales, conditionnement PET et sachets biodégradables, distribution nationale et export CEDEAO.",
    openGraph: {
      title: "Eau Conditionnée | OMERYX Group",
      description:
        "Production et commercialisation d'eau conditionnée de qualité supérieure en Côte d'Ivoire.",
      url: "https://omeryxgroup.com/activites/eau",
      type: "website",
    },
  };
}

/* ──────────────────────── Data ─────────────────────── */

interface Service {
  icon: typeof Droplets;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const SERVICES: Service[] = [
  {
    icon: Beaker,
    title: "Production & Purification",
    description:
      "Production d'eau purifiée aux normes internationales grâce à un processus de traitement multi-étapes : filtration, osmose inverse et stérilisation UV garantissant une qualité optimale.",
    color: "text-[#2563EB]",
    bgColor: "bg-[#EFF6FF]",
  },
  {
    icon: Package,
    title: "Conditionnement PET & Sachets Biodégradables",
    description:
      "Emballage en bouteilles PET réutilisables et sachets biodégradables, conçus pour minimiser l'impact environnemental tout en préservant la fraîcheur du produit.",
    color: "text-[#2563EB]",
    bgColor: "bg-[#EFF6FF]",
  },
  {
    icon: Truck,
    title: "Distribution Gros / Demi-Gros / Détail",
    description:
      "Réseau de distribution couvrant tout le territoire ivoirien, du grossiste au détaillant, avec une logistique optimisée pour une livraison rapide et fiable.",
    color: "text-[#2563EB]",
    bgColor: "bg-[#EFF6FF]",
  },
  {
    icon: Globe,
    title: "Export Sous-Régional",
    description:
      "Exportation vers les pays de la CEDEAO, en conformité avec les normes douanières et sanitaires internationales. Partenariats établis au Burkina, Mali, Guinée et au-delà.",
    color: "text-[#2563EB]",
    bgColor: "bg-[#EFF6FF]",
  },
];

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    label: "Normes OMS",
    detail: "Qualité certifiée",
  },
  {
    icon: Leaf,
    label: "Éco-responsable",
    detail: "Sachets biodégradables",
  },
  {
    icon: TrendingUp,
    label: "Capacité industrielle",
    detail: "Production à grande échelle",
  },
];

/* ──────────────────── Page ──────────────────── */

export default function EauPage(): React.ReactElement {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/hero-eau.png)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(27,58,92,0.92) 0%, rgba(37,99,235,0.85) 100%)",
          }}
        />
        <div className="bg-pattern-dots absolute inset-0 opacity-15" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center justify-center gap-1.5 text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">
              Accueil
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href="/#activites"
              className="transition-colors hover:text-white"
            >
              Nos Activités
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Eau Conditionnée</span>
          </nav>

          {/* Title */}
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
            <Droplets className="h-7 w-7 text-white" />
          </div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Production et Commercialisation
            <br />
            d&apos;Eau Conditionnée
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/75">
            Une eau pure, safe et accessible — de la source à votre table.
          </p>
        </div>
      </section>

      {/* ── Description ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — Text */}
            <div>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
                Notre engagement
              </span>
              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-[#1B3A5C] sm:text-4xl">
                L&apos;eau, une ressource précieuse que nous traitons avec exigence
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#6B7280]">
                <p>
                  OMERYX Group s&apos;engage à fournir une eau conditionnée de
                  qualité supérieure, conforme aux normes de l&apos;Organisation
                  Mondiale de la Santé (OMS) et aux réglementations en vigueur
                  en Côte d&apos;Ivoire.
                </p>
                <p>
                  Notre chaîne de production intègre un processus de traitement
                  multi-étapes — filtration, osmose inverse, minéralisation et
                  stérilisation UV — garantissant une eau pure, saine et
                  équilibrée en minéraux essentiels.
                </p>
                <p>
                  Nous proposons une gamme complète de conditionnements adaptés à
                  tous les usages : bouteilles PET de différentes contenances et
                  sachets biodégradables pour une consommation responsable.
                </p>
              </div>
            </div>

            {/* Right — Highlights */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF]">
                    <item.icon className="h-6 w-6 text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#1B3A5C]">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#6B7280]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="bg-[#F9FAFB] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
              Nos prestations
            </span>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#1B3A5C] sm:text-4xl">
              Services &amp; Prestations
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {SERVICES.map((service) => (
              <Card
                key={service.title}
                className="group border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[.06]"
              >
                <CardContent className="p-6 lg:p-8">
                  <div
                    className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.bgColor} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <service.icon
                      className={`h-7 w-7 ${service.color}`}
                    />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-[#1B3A5C]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6B7280]">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden bg-[#2563EB] py-16 lg:py-20">
        <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-white/5" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Devenir distributeur — Contactez-nous
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base text-white/75 sm:text-lg">
            Rejoignez notre réseau de distribution et proposez une eau de qualité
            supérieure à vos clients. Nous offrons des conditions attractives et
            un accompagnement personnalisé.
          </p>
          <Button
            size="lg"
            className="group rounded-xl bg-white px-8 py-6 text-base font-bold text-[#2563EB] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/95 hover:shadow-xl"
            asChild
          >
            <Link href="/#contact">
              Nous contacter
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
