import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Droplets,
  Building2,
  Truck,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F2640] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="#accueil" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F59E0B] text-[#1B3A5C] font-bold text-lg">
                O
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">OMERYX</span>
                <span className="text-xs font-medium text-white/60 uppercase tracking-widest">
                  Group
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              OMERYX Group est une SARL unipersonnelle ivoirienne, acteur
              multi-secteurs basé à Abidjan. Nous allions économie locale et
              standards internationaux.
            </p>
            <div className="text-xs text-white/50 space-y-1">
              <p>Capital social : 4 000 000 FCFA</p>
              <p>200 parts sociales de 20 000 FCFA</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F59E0B] mb-4">
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "#accueil" },
                { name: "À Propos", href: "#a-propos" },
                { name: "Nos Activités", href: "#activites" },
                { name: "Actualités", href: "#actualites" },
                { name: "Contact", href: "#contact" },
                { name: "Mentions Légales", href: "#mentions-legales" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#F59E0B] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F59E0B] mb-4">
              Nos Activités
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Eau Conditionnée", href: "#eau", icon: Droplets },
                { name: "Immobilier & BTP", href: "#immobilier", icon: Building2 },
                {
                  name: "Transport & Logistique",
                  href: "#transport",
                  icon: Truck,
                },
              ].map((activity) => (
                <li key={activity.name}>
                  <a
                    href={activity.href}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-[#F59E0B] transition-colors"
                  >
                    <activity.icon className="h-4 w-4" />
                    {activity.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F59E0B] mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-[#F59E0B] shrink-0" />
                <span className="text-sm text-white/70">
                  Songon Adiopodoumé Km17 (Lot n°318 Ilot 46), Qt Beugré Mambé,
                  Abidjan, Côte d&apos;Ivoire
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#F59E0B] shrink-0" />
                <a
                  href="tel:+22500000000"
                  className="text-sm text-white/70 hover:text-[#F59E0B] transition-colors"
                >
                  +225 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#F59E0B] shrink-0" />
                <a
                  href="mailto:contact@omeryxgroup.com"
                  className="text-sm text-white/70 hover:text-[#F59E0B] transition-colors"
                >
                  contact@omeryxgroup.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-[#F59E0B] shrink-0" />
                <span className="text-sm text-white/70">
                  Lun - Ven : 8h00 - 18h00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-white/10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center sm:text-left">
            © {new Date().getFullYear()} OMERYX Group. Tous droits réservés. SARL
            Unipersonnelle — Abidjan, Côte d&apos;Ivoire
          </p>
          <p className="text-xs text-white/40 text-center sm:text-right">
            Gérant : M. SANOGO ABOU — RCCM en cours d&apos;immatriculation
          </p>
        </div>
      </div>
    </footer>
  );
}
