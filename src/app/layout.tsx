import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OMERYX Group | SARL - Eau, Immobilier, Transport & Logistique",
  description:
    "OMERYX Group est une SARL ivoirienne spécialisée dans la production d'eau conditionnée, la gestion immobilière & BTP, et le transport & logistique. Basée à Abidjan, Côte d'Ivoire.",
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
  ],
  authors: [{ name: "OMERYX Group" }],
  openGraph: {
    title: "OMERYX Group | SARL - Eau, Immobilier, Transport & Logistique",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
