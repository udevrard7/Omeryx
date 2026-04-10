import {
  ShieldCheck,
  Award,
  MapPin,
  Globe,
} from "lucide-react";

/* ──────────────────────── Data ─────────────────────── */

interface Argument {
  icon: typeof ShieldCheck;
  title: string;
  description: string;
}

const ARGUMENTS: Argument[] = [
  {
    icon: ShieldCheck,
    title: "Conformité OHADA",
    description:
      "Nos processus et pratiques sont entièrement alignés avec les normes OHADA, garantissant une transparence et une sécurité juridique totales pour nos partenaires.",
  },
  {
    icon: Award,
    title: "Qualité certifiée",
    description:
      "Nous nous engageons aux plus hauts standards de qualité dans chacun de nos secteurs d'activité, de la production à la livraison finale.",
  },
  {
    icon: MapPin,
    title: "Ancrage local",
    description:
      "Basés à Abidjan, nous maîtrisons les dynamiques du marché ivoirien et offrons des solutions adaptées aux réalités locales.",
  },
  {
    icon: Globe,
    title: "Réseau international",
    description:
      "Grâce à nos partenariats stratégiques, nous connectons la Côte d'Ivoire aux opportunités d'affaires à travers la CEDEAO et au-delà.",
  },
];

/* ──────────────────── Component ──────────────────── */

export default function WhyUsSection(): React.ReactElement {
  return (
    <section id="a-propos" className="bg-[#EFF6FF] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
            Pourquoi nous choisir
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#1B3A5C] sm:text-4xl lg:text-5xl">
            Nos Atouts
          </h2>
          <p className="text-base leading-relaxed text-[#6B7280] sm:text-lg">
            Des fondamentaux solides qui font d&apos;OMERYX Group un partenaire
            de confiance pour vos projets.
          </p>
        </div>

        {/* Arguments grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {ARGUMENTS.map((arg) => (
            <div
              key={arg.title}
              className="group rounded-2xl border border-white/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1B3A5C]/[.06] lg:p-8"
            >
              {/* Icon */}
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B3A5C]/[.08] transition-colors duration-300 group-hover:bg-[#2563EB]/[.1]">
                <arg.icon className="h-6 w-6 text-[#1B3A5C] transition-colors duration-300 group-hover:text-[#2563EB]" />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-bold text-[#1B3A5C]">
                {arg.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#6B7280]">
                {arg.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
