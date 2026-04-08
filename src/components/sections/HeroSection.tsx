"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle, ChevronRight } from "lucide-react";

/* ──────────────────── Component ──────────────────── */

export default function HeroSection(): React.ReactElement {
  const [badgeVisible, setBadgeVisible] = useState(false);

  useEffect(() => {
    // Trigger badge animation after a short delay
    const timer = setTimeout(() => setBadgeVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="accueil"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1B3A5C 0%, #2563EB 100%)",
      }}
    >
      {/* Background pattern overlay */}
      <div className="bg-pattern-dots absolute inset-0 opacity-30" />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div
          className={`mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm transition-all duration-700 ${
            badgeVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-sm font-medium text-white/90">
            Basé à Abidjan, opérant dans toute la CEDEAO
          </span>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">OMERYX Group</span>
          <span className="mt-2 block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Bâtir, Produire, Connecter
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
          Votre partenaire multi-secteurs de confiance en Côte d&apos;Ivoire
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="group min-w-[200px] rounded-xl bg-white px-8 py-6 text-base font-bold text-[#1B3A5C] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/95 hover:shadow-xl hover:shadow-black/25"
            asChild
          >
            <a href="#activites">
              Nos Services
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group min-w-[200px] rounded-xl border-2 border-white/30 bg-transparent px-8 py-6 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            asChild
          >
            <a href="#contact">
              <MessageCircle className="mr-2 h-4 w-4" />
              Nous Contacter
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#activites"
          className="flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-white/80"
          aria-label="Défiler vers le bas"
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            Découvrir
          </span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
