import { MessageCircle } from "lucide-react";
import { company } from "@/lib/data";

export default function WhatsAppButton() {
  const number = company.contact.whatsappPrimaryDigits;
  const message = encodeURIComponent(
    "Olá! Vim pelo site da Sunshine Esportes e gostaria de mais informações."
  );

  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a Sunshine Esportes"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-lg transition-transform hover:scale-105 motion-reduce:hover:scale-100"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
