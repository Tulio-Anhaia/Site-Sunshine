import { AlertCircle } from "lucide-react";

export default function PendingList({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <div className="rounded-card border border-gold/30 bg-gold/5 p-6">
      <div className="flex items-center gap-2 mb-3">
        <AlertCircle size={20} className="text-gold-dark" aria-hidden="true" />
        <h2 className="font-display font-bold text-graphite">
          Informações ainda pendentes de confirmação
        </h2>
      </div>
      <ul className="grid gap-2 sm:grid-cols-2 text-sm text-graphite/80">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-dark shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
