import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Resultados",
  description: "Consulta de resultados dos eventos da Sunshine Desenvolvimento Esportivo.",
  alternates: { canonical: "/resultados" },
};

export default function ResultadosPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Resultados", href: "/resultados" }]} />
      <div className="mx-auto max-w-container px-4 sm:px-8 pb-20">
        <SectionTitle
          as="h1"
          eyebrow="Área do participante"
          title="Resultados"
          description="A consulta de resultados por número de peito depende de integração com cronometragem oficial — funcionalidade futura, ainda a configurar."
        />
        <div className="rounded-card border border-dashed border-graphite/20 p-10 text-center text-graphite/50 text-sm flex flex-col items-center gap-3">
          <Search size={28} aria-hidden="true" />
          <p>Busca por número de peito — [A CONFIGURAR]</p>
          <p>Nenhum evento com resultados disponíveis no momento.</p>
        </div>
      </div>
    </>
  );
}
