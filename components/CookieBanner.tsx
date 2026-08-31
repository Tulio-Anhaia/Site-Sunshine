"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

const STORAGE_KEY = "sunshine-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* noop */
    }
    setVisible(false);
  }

  function decline() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "declined");
    } catch {
      /* noop */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-graphite/10 bg-white shadow-[0_-4px_16px_rgba(18,35,58,0.1)]"
    >
      <div className="mx-auto max-w-container px-4 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-graphite/80 flex-1">
          Utilizamos cookies para melhorar sua experiência de navegação. Consulte
          nossa{" "}
          <a href="/cookies" className="text-gold-dark underline">
            Política de Cookies
          </a>
          .
        </p>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={decline} className="text-sm py-2 px-4">
            Recusar
          </Button>
          <Button variant="primary" onClick={accept} className="text-sm py-2 px-4">
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
}
