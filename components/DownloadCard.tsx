import { FileDown } from "lucide-react";

interface DownloadCardProps {
  title: string;
  description: string;
  href: string | null;
}

export default function DownloadCard({ title, description, href }: DownloadCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-card border border-graphite/10 bg-white p-6 shadow-card">
      <FileDown size={28} className="text-gold-dark shrink-0 mt-1" aria-hidden="true" />
      <div className="flex-1">
        <h3 className="font-display font-bold text-graphite mb-1">{title}</h3>
        <p className="text-sm text-graphite/70 mb-3">{description}</p>
        {href ? (
          <a href={href} className="text-sm font-semibold text-gold-dark hover:underline">
            Baixar arquivo
          </a>
        ) : (
          <span className="text-sm font-semibold text-graphite/40">
            [ARQUIVO PENDENTE — disponível em breve]
          </span>
        )}
      </div>
    </div>
  );
}
