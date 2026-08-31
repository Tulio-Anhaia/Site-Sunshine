import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Sunshine Desenvolvimento Esportivo.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <PolicyPage
      title="Política de Privacidade"
      breadcrumbLabel="Política de Privacidade"
      breadcrumbHref="/privacidade"
      intro="Esta página descreverá como a Sunshine coleta, usa, armazena e protege os dados pessoais tratados através deste site, incluindo dados enviados nos formulários de contato e patrocínio."
    />
  );
}
