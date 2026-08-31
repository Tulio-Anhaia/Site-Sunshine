import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Política de Cancelamento",
  description: "Política de Cancelamento de inscrições em eventos da Sunshine Desenvolvimento Esportivo.",
  alternates: { canonical: "/cancelamento" },
};

export default function CancelamentoPage() {
  return (
    <PolicyPage
      title="Política de Cancelamento"
      breadcrumbLabel="Política de Cancelamento"
      breadcrumbHref="/cancelamento"
      intro="Esta página descreverá as regras de cancelamento e reembolso de inscrições nos eventos organizados pela Sunshine, quando aplicável."
    />
  );
}
