import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-container px-4 sm:px-8 py-24 text-center">
      <p className="text-gold-dark font-display font-bold text-6xl mb-4">404</p>
      <h1 className="font-display font-bold text-2xl sm:text-3xl text-graphite mb-4">
        Página não encontrada
      </h1>
      <p className="text-graphite/70 max-w-md mx-auto mb-8">
        A página que você procura não existe ou foi movida. Volte para a
        página inicial ou confira os próximos eventos da Sunshine.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button href="/" variant="primary" fullWidthMobile={false}>
          Voltar ao início
        </Button>
        <Button href="/eventos" variant="secondary" fullWidthMobile={false}>
          Ver eventos
        </Button>
      </div>
    </div>
  );
}
