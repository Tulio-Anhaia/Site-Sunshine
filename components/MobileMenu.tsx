"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import Button from "./Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
      // Focus trap simples
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          "a, button, [tabindex]:not([tabindex='-1'])"
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="absolute inset-0 bg-navy/60"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-6 shadow-xl flex flex-col"
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-display font-bold text-lg text-navy">Menu</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="rounded-btn p-2 text-navy"
          >
            <X size={26} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Navegação mobile" className="flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-btn px-3 py-3 text-base font-semibold text-graphite hover:bg-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3 pt-8">
          <Button href="/eventos" variant="secondary" onClick={onClose}>
            Ver eventos
          </Button>
          <Button href="/patrocinadores" variant="primary" onClick={onClose}>
            Seja patrocinador
          </Button>
        </div>
      </div>
    </div>
  );
}
