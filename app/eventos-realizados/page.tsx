import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import { pastEventsPlaceholder } from "@/lib/data";

export const metadata: Metadata = {
  title: "Eventos realizados",
  description: "Histórico de eventos organizados pela Sunshine Desenvolvimento Esportivo.",
  alternates: { canonical: "/eventos-realizados" },
};

export default function EventosRealizadosPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Eventos realizados", href: "/eventos-realizados" }]} />
      <div className="mx-auto max-w-container px-4 sm:px-8 pb-20">
        <SectionTitle
          as="h1"
          eyebrow="Histórico"
          title="Eventos realizados"
          description="Esta página está preparada para receber o histórico de eventos da Sunshine assim que as informações forem validadas e autorizadas para divulgação."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pastEventsPlaceholder.map((ev) => (
            <div
              key={ev.name}
              className="rounded-card border border-graphite/10 bg-white p-6 shadow-card"
            >
              <h2 className="font-display font-bold text-lg text-graphite mb-2">
                {ev.name}
              </h2>
              <p className="text-sm text-graphite/50 italic">
                Detalhes, fotos e resultados aguardando validação e autorização
                de divulgação.
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
