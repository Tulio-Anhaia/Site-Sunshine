import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Organização de corridas de rua, caminhadas, passeios ciclísticos, eventos infantis, projetos de mobilidade e ativação de marcas pela Sunshine Esportes.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Serviços", href: "/servicos" }]} />
      <div className="mx-auto max-w-container px-4 sm:px-8 pb-20">
        <SectionTitle
          as="h1"
          eyebrow="O que fazemos"
          title="Serviços"
          description="A Sunshine planeja e opera experiências esportivas completas, do licenciamento à ativação de marcas."
        />

        <div className="space-y-10">
          {services.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="rounded-card border border-graphite/10 bg-white p-8 shadow-card"
            >
              <h2 className="font-display font-bold text-2xl text-graphite mb-4">
                {service.title}
              </h2>
              <ul className="grid gap-2 sm:grid-cols-2 text-sm text-graphite/80">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/contato" variant="primary" fullWidthMobile={false}>
            Fale com a equipe
          </Button>
        </div>
      </div>
    </>
  );
}
