import type { Metadata } from "next";
import Link from "next/link";
import {
  Truck,
  Warehouse,
  MapPin,
  ShieldCheck,
  Clock,
  Globe,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QuotationForm from "@/components/sections/QuotationForm";

/* ──────────────────── Metadata ──────────────────── */

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Transport & Logistique | OMERYX Group",
    description:
      "OMERYX Group — Transport de marchandises et import-export en Côte d'Ivoire et en Afrique de l'Ouest. Transport routier, maritime, aérien, logistique multimodale et formalités douanières.",
    openGraph: {
      title: "Transport & Logistique | OMERYX Group",
      description:
        "Solutions de transport et logistique intégrées pour vos marchandises en Afrique de l'Ouest.",
      url: "https://omeryxgroup.com/activites/transport",
      type: "website",
    },
  };
}

/* ──────────────────────── Data ─────────────────────── */

interface Service {
  icon: typeof Truck;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const SERVICES: Service[] = [
  {
    icon: Truck,
    title: "Transport Routier, Maritime & Aérien",
    description:
      "Solutions de transport adaptées à tous types de marchandises et destinations. Flotte moderne, partenaires maritimes et aériens fiables pour des livraisons sécurisées.",
    color: "text-[#F59E0B]",
    bgColor: "bg-[#FFFBEB]",
  },
  {
    icon: Warehouse,
    title: "Logistique Multimodale",
    description:
      "Coordination des chaînes logistiques combinant plusieurs modes de transport pour une efficacité maximale. Gestion d'entrepôts, cross-docking et suivi en temps réel.",
    color: "text-[#F59E0B]",
    bgColor: "bg-[#FFFBEB]",
  },
  {
    icon: MapPin,
    title: "Livraison Dernier Kilomètre",
    description:
      "Service de livraison local rapide et fiable pour la satisfaction de vos clients finaux. Couverture urbaine et péri-urbaine à Abidjan et dans les principales villes de Côte d'Ivoire.",
    color: "text-[#F59E0B]",
    bgColor: "bg-[#FFFBEB]",
  },
  {
    icon: ShieldCheck,
    title: "Formalités Douanières",
    description:
      "Gestion complète des procédures douanières pour faciliter vos opérations import-export. Expertise réglementaire CEDEAO et conseils en optimisation fiscale.",
    color: "text-[#F59E0B]",
    bgColor: "bg-[#FFFBEB]",
  },
];

const HIGHLIGHTS = [
  {
    icon: Clock,
    label: "Rapidité",
    detail: "Livraison dans les délais",
  },
  {
    icon: Globe,
    label: "Réseau CEDEAO",
    detail: "Couverture sous-régionale",
  },
  {
    icon: ShieldCheck,
    label: "Sécurité",
    detail: "Marchandises assurées",
  },
];

/* ──────────────────── Page ──────────────────── */

export default function TransportPage(): React.ReactElement {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/hero-transport.png)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(27,58,92,0.92) 0%, rgba(245,158,11,0.75) 100%)",
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
            <span className="text-white">Transport & Logistique</span>
          </nav>

          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
            <Truck className="h-7 w-7 text-white" />
          </div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Transport de Marchandises
            <br />
            et Import-Export
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/75">
            Des solutions logistiques complètes pour connecter vos marchandises
            à travers l&apos;Afrique de l&apos;Ouest.
          </p>
        </div>
      </section>

      {/* ── Description ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
                Notre savoir-faire
              </span>
              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-[#1B3A5C] sm:text-4xl">
                Relier les entreprises, fluidifier les échanges
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#6B7280]">
                <p>
                  OMERYX Group offre des solutions de transport et de logistique
                  intégrées pour accompagner les entreprises dans leurs
                  opérations de fret national et international.
                </p>
                <p>
                  Notre expertise couvre l&apos;ensemble de la chaîne logistique
                  : du transport routier, maritime et aérien, à la gestion des
                  formalités douanières, en passant par l&apos;entreposage et
                  la livraison dernier kilomètre.
                </p>
                <p>
                  Forts de notre ancrage en Côte d&apos;Ivoire et de nos
                  partenariats dans la sous-région CEDEAO, nous garantissons un
                  service fiable, transparent et adapté aux besoins spécifiques
                  de chaque client.
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
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFFBEB]">
                    <item.icon className="h-6 w-6 text-[#F59E0B]" />
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
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
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

      {/* ── Quotation Form ── */}
      <QuotationForm />

      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden bg-[#F59E0B] py-16 lg:py-20">
        <div className="bg-pattern-dots absolute inset-0 opacity-10" />
        <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#1B3A5C] sm:text-4xl">
            Demander une cotation
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base text-[#1B3A5C]/75 sm:text-lg">
            Besoin d&apos;un devis pour un transport de marchandises ? Remplissez
            le formulaire ci-dessus ou contactez-nous directement pour une
            réponse sous 24h.
          </p>
          <Button
            size="lg"
            className="group rounded-xl bg-[#1B3A5C] px-8 py-6 text-base font-bold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#0F2640] hover:shadow-xl"
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
