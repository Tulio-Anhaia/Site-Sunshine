import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="mx-auto max-w-container px-4 sm:px-8 py-16 sm:py-24 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl leading-tight">
            O esporte aproxima.<br /> A experiência transforma.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/80 max-w-lg">
            A Sunshine Desenvolvimento Esportivo cria experiências esportivas que
            conectam pessoas, famílias, empresas e comunidades.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/eventos" variant="primary">
              Conheça os eventos
            </Button>
            <Button
              href="/patrocinadores"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Seja patrocinador
            </Button>
          </div>
        </div>

        <div
          className="aspect-video w-full rounded-card border border-white/15 bg-white/5 flex items-center justify-center text-white/50 text-sm"
          role="img"
          aria-label="Imagem ou vídeo institucional oficial da Sunshine — ainda não disponível"
        >
          [INSERIR IMAGEM/VÍDEO OFICIAL — /public/images/hero-evento.webp]
        </div>
      </div>
    </section>
  );
}
