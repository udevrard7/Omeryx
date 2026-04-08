import type { Metadata } from "next";
import ContactPage from "./page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez OMERYX Group pour vos projets en eau conditionnée, immobilier & BTP, ou transport & logistique. Notre équipe vous répond sous 24h ouvrées. Abidjan, Côte d'Ivoire.",
  openGraph: {
    title: "Contact | OMERYX Group",
    description:
      "Contactez OMERYX Group pour vos projets. Eau, Immobilier, Transport & Logistique à Abidjan.",
    url: "https://omeryxgroup.com/contact",
  },
};

export default function Page(): React.ReactElement {
  return <ContactPage />;
}
