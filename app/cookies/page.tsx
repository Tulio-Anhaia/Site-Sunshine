import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de Cookies do site da Sunshine Desenvolvimento Esportivo.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <PolicyPage
      title="Política de Cookies"
      breadcrumbLabel="Política de Cookies"
      breadcrumbHref="/cookies"
      intro="Esta página descreverá quais cookies são utilizados no site, com quais finalidades, e como o visitante pode gerenciar suas preferências."
    />
  );
}
