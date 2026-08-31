import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import PendingList from "@/components/PendingList";
import { events, siteUrl } from "@/lib/data";
import { hasPublicImage } from "@/lib/images";

const event = events.find((e) => e.slug === "sunshine-kids-run")!;

export const metadata: Metadata = {
  title: "Sunshine Kids Run | Evento esportivo infantil em Sorocaba",
  description:
    "Sunshine Kids Run: evento esportivo para crianças e famílias no Parque Carlos Alberto de Souza, Sorocaba/SP. Data a confirmar.",
  alternates: { canonical: "/eventos/sunshine-kids-run" },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.name,
  location: {
    "@type": "Place",
    name: event.venue,
    address: event.address,
  },
  eventStatus: "https://schema.org/EventScheduled",
  // Data não incluída no schema por não ser definitiva — evita dados
  // estruturados incorretos, conforme regra do briefing.
  organizer: {
    "@type": "Organization",
    name: "Sunshine Desenvolvimento Esportivo",
    url: siteUrl,
  },
};

export default function SunshineKidsRunPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Eventos", href: "/eventos" },
          { label: event.name, href: "/eventos/sunshine-kids-run" },
        ]}
      />
      <article className="mx-auto max-w-container px-4 sm:px-8 pb-20">
        <SectionTitle as="h1" eyebrow="Evento infantil e familiar" title={event.name} />

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {hasPublicImage(event.coverImage) ? (
              <div className="relative aspect-video w-full rounded-card overflow-hidden">
                <Image
                  src={event.coverImage}
                  alt={`Foto de capa do evento ${event.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div
                className="aspect-video w-full rounded-card bg-navy/90 flex flex-col items-center justify-center text-white/60 text-sm text-center px-6 gap-1"
                role="img"
                aria-label="Imagem oficial do evento — ainda não disponível"
              >
                <span>[INSERIR FOTO AUTORIZADA]</span>
                <span className="text-white/40 text-xs">{event.coverImage}</span>
              </div>
            )}

            <p className="text-graphite/80">
              O Sunshine Kids Run é um evento esportivo voltado para crianças e
              famílias, integrando o calendário 2026 da Sunshine Desenvolvimento
              Esportivo em Sorocaba/SP. Detalhes sobre percurso, modalidades e
              programação serão publicados assim que confirmados oficialmente.
            </p>

            <PendingList items={event.pendingItems} />
          </div>

          <aside className="rounded-card border border-graphite/10 bg-white p-6 shadow-card h-fit space-y-4">
            <h2 className="font-display font-bold text-lg text-graphite">Informações</h2>
            <ul className="space-y-3 text-sm text-graphite/80">
              <li className="flex items-start gap-2">
                <Calendar size={16} className="text-gold-dark mt-0.5 shrink-0" aria-hidden="true" />
                {event.dateLabel}
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold-dark mt-0.5 shrink-0" aria-hidden="true" />
                {event.venue} — {event.address}
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="text-gold-dark mt-0.5 shrink-0" aria-hidden="true" />
                {event.time}
              </li>
              <li className="flex items-start gap-2">
                <Users size={16} className="text-gold-dark mt-0.5 shrink-0" aria-hidden="true" />
                {event.audience} — {event.estimatedParticipants.toLocaleString("pt-BR")} participantes (estimativa)
              </li>
            </ul>

            <div id="inscricoes" className="space-y-3 pt-2">
              <Button variant="primary" className="w-full opacity-60 pointer-events-none">
                Inscrições em breve
              </Button>
              <Button variant="secondary" className="w-full opacity-60 pointer-events-none">
                Baixar regulamento
              </Button>
              <p className="text-xs text-graphite/50">
                Link de inscrição e regulamento serão publicados assim que
                disponíveis. [INSERIR LINK DE INSCRIÇÃO] [INSERIR REGULAMENTO EM PDF]
              </p>
            </div>
          </aside>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
    </>
  );
}
