"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#F59E0B]" />
      <div className="absolute inset-0 bg-pattern-dots opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3A5C] mb-6">
            Vous avez un projet ?
            <br />
            <span className="text-[#0F2640]">Parlons-en !</span>
          </h2>
          <p className="text-lg text-[#1B3A5C]/80 mb-10 leading-relaxed">
            Que ce soit pour de l&apos;eau conditionnée, un projet
            immobilier/BTP ou des besoins en transport et logistique, notre
            équipe est à votre écoute pour vous accompagner.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#1B3A5C] hover:bg-[#0F2640] text-white font-semibold text-base px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href="#contact">
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#1B3A5C]/30 text-[#1B3A5C] hover:bg-[#1B3A5C]/10 font-medium text-base px-8 py-6 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href="tel:+22500000000">Appeler directement</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
