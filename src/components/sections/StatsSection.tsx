"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ──────────────────────── Data ─────────────────────── */

interface Stat {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

const STATS: Stat[] = [
  { label: "Année de création", value: 2026, suffix: "", prefix: "" },
  { label: "Secteurs d'activité", value: 3, suffix: "", prefix: "" },
  { label: "Capital social", value: 4, suffix: "M FCFA", prefix: "" },
  { label: "Pays d'opération", value: 1, suffix: "+", prefix: "" },
];

/* ──────────────────── Counter Hook ──────────────────── */

function useCounter(
  end: number,
  isActive: boolean,
  duration = 2000
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let startTime: number | null = null;
    let rafId: number;

    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + (end - startValue) * eased);

      setCount(current);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [end, isActive, duration]);

  return count;
}

/* ──────────────────── StatItem ──────────────────── */

function StatItem({
  stat,
  isVisible,
}: {
  stat: Stat;
  isVisible: boolean;
}): React.ReactElement {
  const count = useCounter(stat.value, isVisible, 2000);

  return (
    <div className="text-center">
      <div className="mb-2 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
        {count}
        <span className="text-[#F59E0B]">{stat.suffix}</span>
      </div>
      <p className="text-sm font-medium uppercase tracking-wider text-white/60 sm:text-base">
        {stat.label}
      </p>
    </div>
  );
}

/* ──────────────────── Section ──────────────────── */

export default function StatsSection(): React.ReactElement {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });
    observer.observe(section);

    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#1B3A5C] py-20 lg:py-28"
    >
      {/* Background decorations */}
      <div className="bg-pattern-dots absolute inset-0 opacity-20" />
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #F59E0B, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
            En chiffres
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            OMERYX Group en bref
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-4 lg:gap-8">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
