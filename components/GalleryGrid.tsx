import { ImageOff } from "lucide-react";

export default function GalleryGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-card bg-cream border border-graphite/10 flex flex-col items-center justify-center gap-2 text-graphite/40 text-xs text-center p-3"
          role="img"
          aria-label="Espaço reservado para foto autorizada de evento"
        >
          <ImageOff size={22} aria-hidden="true" />
          [INSERIR FOTO AUTORIZADA]
        </div>
      ))}
    </div>
  );
}
