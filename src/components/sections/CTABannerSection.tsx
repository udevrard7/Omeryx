import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ──────────────────── Component ──────────────────── */

export default function CTABannerSection(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-[#2563EB] py-16 lg:py-20">
      {/* Background decorative shapes */}
      <div
        className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/5"
      />
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-white/5"
      />
      <div className="bg-pattern-dots absolute inset-0 opacity-10" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Vous avez un projet ? Parlons-en.
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          Notre équipe est prête à étudier votre besoin et vous proposer une
          solution sur mesure. Contactez-nous dès aujourd&apos;hui.
        </p>

        <Button
          size="lg"
          className="group rounded-xl bg-white px-8 py-6 text-base font-bold text-[#2563EB] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/95 hover:shadow-xl hover:shadow-black/25"
          asChild
        >
          <a href="#contact">
            Nous contacter
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </section>
  );
}
