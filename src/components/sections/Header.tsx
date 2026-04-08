"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Droplets,
  Building2,
  Truck,
  Menu,
  ChevronDown,
  Phone,
} from "lucide-react";

const activities = [
  { name: "Eau Conditionnée", href: "#eau", icon: Droplets },
  { name: "Immobilier & BTP", href: "#immobilier", icon: Building2 },
  { name: "Transport & Logistique", href: "#transport", icon: Truck },
];

const navLinks = [
  { name: "Accueil", href: "#accueil" },
  { name: "À Propos", href: "#a-propos" },
  { name: "Nos Activités", href: "#activites", hasDropdown: true },
  { name: "Actualités", href: "#actualites" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="#accueil" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B3A5C] text-white font-bold text-lg transition-transform group-hover:scale-105">
              O
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#1B3A5C] leading-tight">
                OMERYX
              </span>
              <span className="text-xs font-medium text-[#1B3A5C]/60 uppercase tracking-widest">
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#374151] hover:text-[#1B3A5C] transition-colors rounded-lg hover:bg-[#EFF6FF]">
                    {link.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 rounded-xl bg-white shadow-xl border border-gray-100 py-2 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                      {activities.map((activity) => (
                        <a
                          key={activity.name}
                          href={activity.href}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-[#374151] hover:bg-[#EFF6FF] hover:text-[#1B3A5C] transition-colors"
                        >
                          <activity.icon className="h-5 w-5 text-[#1B3A5C]" />
                          {activity.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-[#374151] hover:text-[#1B3A5C] transition-colors rounded-lg hover:bg-[#EFF6FF]"
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden sm:inline-flex bg-[#F59E0B] hover:bg-[#D97706] text-[#1B3A5C] font-semibold rounded-lg px-5"
            >
              <a href="#contact">
                <Phone className="mr-2 h-4 w-4" />
                Nous Contacter
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={openMobile} onOpenChange={setOpenMobile}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-[#1B3A5C]">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-2 mt-8">
                  <div className="flex items-center gap-3 mb-6 px-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B3A5C] text-white font-bold text-lg">
                      O
                    </div>
                    <div>
                      <span className="text-lg font-bold text-[#1B3A5C]">OMERYX</span>
                      <span className="text-xs font-medium text-[#1B3A5C]/60 uppercase tracking-widest block">
                        Group
                      </span>
                    </div>
                  </div>
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setOpenMobile(false)}
                        className="flex items-center justify-between px-4 py-3 text-base font-medium text-[#374151] hover:text-[#1B3A5C] hover:bg-[#EFF6FF] rounded-lg transition-colors"
                      >
                        {link.name}
                        {link.hasDropdown && (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </a>
                      {link.hasDropdown && (
                        <div className="ml-4 border-l-2 border-[#F59E0B] pl-4">
                          {activities.map((activity) => (
                            <a
                              key={activity.name}
                              href={activity.href}
                              onClick={() => setOpenMobile(false)}
                              className="flex items-center gap-3 px-3 py-2.5 text-sm text-[#374151] hover:text-[#1B3A5C] hover:bg-[#EFF6FF] rounded-lg transition-colors"
                            >
                              <activity.icon className="h-4 w-4 text-[#1B3A5C]" />
                              {activity.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="mt-6 px-2">
                    <Button
                      asChild
                      className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-[#1B3A5C] font-semibold rounded-lg"
                    >
                      <a href="#contact" onClick={() => setOpenMobile(false)}>
                        <Phone className="mr-2 h-4 w-4" />
                        Nous Contacter
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
