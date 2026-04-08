"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2640]/95 via-[#1B3A5C]/85 to-[#2A5082]/70" />
        <div className="absolute inset-0 bg-pattern-dots opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-2 mb-8">
              <div className="h-2 w-2 rounded-full bg-[#F59E0B] animate-pulse" />
              <span className="text-sm font-medium text-[#F59E0B]">
                SARL Unipersonnelle — Abidjan, Côte d&apos;Ivoire
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            Bâtissons{" "}
            <span className="text-gradient-gold">l&apos;Avenir</span>{" "}
            Ensemble
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            OMERYX Group est un acteur multi-secteurs en croissance en Côte
            d&apos;Ivoire. Eau conditionnée, Immobilier & BTP, Transport &
            Logistique — des solutions qui allient qualité locale et standards
            internationaux.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-[#1B3A5C] font-semibold text-base px-8 py-6 rounded-lg shadow-lg shadow-[#F59E0B]/20 hover:shadow-[#F59E0B]/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href="#activites">
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-medium text-base px-8 py-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href="#contact">Nous contacter</a>
            </Button>
          </motion.div>

          {/* Key Stats Preview */}
          <motion.div
            className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/10 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {[
              { value: "3", label: "Secteurs d'activité" },
              { value: "2026", label: "Année de création" },
              { value: "99 ans", label: "Durée statutaire" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-[#F59E0B]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest">Défiler</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-white/50 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
