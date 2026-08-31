import Image from "next/image";
import { company } from "@/lib/data";

const policyLinks = [
  { href: "/privacidade", label: "Política de Privacidade" },
  { href: "/termos", label: "Termos de Uso" },
  { href: "/cookies", label: "Política de Cookies" },
  { href: "/cancelamento", label: "Política de Cancelamento" },
  { href: "/uso-de-imagem", label: "Política de Uso de Imagem" },
];

const siteLinks = [
  { href: "/sobre", label: "Sobre a Sunshine" },
  { href: "/servicos", label: "Serviços" },
  { href: "/eventos", label: "Eventos" },
  { href: "/patrocinadores", label: "Patrocinadores" },
  { href: "/midia-kit", label: "Mídia Kit" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/90">
      <div className="mx-auto max-w-container px-4 py-14 sm:px-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/sunshine-logo-transparente.png"
            alt="Sunshine Desenvolvimento Esportivo"
            width={180}
            height={95}
            className="h-12 w-auto mb-4"
          />
          <p className="text-sm text-white/70">
            Superando limites, unindo pessoas através do esporte.
          </p>
        </div>

        <div>
          <h2 className="font-display font-bold text-sm uppercase tracking-wide text-gold-light mb-4">
            Navegação
          </h2>
          <ul className="space-y-2 text-sm">
            {siteLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-gold-light transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display font-bold text-sm uppercase tracking-wide text-gold-light mb-4">
            Institucional
          </h2>
          <ul className="space-y-2 text-sm">
            {policyLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-gold-light transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display font-bold text-sm uppercase tracking-wide text-gold-light mb-4">
            Contato
          </h2>
          <address className="not-italic text-sm space-y-2 text-white/80">
            <p>{company.address.street}</p>
            <p>
              {company.address.neighborhood}, {company.address.city}/{company.address.state} —{" "}
              {company.address.zip}
            </p>
            <p>
              WhatsApp:{" "}
              <a href={`https://wa.me/${company.contact.whatsappPrimaryDigits}`} className="hover:text-gold-light">
                {company.contact.whatsappPrimary}
              </a>
            </p>
            <p>
              E-mail:{" "}
              <a href={`mailto:${company.contact.emailCommercial}`} className="hover:text-gold-light">
                {company.contact.emailCommercial}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-container px-4 py-6 sm:px-8 text-xs text-white/60 flex flex-col sm:flex-row justify-between gap-2">
          <p>
            {company.legalName} — CNPJ {company.cnpj} ({company.cnpjStatus})
          </p>
          <p>© {new Date().getFullYear()} {company.tradeName}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
