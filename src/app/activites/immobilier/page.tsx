import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Home,
  ArrowRightLeft,
  HardHat,
  Handshake,
  ShieldCheck,
  TrendingUp,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/* ──────────────────── Metadata ──────────────────── */

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Immobilier & BTP | OMERYX Group",
    description:
      "OMERYX Group — Gestion immobilière, BTP et représentation commerciale en Côte d'Ivoire. Location, transactions, vente de matériaux de construction et partenariats commerciaux.",
    openGraph: {
      title: "Immobilier & BTP | OMERYX Group",
      description:
        "Location, transactions immobilières, vente de matériaux BTP et représentation de marques en Côte d'Ivoire.",
      url: "https://omeryxgroup.com/activites/immobilier",
      type: "website",
    },
  };
}

/* ──────────────────────── Data ─────────────────────── */

interface Service {
  icon: typeof Building2;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const SERVICES: Service[] = [
  {
    icon: Home,
    title: "Location Appartements, Bureaux & Entrepôts",
    description:
      "Parc immobilier diversifié comprenant des appartements meublés et non meublés, des bureaux professionnels et des entrepôts logistiques. Gestion locative complète et accompagnement juridique.",
    color: "text-[#1B3A5C]",
    bgColor: "bg-[#EFF6FF]",
  },
  {
    icon: ArrowRightLeft,
    title: "Transactions Immobilières",
    description:
      "Achat, vente et estimation de biens immobiliers avec accompagnement juridique complet. Expertise du marché ivoirien et réseau de partenaires fiables pour des transactions sécurisées.",
    color: "text-[#1B3A5C]",
    bgColor: "bg-[#EFF6FF]",
  },
  {
    icon: HardHat,
    title: "Vente Matériaux BTP",
    description:
      "Fourniture de matériaux de construction de qualité : ciment, sable, acier, gravier, briques et bien plus. Livraison sur chantier et conseil technique pour vos projets de construction.",
    color: "text-[#1B3A5C]",
    bgColor: "bg-[#EFF6FF]",
  },
  {
    icon: Handshake,
    title: "Représentation de Marques",
    description:
      "Partenariats commerciaux stratégiques et représentation de marques internationales en Côte d'Ivoire. Accompagnement dans le développement commercial et la mise en marché.",
    color: "text-[#1B3A5C]",
    bgColor: "bg-[#EFF6FF]",
  },
];

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    label: "Sécurité juridique",
    detail: "Conformité OHADA garantie",
  },
  {
    icon: TrendingUp,
    label: "Expertise locale",
    detail: "Connaissance approfondie du marché",
  },
  {
    icon: MapPin,
    label: "Couverture nationale",
    detail: "Présence à Abidjan et régions",
  },
];

/* ──────────────────── Page ──────────────────── */

export default function ImmobilierPage(): React.ReactElement {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/hero-immobilier.png)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(15,38,64,0.92) 0%, rgba(27,58,92,0.88) 100%)",
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
            <span className="text-white">Immobilier & BTP</span>
          </nav>

          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
            <Building2 className="h-7 w-7 text-white" />
          </div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Gestion Immobilière, BTP
            <br />
            et Représentation Commerciale
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/75">
            Des solutions immobilières et commerciales adaptées aux réalités du
            marché ivoirien.
          </p>
        </div>
      </section>

      {/* ── Description ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
                Notre vision
              </span>
              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-[#1B3A5C] sm:text-4xl">
                Bâtir l&apos;avenir immobilier de la Côte d&apos;Ivoire
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#6B7280]">
                <p>
                  OMERYX Group intervient dans le secteur immobilier et du BTP
                  en tant qu&apos;acteur intégré, de la gestion locative à la
                  fourniture de matériaux de construction.
                </p>
                <p>
                  Notre approche repose sur une connaissance fine du marché
                  local, un réseau de partenaires de confiance et un engagement
                  envers la qualité et la transparence dans toutes nos
                  opérations.
                </p>
                <p>
                  Que vous soyez un investisseur, une entreprise ou un
                  particulier, nous vous offrons un accompagnement sur mesure
                  pour concrétiser vos projets immobiliers et commerciaux en
                  toute sérénité.
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
                    <item.icon className="h-6 w-6 text-[#1B3A5C]" />
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
      <section className="relative overflow-hidden bg-[#1B3A5C] py-16 lg:py-20">
        <div className="bg-pattern-dots absolute inset-0 opacity-10" />
        <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#2563EB]/10" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Soumettre un projet immobilier
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base text-white/75 sm:text-lg">
            Vous avez un projet de construction, de location ou de transaction
            immobilière ? Notre équipe vous accompagne de A à Z.
          </p>
          <Button
            size="lg"
            className="group rounded-xl bg-[#2563EB] px-8 py-6 text-base font-bold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#1D4ED8] hover:shadow-xl"
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
