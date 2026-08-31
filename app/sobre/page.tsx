import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre a Sunshine Desenvolvimento Esportivo",
  description:
    "Conheça a missão, visão, valores e propósito da Sunshine Desenvolvimento Esportivo, empresa de Sorocaba/SP especializada em eventos esportivos.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Sobre", href: "/sobre" }]} />
      <article className="mx-auto max-w-container px-4 sm:px-8 pb-20">
        <SectionTitle as="h1" eyebrow="Institucional" title="Sobre a Sunshine" />

        <p className="max-w-3xl text-graphite/80 mb-10">{company.description}</p>

        <div className="grid gap-8 sm:grid-cols-3 mb-14">
          <div className="rounded-card border border-graphite/10 p-6">
            <h2 className="font-display font-bold text-lg mb-2">Missão</h2>
            <p className="text-sm text-graphite/70">{company.mission}</p>
          </div>
          <div className="rounded-card border border-graphite/10 p-6">
            <h2 className="font-display font-bold text-lg mb-2">Visão</h2>
            <p className="text-sm text-graphite/70">{company.vision}</p>
          </div>
          <div className="rounded-card border border-graphite/10 p-6">
            <h2 className="font-display font-bold text-lg mb-2">Propósito</h2>
            <p className="text-sm text-graphite/70">{company.purpose}</p>
          </div>
        </div>

        <h2 className="font-display font-bold text-2xl text-graphite mb-4">Valores</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-14">
          {company.values.map((value) => (
            <li
              key={value}
              className="rounded-btn bg-cream px-4 py-3 text-sm font-semibold text-graphite"
            >
              {value}
            </li>
          ))}
        </ul>

        <h2 className="font-display font-bold text-2xl text-graphite mb-4">
          Dados institucionais
        </h2>
        <dl className="grid gap-4 sm:grid-cols-2 text-sm text-graphite/80 max-w-2xl">
          <div>
            <dt className="font-semibold text-graphite">Razão social</dt>
            <dd>{company.legalName}</dd>
          </div>
          <div>
            <dt className="font-semibold text-graphite">CNPJ</dt>
            <dd>{company.cnpj} ({company.cnpjStatus})</dd>
          </div>
          <div>
            <dt className="font-semibold text-graphite">Fundação</dt>
            <dd>13 de julho de 2011</dd>
          </div>
          <div>
            <dt className="font-semibold text-graphite">Direção executiva</dt>
            <dd>{company.responsible.name} — {company.responsible.role}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-semibold text-graphite">Endereço</dt>
            <dd>
              {company.address.street}, {company.address.neighborhood},{" "}
              {company.address.city}/{company.address.state} — {company.address.zip}
            </dd>
          </div>
        </dl>
      </article>
    </>
  );
}
