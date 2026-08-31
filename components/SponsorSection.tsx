import Button from "./Button";

export default function SponsorSection() {
  return (
    <section className="bg-navy text-white" aria-labelledby="sponsor-heading">
      <div className="mx-auto max-w-container px-4 sm:px-8 py-16 sm:py-20 text-center">
        <h2 id="sponsor-heading" className="font-display font-bold text-3xl sm:text-4xl mb-4">
          Sua marca em movimento.
        </h2>
        <p className="max-w-2xl mx-auto text-white/80 mb-8">
          Associe sua empresa a experiências esportivas que promovem saúde,
          relacionamento, participação e conexão com a comunidade.
        </p>
        <div className="flex justify-center">
          <Button href="/midia-kit" variant="primary" fullWidthMobile={false}>
            Solicite o Mídia Kit
          </Button>
        </div>
      </div>
    </section>
  );
}
