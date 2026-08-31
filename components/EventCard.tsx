import Image from "next/image";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import Button from "./Button";
import { SunshineEvent } from "@/lib/data";
import { hasPublicImage } from "@/lib/images";

export default function EventCard({ event }: { event: SunshineEvent }) {
  const hasCover = hasPublicImage(event.coverImage);

  return (
    <article className="flex flex-col rounded-card border-t-4 border-gold bg-white shadow-card hover:shadow-cardHover transition-shadow duration-200 overflow-hidden">
      {hasCover ? (
        <div className="relative h-44 w-full">
          <Image
            src={event.coverImage}
            alt={`Foto de capa do evento ${event.name}`}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className="h-44 w-full bg-navy/90 flex flex-col items-center justify-center text-white/70 text-xs text-center px-4 gap-1"
          role="img"
          aria-label={`Imagem oficial do evento ${event.name} — ainda não disponível`}
        >
          <span>[INSERIR FOTO AUTORIZADA]</span>
          <span className="text-white/40">{event.coverImage}</span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <span
          className={`mb-3 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${
            event.status === "confirmado"
              ? "bg-success/10 text-success"
              : "bg-gold/15 text-gold-dark"
          }`}
        >
          {event.status === "confirmado" ? "Data confirmada" : "Data a confirmar"}
        </span>

        <h3 className="font-display text-xl font-bold text-graphite mb-3">
          {event.name}
        </h3>

        <ul className="space-y-2 text-sm text-graphite/80 mb-6">
          <li className="flex items-center gap-2">
            <Calendar size={16} className="text-gold-dark shrink-0" aria-hidden="true" />
            {event.dateLabel}
          </li>
          <li className="flex items-center gap-2">
            <MapPin size={16} className="text-gold-dark shrink-0" aria-hidden="true" />
            {event.venue}, {event.city}
          </li>
          <li className="flex items-center gap-2">
            <Clock size={16} className="text-gold-dark shrink-0" aria-hidden="true" />
            {event.time}
          </li>
          <li className="flex items-center gap-2">
            <Users size={16} className="text-gold-dark shrink-0" aria-hidden="true" />
            {event.estimatedParticipants.toLocaleString("pt-BR")} participantes (estimativa)
          </li>
        </ul>

        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <Button href={`/eventos/${event.slug}`} variant="secondary" className="text-sm">
            Ver detalhes
          </Button>
          <Button href={`/eventos/${event.slug}#inscricoes`} variant="primary" className="text-sm">
            Inscrições
          </Button>
        </div>
      </div>
    </article>
  );
}
