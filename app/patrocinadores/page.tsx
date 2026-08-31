import type { Metadata } from "next";
import { Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import SponsorForm from "@/components/SponsorForm";
import { sponsorTiers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Patrocínio esportivo | Sunshine Desenvolvimento Esportivo",
  description:
    "Conheça as cotas de patrocínio da Sunshine Esportes e associe sua marca a eventos esportivos em Sorocaba/SP.",
  alternates: { canonical: "/patrocinadores" },
};

export default function PatrocinadoresPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Patrocinadores", href: "/patrocinadores" }]} />
      <div className="mx-auto max-w-container px-4 sm:px-8 pb-20">
        <SectionTitle
          as="h1"
          eyebrow="Sua marca em movimento"
          title="Seja patrocinador"
          description="Associe sua empresa a experiências esportivas que promovem saúde, relacionamento, participação e conexão com a comunidade."
        />

        <div className="grid gap-6 sm:grid-cols-3 mb-16">
          {sponsorTiers.map((tier) => (
            <div
              key={tier.slug}
              className="rounded-card border-t-4 border-gold bg-white p-6 shadow-card"
            >
              <h2 className="font-display font-bold text-xl text-graphite mb-1">
                {tier.name}
              </h2>
              <p className="text-gold-dark font-semibold mb-1">{tier.priceLabel}</p>
              <p className="text-sm text-graphite/60 mb-4">{tier.slots} vagas disponíveis</p>
              <div className="flex items-start gap-2 text-sm text-graphite/70">
                <Check size={16} className="text-gold-dark mt-0.5 shrink-0" aria-hidden="true" />
                Benefícios detalhados sob consulta com a equipe comercial
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display font-bold text-2xl text-graphite mb-4">
              Fale com a equipe comercial
            </h2>
            <p className="text-graphite/70 mb-4 text-sm">
              Preencha o formulário para solicitar o Mídia Kit ou consultar as
              opções de patrocínio para os eventos Sunshine Kids Run e Sunshine
              Blessed Run 2026.
            </p>
          </div>
          <div className="rounded-card bg-white p-6 shadow-card">
            <SponsorForm />
          </div>
        </div>
      </div>
    </>
  );
}
