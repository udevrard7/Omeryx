import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Droplets,
  Building2,
  Truck,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

/* ────────────────────────── Data ──────────────────────────── */

const ACTIVITIES = [
  { label: "Eau Conditionnée", href: "/activites/eau", icon: Droplets },
  { label: "Immobilier & BTP", href: "/activites/immobilier", icon: Building2 },
  { label: "Transport & Logistique", href: "/activites/transport", icon: Truck },
];

const QUICK_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "À Propos", href: "/#a-propos" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
  { label: "Mentions Légales", href: "/mentions-legales" },
] as const;

/* ──────────────────────── Component ───────────────────────── */

export default function Footer(): React.ReactElement {
  return (
    <footer className="bg-[#1B3A5C] text-white">
      {/* ── Main content ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 – Logo & description */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white font-extrabold text-base">
                O
              </div>
              <span className="text-lg font-bold tracking-tight">
                OMERYX Group
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              SARL unipersonnelle ivoirienne, acteur multi-secteurs basé à
              Abidjan. Eau conditionnée, Immobilier &amp; BTP, Transport &amp;
              Logistique.
            </p>
          </div>

          {/* Col 2 – Nos Activités */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[.15em] text-white/40 mb-5">
              Nos Activités
            </h3>
            <ul className="space-y-3">
              {ACTIVITIES.map((a) => (
                <li key={a.href}>
                  <a
                    href={a.href}
                    className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <a.icon className="h-4 w-4" />
                    {a.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[.15em] text-white/40 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Coordonnées */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[.15em] text-white/40 mb-5">
              Coordonnées
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span className="text-sm leading-relaxed text-white/70">
                  Songon Adiopodoumé Km17, Lot&nbsp;318 Ilot&nbsp;46, Qt&nbsp;Beugré
                  Mambé, Abidjan, Côte d&apos;Ivoire
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-white/40" />
                <a
                  href="mailto:contact@omeryxgroup.com"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  contact@omeryxgroup.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-white/40" />
                <a
                  href="tel:+22500000000"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  +225 00 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <Separator className="bg-white/10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; 2026 OMERYX Group. Tous droits réservés.
          </p>
          <a
            href="#mentions-legales"
            className="text-xs text-white/40 transition-colors hover:text-white/70"
          >
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}
