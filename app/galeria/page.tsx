import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Galeria",
  description: "Galeria de fotos dos eventos da Sunshine Desenvolvimento Esportivo.",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Galeria", href: "/galeria" }]} />
      <div className="mx-auto max-w-container px-4 sm:px-8 pb-20">
        <SectionTitle
          as="h1"
          eyebrow="Registros"
          title="Galeria"
          description="Espaço preparado para receber fotos autorizadas dos eventos Sunshine. Nenhuma imagem foi publicada ainda."
        />
        <GalleryGrid count={8} />
      </div>
    </>
  );
}
