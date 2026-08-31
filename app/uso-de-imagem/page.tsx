import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Política de Uso de Imagem",
  description: "Política de Uso de Imagem da Sunshine Desenvolvimento Esportivo.",
  alternates: { canonical: "/uso-de-imagem" },
};

export default function UsoDeImagemPage() {
  return (
    <PolicyPage
      title="Política de Uso de Imagem"
      breadcrumbLabel="Política de Uso de Imagem"
      breadcrumbHref="/uso-de-imagem"
      intro="Esta página descreverá como a Sunshine utiliza imagens e vídeos de participantes, incluindo regras específicas de consentimento para menores de idade."
    />
  );
}
