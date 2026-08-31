import Image from "next/image";
import Button from "./Button";
import { mascot } from "@/lib/data";
import { hasPublicImage } from "@/lib/images";

const flashImagePath = "/images/flash.webp";

export default function FlashSection() {
  const hasFlashImage = hasPublicImage(flashImagePath);

  return (
    <section className="bg-cream" aria-labelledby="flash-heading">
      <div className="mx-auto max-w-container px-4 sm:px-8 py-16 sm:py-20 grid gap-10 lg:grid-cols-2 lg:items-center">
        {hasFlashImage ? (
          <div className="order-2 lg:order-1 relative aspect-square max-w-sm mx-auto lg:mx-0 w-full rounded-card overflow-hidden">
            <Image
              src={flashImagePath}
              alt="Flash, mascote oficial da Sunshine"
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-contain"
            />
          </div>
        ) : (
          <div
            className="order-2 lg:order-1 aspect-square max-w-sm mx-auto lg:mx-0 w-full rounded-card bg-navy/5 border border-navy/10 flex items-center justify-center text-graphite/50 text-sm text-center p-6"
            role="img"
            aria-label="Ilustração oficial do mascote Flash — ainda não disponível"
          >
            [INSERIR ILUSTRAÇÃO OFICIAL DO FLASH]
          </div>
        )}

        <div className="order-1 lg:order-2">
          <span className="block text-sm font-semibold uppercase tracking-wider text-gold-dark mb-2">
            Mascote oficial
          </span>
          <h2 id="flash-heading" className="font-display font-bold text-3xl sm:text-4xl text-graphite mb-4">
            Conheça o {mascot.name}
          </h2>
          <p className="text-graphite/80 mb-4">
            {mascot.name} é um {mascot.animal.toLowerCase()} {mascot.traits.slice(0, 4).join(", ").toLowerCase()} que representa o espírito do Sunshine Kids Run — {mascot.role.toLowerCase()}
          </p>
          <Button href="/flash" variant="secondary">
            Conheça o Flash
          </Button>
        </div>
      </div>
    </section>
  );
}
