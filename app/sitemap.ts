import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/data";

const staticRoutes = [
  "",
  "/sobre",
  "/servicos",
  "/eventos",
  "/eventos/sunshine-kids-run",
  "/eventos/sunshine-blessed-run-2026",
  "/patrocinadores",
  "/flash",
  "/eventos-realizados",
  "/noticias",
  "/galeria",
  "/resultados",
  "/faq",
  "/contato",
  "/midia-kit",
  "/privacidade",
  "/termos",
  "/cookies",
  "/cancelamento",
  "/uso-de-imagem",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route.startsWith("/eventos") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/eventos") ? 0.9 : 0.5,
  }));
}
