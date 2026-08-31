import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import DownloadCard from "@/components/DownloadCard";
import SponsorForm from "@/components/SponsorForm";

export const metadata: Metadata = {
  title: "Mídia Kit",
  description: "Solicite o Mídia Kit da Sunshine Esportes com informações para patrocinadores.",
  alternates: { canonical: "/midia-kit" },
};

export default function MidiaKitPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Mídia Kit", href: "/midia-kit" }]} />
      <div className="mx-auto max-w-container px-4 sm:px-8 pb-20">
        <SectionTitle
          as="h1"
          eyebrow="Para patrocinadores"
          title="Mídia Kit"
          description="Materiais de apoio para empresas interessadas em patrocinar os eventos Sunshine."
        />

        <div className="grid gap-6 sm:grid-cols-2 mb-14">
          <DownloadCard
            title="Mídia Kit institucional"
            description="Apresentação da Sunshine, cotas de patrocínio e dados dos eventos."
            href={null}
          />
          <DownloadCard
            title="Regulamento Sunshine Kids Run"
            description="Regras oficiais do evento — aguardando publicação."
            href={null}
          />
          <DownloadCard
            title="Regulamento Sunshine Blessed Run 2026"
            description="Regras oficiais do evento — aguardando publicação."
            href={null}
          />
        </div>

        <div className="max-w-2xl">
          <h2 className="font-display font-bold text-2xl text-graphite mb-4">
            Solicitar o Mídia Kit
          </h2>
          <div className="rounded-card bg-white p-6 shadow-card border border-graphite/10">
            <SponsorForm />
          </div>
        </div>
      </div>
    </>
  );
}
