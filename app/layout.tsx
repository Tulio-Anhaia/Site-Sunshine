import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import { company, siteUrl } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sunshine Esportes | Eventos esportivos em Sorocaba",
    template: "%s | Sunshine Esportes",
  },
  description:
    "A Sunshine Desenvolvimento Esportivo cria e organiza eventos esportivos em Sorocaba/SP, conectando famílias, empresas e comunidade através do esporte.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Sunshine Esportes",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    // [GERAR VERSÃO RECORTADA PARA FAVICON] — usando o logo completo temporariamente
    icon: "/images/sunshine-logo-transparente.png",
  },
};

export const viewport = {
  themeColor: "#12233A",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: company.tradeName,
  legalName: company.legalName,
  description: company.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.zip,
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.contact.phone,
    email: company.contact.emailCommercial,
    contactType: "customer service",
  },
  url: siteUrl,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <a href="#conteudo-principal" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="conteudo-principal">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
