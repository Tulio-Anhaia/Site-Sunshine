import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { mascot } from "@/lib/data";
import { hasPublicImage } from "@/lib/images";

const flashImagePath = "/images/flash.webp";

export const metadata: Metadata = {
  title: "Flash, o mascote da Sunshine",
  description:
    "Conheça o Flash, mascote oficial da Sunshine Esportes, presente no Sunshine Kids Run.",
  alternates: { canonical: "/flash" },
};

export default function FlashPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Flash", href: "/flash" }]} />
      <div className="mx-auto max-w-container px-4 sm:px-8 pb-20">
        <SectionTitle as="h1" eyebrow="Mascote oficial" title={mascot.name} />

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {hasPublicImage(flashImagePath) ? (
            <div className="relative aspect-square rounded-card overflow-hidden border border-graphite/10">
              <Image
                src={flashImagePath}
                alt="Flash, mascote oficial da Sunshine"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-contain bg-cream"
              />
            </div>
          ) : (
            <div
              className="aspect-square rounded-card bg-cream border border-graphite/10 flex items-center justify-center text-graphite/50 text-sm text-center p-6"
              role="img"
              aria-label="Ilustração oficial do Flash — ainda não disponível"
            >
              [INSERIR ILUSTRAÇÃO OFICIAL DO FLASH]
            </div>
          )}

          <div className="space-y-6">
            <p className="text-graphite/80">
              {mascot.name} é um {mascot.animal.toLowerCase()}, mascote oficial da
              Sunshine, presente no contexto do Sunshine Kids Run.
            </p>

            <div>
              <h2 className="font-display font-bold text-lg text-graphite mb-3">
                Características
              </h2>
              <ul className="flex flex-wrap gap-2">
                {mascot.traits.map((trait) => (
                  <li
                    key={trait}
                    className="rounded-full bg-gold/15 text-gold-dark px-4 py-1.5 text-sm font-semibold"
                  >
                    {trait}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-graphite mb-2">Função</h2>
              <p className="text-graphite/80 text-sm">{mascot.role}</p>
            </div>

            <div className="rounded-card border border-gold/30 bg-gold/5 p-5 text-sm text-graphite/70 space-y-1">
              <p className="font-semibold text-graphite">Materiais pendentes:</p>
              <ul className="space-y-1">
                {mascot.pendingItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <Button href="/eventos/sunshine-kids-run" variant="primary">
              Ver o Sunshine Kids Run
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
