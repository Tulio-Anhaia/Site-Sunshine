import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Eventos esportivos da Sunshine em Sorocaba",
  description:
    "Confira os eventos esportivos organizados pela Sunshine em Sorocaba/SP: Sunshine Kids Run e Sunshine Blessed Run 2026.",
  alternates: { canonical: "/eventos" },
};

export default function EventosPage() {
  // Nota de implementação: com apenas 2 eventos cadastrados, os filtros de
  // data/cidade/modalidade (EventFilters) estão preparados na arquitetura,
  // mas a UI de filtro só agrega valor real com um catálogo maior de eventos.
  // O componente pode ser reativado quando novos eventos forem publicados.
  return (
    <>
      <Breadcrumbs items={[{ label: "Eventos", href: "/eventos" }]} />
      <div className="mx-auto max-w-container px-4 sm:px-8 pb-20">
        <SectionTitle
          as="h1"
          eyebrow="Agenda 2026"
          title="Eventos esportivos"
          description="Todos os eventos organizados pela Sunshine em Sorocaba/SP, com informações confirmadas até o momento."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </>
  );
}
