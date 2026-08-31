import { siteUrl } from "@/lib/data";

interface Crumb {
  label: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full = [{ label: "Início", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: full.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteUrl}${item.href}`,
    })),
  };

  return (
    <>
      <nav aria-label="Trilha de navegação" className="mx-auto max-w-container px-4 sm:px-8 py-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-graphite/70">
          {full.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === full.length - 1 ? (
                <span aria-current="page" className="font-semibold text-graphite">
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className="hover:text-gold-dark">
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
