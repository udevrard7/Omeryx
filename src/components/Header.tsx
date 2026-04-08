"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Droplets,
  Building2,
  Truck,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

/* ────────────────────────────── Data ────────────────────────────── */

interface NavChild {
  label: string;
  href: string;
  icon: typeof Droplets;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À Propos", href: "/#a-propos" },
  {
    label: "Nos Activités",
    href: "/#activites",
    children: [
      { label: "Eau Conditionnée", href: "/activites/eau", icon: Droplets },
      { label: "Immobilier & BTP", href: "/activites/immobilier", icon: Building2 },
      { label: "Transport & Logistique", href: "/activites/transport", icon: Truck },
    ],
  },
  { label: "Actualités", href: "/#actualites" },
  { label: "Contact", href: "/#contact" },
];

/* ──────────────────────────── Component ─────────────────────────── */

export default function Header(): React.ReactElement {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 lg:h-[72px]">
        {/* ── Logo ── */}
        <Link href="#accueil" className="flex items-center gap-2.5 select-none">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1B3A5C] text-white font-extrabold text-base">
            O
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[17px] font-bold text-[#1B3A5C] tracking-tight">
              OMERYX Group
            </span>
            {/*
              Tagline optionnelle — visible uniquement ≥ lg
              À décommenter quand le slogan final sera validé :
              <span className="hidden lg:block text-[10px] font-medium text-[#1B3A5C]/50 uppercase tracking-[.18em] mt-0.5">
                Votre partenaire multi-secteurs
              </span>
            */}
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-[#374151] transition-colors hover:bg-[#EFF6FF] hover:text-[#1B3A5C]"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                    dropdownOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="w-60 rounded-xl border border-gray-100 bg-white p-1.5 shadow-lg shadow-black/[.06]">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#374151] transition-colors hover:bg-[#EFF6FF] hover:text-[#1B3A5C]"
                      >
                        <child.icon className="h-4.5 w-4.5 text-[#1B3A5C]" />
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-[#374151] transition-colors hover:bg-[#EFF6FF] hover:text-[#1B3A5C]"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* ── Right side ── */}
        <div className="flex items-center gap-3">
          {/* CTA */}
          <Button
            asChild
            className="hidden sm:inline-flex rounded-lg bg-[#2563EB] px-5 text-sm font-semibold text-white shadow-sm shadow-[#2563EB]/20 transition-all hover:bg-[#1D4ED8] hover:shadow-md hover:shadow-[#2563EB]/25"
          >
            <a href="#contact">Nous Contacter</a>
          </Button>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-[#1B3A5C] transition-colors hover:bg-[#EFF6FF]"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[300px] max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(.32,.72,0,1)] lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 h-16">
          <span className="text-sm font-semibold text-[#1B3A5C]">Menu</span>
          <button
            type="button"
            onClick={closeMobile}
            className="rounded-lg p-1.5 text-[#374151] transition-colors hover:bg-gray-100"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-3 py-4 gap-0.5 overflow-y-auto max-h-[calc(100vh-140px)]">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label}>
                <span className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-[#1B3A5C]">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 text-[#1B3A5C]/40" />
                </span>
                <div className="ml-3 border-l-2 border-[#2563EB]/30 pl-3 mt-0.5 mb-1 space-y-0.5">
                  {item.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      onClick={closeMobile}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-[#374151] transition-colors hover:bg-[#EFF6FF] hover:text-[#1B3A5C]"
                    >
                      <child.icon className="h-4 w-4 text-[#1B3A5C]" />
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#374151] transition-colors hover:bg-[#EFF6FF] hover:text-[#1B3A5C]"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile CTA */}
        <div className="border-t border-gray-100 px-4 py-4">
          <Button
            asChild
            className="w-full rounded-lg bg-[#2563EB] py-5 text-sm font-semibold text-white hover:bg-[#1D4ED8]"
          >
            <a href="#contact" onClick={closeMobile}>
              Nous Contacter
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
