import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

/* ───────────────────── Font ───────────────────── */

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/* ──────────────────── Metadata ──────────────────── */

export const metadata: Metadata = {
  title: {
    default: "OMERYX Group | SARL – Eau, Immobilier, Transport & Logistique",
    template: "%s | OMERYX Group",
  },
  description:
    "OMERYX Group est une SARL unipersonnelle ivoirienne spécialisée dans la production d'eau conditionnée, la gestion immobilière & BTP, et le transport & logistique. Basée à Abidjan, Côte d'Ivoire.",
  keywords: [
    "OMERYX Group",
    "eau conditionnée",
    "immobilier",
    "BTP",
    "transport",
    "logistique",
    "Abidjan",
    "Côte d'Ivoire",
    "SARL",
    "OHADA",
  ],
  authors: [{ name: "OMERYX Group" }],
  metadataBase: new URL("https://omeryxgroup.com"),
  openGraph: {
    title: "OMERYX Group | SARL – Eau, Immobilier, Transport & Logistique",
    description:
      "Acteur multi-secteurs en Côte d'Ivoire. Eau conditionnée, Immobilier & BTP, Transport & Logistique.",
    url: "https://omeryxgroup.com",
    siteName: "OMERYX Group",
    type: "website",
    locale: "fr_CI",
  },
  twitter: {
    card: "summary_large_image",
    title: "OMERYX Group",
    description: "Acteur multi-secteurs en Côte d'Ivoire",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ──────────────────── Layout ───────────────────── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-[#374151]`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
