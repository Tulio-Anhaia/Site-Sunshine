import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso do site da Sunshine Desenvolvimento Esportivo.",
  alternates: { canonical: "/termos" },
};

export default function TermosPage() {
  return (
    <PolicyPage
      title="Termos de Uso"
      breadcrumbLabel="Termos de Uso"
      breadcrumbHref="/termos"
      intro="Esta página descreverá as condições de uso do site sunshineesportes.com.br, incluindo regras de navegação e responsabilidades."
    />
  );
}
