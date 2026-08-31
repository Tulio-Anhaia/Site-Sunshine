import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a Sunshine Desenvolvimento Esportivo em Sorocaba/SP.",
  alternates: { canonical: "/contato" },
};

const contactPointJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  telephone: company.contact.phone,
  email: company.contact.emailCommercial,
  contactType: "customer service",
  areaServed: "BR",
  availableLanguage: "Portuguese",
};

export default function ContatoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contato", href: "/contato" }]} />
      <div className="mx-auto max-w-container px-4 sm:px-8 pb-20">
        <SectionTitle as="h1" eyebrow="Fale com a gente" title="Contato" />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Phone size={20} className="text-gold-dark mt-1 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold text-graphite">WhatsApp</p>
                <a href={`https://wa.me/${company.contact.whatsappPrimaryDigits}`} className="text-graphite/70 hover:text-gold-dark">
                  {company.contact.whatsappPrimary}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={20} className="text-gold-dark mt-1 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold text-graphite">Telefone</p>
                <p className="text-graphite/70">{company.contact.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={20} className="text-gold-dark mt-1 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold text-graphite">E-mail comercial</p>
                <a href={`mailto:${company.contact.emailCommercial}`} className="text-graphite/70 hover:text-gold-dark">
                  {company.contact.emailCommercial}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-gold-dark mt-1 shrink-0" aria-hidden="true" />
              <address className="not-italic text-graphite/70">
                {company.address.street}<br />
                {company.address.neighborhood}, {company.address.city}/{company.address.state} — {company.address.zip}
              </address>
            </div>
          </div>

          <div className="rounded-card bg-white p-6 shadow-card border border-graphite/10">
            <ContactForm />
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointJsonLd) }}
      />
    </>
  );
}
