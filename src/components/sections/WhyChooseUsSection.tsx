"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Scale,
  MapPin,
  Globe,
  Headphones,
  Layers,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Scale,
    title: "Conformité OHADA",
    description:
      "Statuts et opérations conformes à l'Acte Uniforme révisé de l'OHADA, garantissant une sécurité juridique optimale.",
  },
  {
    icon: MapPin,
    title: "Ancrage Local",
    description:
      "Implantés à Abidjan, nous comprenons les dynamiques du marché ivoirien et de la sous-région CEDEAO.",
  },
  {
    icon: Globe,
    title: "Standards Internationaux",
    description:
      "Nos pratiques et services répondent aux exigences internationales de qualité et de professionnalisme.",
  },
  {
    icon: Headphones,
    title: "Service Client Dédié",
    description:
      "Une équipe réactive et disponible pour accompagner nos clients et partenaires à chaque étape.",
  },
  {
    icon: Layers,
    title: "Solutions Multi-Secteurs",
    description:
      "Un interlocuteur unique pour trois secteurs stratégiques : eau, immobilier et transport.",
  },
  {
    icon: ShieldCheck,
    title: "Engagement Qualité",
    description:
      "Chaque produit et service est soumis à des contrôles rigoureux pour garantir la satisfaction de nos clients.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
            Nos Atouts
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3A5C] mt-3 mb-5">
            Pourquoi Nous Choisir ?
          </h2>
          <p className="text-[#374151]/80 text-lg leading-relaxed">
            OMERYX Group combine rigueur juridique, expertise locale et
            standards internationaux pour offrir des services d&apos;exception.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={itemVariants}>
              <Card className="group h-full border border-gray-100 hover:border-[#1B3A5C]/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl">
                <CardContent className="p-7">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFF6FF] group-hover:bg-[#1B3A5C] transition-colors duration-300 mb-5">
                    <reason.icon className="h-6 w-6 text-[#1B3A5C] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A5C] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-[#374151]/70 leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
