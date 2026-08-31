import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Notícias",
  description: "Notícias e novidades da Sunshine Desenvolvimento Esportivo.",
  alternates: { canonical: "/noticias" },
};

export default function NoticiasPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Notícias", href: "/noticias" }]} />
      <div className="mx-auto max-w-container px-4 sm:px-8 pb-20">
        <SectionTitle
          as="h1"
          eyebrow="Fique por dentro"
          title="Notícias"
          description="Nenhuma notícia publicada até o momento. Novos conteúdos serão adicionados aqui conforme forem disponibilizados pela equipe da Sunshine."
        />
        <div className="rounded-card border border-dashed border-graphite/20 p-10 text-center text-graphite/50 text-sm">
          Área preparada para receber artigos e comunicados oficiais.
        </div>
      </div>
    </>
  );
}
