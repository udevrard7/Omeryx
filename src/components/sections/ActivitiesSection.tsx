"use client";

import {
  Droplets,
  Building2,
  Truck,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/* ──────────────────────── Data ─────────────────────── */

interface Activity {
  title: string;
  description: string;
  icon: typeof Droplets;
  color: string;
  bgColor: string;
  borderColor: string;
  linkText: string;
}

const ACTIVITIES: Activity[] = [
  {
    title: "Eau Conditionnée",
    description:
      "Production et distribution d'eau purifiée répondant aux normes internationales de qualité et de sécurité alimentaire.",
    icon: Droplets,
    color: "text-[#2563EB]",
    bgColor: "bg-[#EFF6FF]",
    borderColor: "border-[#2563EB]/20 hover:border-[#2563EB]/40",
    linkText: "En savoir plus →",
  },
  {
    title: "Immobilier & BTP",
    description:
      "Construction, rénovation et gestion de projets immobiliers résidentiels et commerciaux de haute qualité.",
    icon: Building2,
    color: "text-[#1B3A5C]",
    bgColor: "bg-[#EFF6FF]",
    borderColor: "border-[#1B3A5C]/20 hover:border-[#1B3A5C]/40",
    linkText: "En savoir plus →",
  },
  {
    title: "Transport & Logistique",
    description:
      "Solutions de transport de marchandises et services logistiques intégrés pour les entreprises en Afrique de l'Ouest.",
    icon: Truck,
    color: "text-[#F59E0B]",
    bgColor: "bg-[#FFFBEB]",
    borderColor: "border-[#F59E0B]/20 hover:border-[#F59E0B]/40",
    linkText: "En savoir plus →",
  },
];

/* ──────────────────── Component ──────────────────── */

export default function ActivitiesSection(): React.ReactElement {
  return (
    <section id="activites" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
            Ce que nous faisons
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#1B3A5C] sm:text-4xl lg:text-5xl">
            Nos Domaines d&apos;Expertise
          </h2>
          <p className="text-base leading-relaxed text-[#6B7280] sm:text-lg">
            OMERYX Group intervient dans trois secteurs clés pour accompagner
            le développement économique en Côte d&apos;Ivoire et dans la sous-région.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {ACTIVITIES.map((activity) => (
            <Card
              key={activity.title}
              className={`group cursor-pointer border ${activity.borderColor} bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[.06]`}
            >
              <CardContent className="p-6 lg:p-8">
                {/* Icon */}
                <div
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${activity.bgColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  <activity.icon className={`h-7 w-7 ${activity.color}`} />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-[#1B3A5C]">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-[#6B7280]">
                  {activity.description}
                </p>

                {/* Link */}
                <span
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${activity.color} transition-all duration-300 group-hover:gap-2.5`}
                >
                  {activity.linkText}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
