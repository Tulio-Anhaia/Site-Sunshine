import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion, { FAQItem } from "@/components/FAQAccordion";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description: "Perguntas frequentes sobre a Sunshine Desenvolvimento Esportivo e seus eventos.",
  alternates: { canonical: "/faq" },
};

// Apenas perguntas cuja resposta está diretamente respaldada pelo briefing
// oficial. Perguntas sobre inscrições, valores e kits não são respondidas
// aqui até que as informações sejam confirmadas.
const faqItems: FAQItem[] = [
  {
    question: "Onde a Sunshine Desenvolvimento Esportivo está localizada?",
    answer: `${company.address.street}, ${company.address.neighborhood}, ${company.address.city}/${company.address.state} — ${company.address.zip}.`,
  },
  {
    question: "Como posso entrar em contato com a equipe comercial?",
    answer: `Você pode falar pelo WhatsApp (${company.contact.whatsappPrimary}) ou pelo e-mail ${company.contact.emailCommercial}.`,
  },
  {
    question: "Quais eventos a Sunshine organiza atualmente?",
    answer:
      "Atualmente o calendário 2026 inclui o Sunshine Kids Run e a Sunshine Blessed Run 2026, ambos em Sorocaba/SP.",
  },
  {
    question: "Como minha empresa pode patrocinar um evento?",
    answer:
      "Preencha o formulário na página de Patrocinadores ou solicite o Mídia Kit para receber as opções de cotas disponíveis.",
  },
  {
    question: "Quando as inscrições dos eventos estarão abertas?",
    answer:
      "Os links de inscrição ainda não foram disponibilizados. Eles serão publicados nas páginas de cada evento assim que confirmados.",
  },
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />
      <div className="mx-auto max-w-container px-4 sm:px-8 pb-20">
        <SectionTitle as="h1" eyebrow="Dúvidas" title="Perguntas frequentes" />
        <FAQAccordion items={faqItems} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
