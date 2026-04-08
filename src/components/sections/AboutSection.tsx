"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Shield,
  Lightbulb,
  Heart,
  Award,
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Nous visons les plus hauts standards de qualité dans chacun de nos secteurs d'activité.",
  },
  {
    icon: Shield,
    title: "Intégrité",
    description: "Transparence et éthique dans toutes nos relations commerciales et partenariats.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Solutions modernes et adaptées aux réalités du marché ivoirien et sous-régional.",
  },
  {
    icon: Heart,
    title: "Engagement Local",
    description: "Contribuer au développement économique et social de la Côte d'Ivoire.",
  },
];

export default function AboutSection() {
  return (
    <section id="a-propos" className="py-20 lg:py-28 bg-[#EFF6FF]">
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
            Qui sommes-nous
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3A5C] mt-3 mb-5">
            À Propos d&apos;OMERYX Group
          </h2>
          <p className="text-[#374151]/80 text-lg leading-relaxed">
            Découvrez l&apos;histoire, la vision et les valeurs qui font
            d&apos;OMERYX Group un partenaire de confiance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1B3A5C]/10 px-4 py-2">
              <span className="text-sm font-semibold text-[#1B3A5C]">
                Fondée le 25 janvier 2026
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#1B3A5C]">
              Un acteur multi-secteurs en croissance
            </h3>

            <div className="space-y-4 text-[#374151]/80 leading-relaxed">
              <p>
                OMERYX Group est une Société à Responsabilité Limitée
                unipersonnelle de droit ivoirien, constituée le 25 janvier 2026
                à Songon Adiopodoumé (Km17), Abidjan. Dirigée par M. SANOGO
                ABOU, logisticien de formation, la société dispose d&apos;un
                capital social de 4 000 000 FCFA.
              </p>
              <p>
                La société se positionne comme un groupe multi-secteurs
                intervenant dans la production d&apos;eau conditionnée, la
                gestion immobilière et le BTP, ainsi que le transport et la
                logistique. Chaque secteur est conçu pour répondre aux besoins
                spécifiques du marché ivoirien et de la sous-région CEDEAO.
              </p>
              <p>
                OMERYX Group allie l&apos;économie locale aux standards
                internationaux, avec un engagement fort envers la qualité, la
                conformité réglementaire et le développement durable.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <Card className="border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1B3A5C]/10 mb-3">
                    <Eye className="h-5 w-5 text-[#1B3A5C]" />
                  </div>
                  <h4 className="font-bold text-[#1B3A5C] mb-2">Notre Vision</h4>
                  <p className="text-sm text-[#374151]/70 leading-relaxed">
                    Devenir un acteur de référence en Côte d&apos;Ivoire et
                    dans la sous-région, reconnu pour la qualité et la
                    fiabilité de ses services.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#F59E0B]/10 mb-3">
                    <Target className="h-5 w-5 text-[#F59E0B]" />
                  </div>
                  <h4 className="font-bold text-[#1B3A5C] mb-2">Notre Mission</h4>
                  <p className="text-sm text-[#374151]/70 leading-relaxed">
                    Offrir des solutions professionnelles et accessibles dans
                    nos secteurs d&apos;activité, tout en contribuant au
                    développement économique local.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Right: Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#1B3A5C] mb-8">
              Nos Valeurs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="group h-full border-0 shadow-md hover:shadow-lg bg-white transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1B3A5C] to-[#2A5082] mb-4 group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-bold text-[#1B3A5C] mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-[#374151]/70 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Legal Note */}
            <div className="mt-8 p-6 rounded-xl bg-[#1B3A5C]/5 border border-[#1B3A5C]/10">
              <h4 className="font-semibold text-[#1B3A5C] mb-3 text-sm">
                Informations Juridiques
              </h4>
              <div className="space-y-2 text-sm text-[#374151]/70">
                <p>
                  <span className="font-medium text-[#1B3A5C]">Forme :</span>{" "}
                  SARL Unipersonnelle
                </p>
                <p>
                  <span className="font-medium text-[#1B3A5C]">Durée :</span>{" "}
                  99 ans
                </p>
                <p>
                  <span className="font-medium text-[#1B3A5C]">Capital :</span>{" "}
                  4 000 000 FCFA (200 parts de 20 000 FCFA)
                </p>
                <p>
                  <span className="font-medium text-[#1B3A5C]">Gérant :</span>{" "}
                  M. SANOGO ABOU
                </p>
                <p>
                  <span className="font-medium text-[#1B3A5C]">
                    Régime juridique :
                  </span>{" "}
                  Acte Uniforme OHADA révisé du 30 janvier 2014
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
