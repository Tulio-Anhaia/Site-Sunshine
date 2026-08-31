"use client";

import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/eventos", label: "Eventos" },
  { href: "/patrocinadores", label: "Patrocinadores" },
  { href: "/flash", label: "Flash" },
  { href: "/noticias", label: "Notícias" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-graphite/10">
      <div className="mx-auto flex max-w-container items-center justify-between px-4 py-3 sm:px-8">
        <Logo />

        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-graphite hover:text-gold-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button href="/eventos" variant="secondary" className="text-sm py-2 px-4">
            Ver eventos
          </Button>
          <Button href="/patrocinadores" variant="primary" className="text-sm py-2 px-4">
            Seja patrocinador
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-btn p-2 text-navy"
          aria-label="Abrir menu de navegação"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} aria-hidden="true" />
        </button>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
      />
    </header>
  );
}
