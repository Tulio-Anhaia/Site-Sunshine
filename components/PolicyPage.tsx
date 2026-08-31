import Breadcrumbs from "./Breadcrumbs";
import SectionTitle from "./SectionTitle";

interface PolicyPageProps {
  title: string;
  breadcrumbLabel: string;
  breadcrumbHref: string;
  intro: string;
}

export default function PolicyPage({ title, breadcrumbLabel, breadcrumbHref, intro }: PolicyPageProps) {
  return (
    <>
      <Breadcrumbs items={[{ label: breadcrumbLabel, href: breadcrumbHref }]} />
      <div className="mx-auto max-w-container px-4 sm:px-8 pb-20">
        <SectionTitle as="h1" eyebrow="Institucional" title={title} />
        <div className="max-w-2xl rounded-card border border-gold/30 bg-gold/5 p-6 mb-8 text-sm text-graphite/80">
          {intro}
        </div>
        <div className="prose prose-sm max-w-2xl text-graphite/70 space-y-4">
          <p>
            [CONTEÚDO PENDENTE] — Este documento será redigido e revisado com
            orientação jurídica especializada antes da publicação definitiva do
            site, em conformidade com a Lei Geral de Proteção de Dados (LGPD) e
            demais legislações aplicáveis.
          </p>
          <p>
            Dúvidas sobre este documento podem ser encaminhadas para{" "}
            <strong>[INFORMAÇÃO PENDENTE — e-mail de privacidade/LGPD]</strong>.
          </p>
        </div>
      </div>
    </>
  );
}
