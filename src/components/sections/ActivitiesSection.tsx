"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Building2, Truck, ArrowRight } from "lucide-react";

const activities = [
  {
    id: "eau",
    icon: Droplets,
    title: "Eau Conditionnée",
    description:
      "Production, conditionnement et distribution d'eau potable en bouteilles PET recyclables et sachets biodégradables. Conforme aux normes sanitaires nationales et internationales, pour une eau de qualité accessible à tous.",
    features: [
      "Eau en bouteilles PET recyclables",
      "Sachets biodégradables",
      "Distribution gros et demi-gros",
    ],
    color: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: "immobilier",
    icon: Building2,
    title: "Immobilier & BTP",
    description:
      "Gestion immobilière, transactions de biens bâtis et non bâtis, négoce de matériaux de construction et représentation commerciale internationale dans le secteur du BTP.",
    features: [
      "Gestion & location immobilière",
      "Matériaux BTP (import/export)",
      "Représentation internationale",
    ],
    color: "from-amber-500 to-orange-400",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    id: "transport",
    icon: Truck,
    title: "Transport & Logistique",
    description:
      "Transport de marchandises par voies routières, maritimes et aériennes. Organisation logistique complète incluant stockage, manutention, groupage et formalités douanières.",
    features: [
      "Transport multimodal",
      "Logistique & entreposage",
      "Import-export & douanes",
    ],
    color: "from-emerald-500 to-green-400",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ActivitiesSection() {
  return (
    <section id="activites" className="py-20 lg:py-28 bg-white">
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
            Nos Métiers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3A5C] mt-3 mb-5">
            Nos Activités
          </h2>
          <p className="text-[#374151]/80 text-lg leading-relaxed">
            OMERYX Group intervient dans trois secteurs stratégiques, offrant
            des solutions complètes et professionnelles adaptées aux besoins du
            marché ivoirien et sous-régional.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {activities.map((activity) => (
            <motion.div key={activity.id} variants={cardVariants}>
              <Card
                id={activity.id}
                className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden"
              >
                {/* Top accent line */}
                <div
                  className={`h-1.5 bg-gradient-to-r ${activity.color}`}
                />
                <CardContent className="p-8">
                  {/* Icon */}
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${activity.iconBg} ${activity.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <activity.icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1B3A5C] mb-3">
                    {activity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#374151]/70 text-sm leading-relaxed mb-6">
                    {activity.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {activity.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-[#374151]/70"
                      >
                        <div
                          className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${activity.color}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="text-[#1B3A5C] hover:bg-[#EFF6FF] p-0 h-auto font-medium group/btn"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
