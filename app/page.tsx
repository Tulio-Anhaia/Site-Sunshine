import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import FlashSection from "@/components/FlashSection";
import SponsorSection from "@/components/SponsorSection";
import ContactForm from "@/components/ContactForm";
import { events, services, company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sunshine Esportes | Eventos esportivos em Sorocaba",
  description:
    "Conheça a Sunshine Desenvolvimento Esportivo: organização de corridas, caminhadas, eventos infantis e ativações de marca em Sorocaba/SP.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Próximos eventos */}
      <section className="mx-auto max-w-container px-4 sm:px-8 py-16 sm:py-20" aria-labelledby="eventos-heading">
        <SectionTitle
          as="h2"
          eyebrow="Agenda 2026"
          title="Próximos eventos"
          description="Eventos esportivos organizados pela Sunshine em Sorocaba/SP."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </section>

      {/* Sobre a empresa */}
      <section className="bg-cream" aria-labelledby="sobre-heading">
        <div className="mx-auto max-w-container px-4 sm:px-8 py-16 sm:py-20 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              as="h2"
              eyebrow="Quem somos"
              title="Sobre a Sunshine"
              description={company.description}
            />
            <Button href="/sobre" variant="secondary">
              Conheça a Sunshine
            </Button>
          </div>
          <div
            className="aspect-video w-full rounded-card bg-white border border-graphite/10 flex items-center justify-center text-graphite/40 text-sm"
            role="img"
            aria-label="Foto da equipe Sunshine — ainda não disponível"
          >
            [INSERIR FOTO — /public/images/equipe.webp]
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="mx-auto max-w-container px-4 sm:px-8 py-16 sm:py-20" aria-labelledby="servicos-heading">
        <SectionTitle
          as="h2"
          eyebrow="O que fazemos"
          title="Serviços"
          description="Soluções completas para eventos esportivos, mobilidade e ativação de marcas."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="rounded-card border border-graphite/10 bg-white p-6 shadow-card"
            >
              <h3 className="font-display font-bold text-lg text-graphite mb-3">
                {service.title}
              </h3>
              <ul className="text-sm text-graphite/70 space-y-1">
                {service.items.slice(0, 4).map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/servicos" variant="tertiary">
            Ver todos os serviços →
          </Button>
        </div>
      </section>

      <SponsorSection />
      <FlashSection />

      {/* Eventos realizados — placeholder */}
      <section className="mx-auto max-w-container px-4 sm:px-8 py-16 sm:py-20" aria-labelledby="realizados-heading">
        <SectionTitle
          as="h2"
          eyebrow="Histórico"
          title="Eventos realizados"
          description="Conteúdo em preparação, aguardando validação e autorização de divulgação."
        />
        <Button href="/eventos-realizados" variant="secondary">
          Ver eventos realizados
        </Button>
      </section>

      {/* Contato */}
      <section className="bg-cream" aria-labelledby="contato-heading">
        <div className="mx-auto max-w-container px-4 sm:px-8 py-16 sm:py-20 grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              as="h2"
              eyebrow="Fale com a gente"
              title="Contato"
              description="Entre em contato com a equipe da Sunshine Esportes."
            />
            <ul className="text-graphite/80 space-y-2 text-sm">
              <li>WhatsApp: {company.contact.whatsappPrimary}</li>
              <li>Telefone: {company.contact.phone}</li>
              <li>E-mail: {company.contact.emailCommercial}</li>
            </ul>
          </div>
          <div className="rounded-card bg-white p-6 shadow-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
