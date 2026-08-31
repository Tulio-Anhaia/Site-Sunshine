interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: SectionTitleProps) {
  const Tag = as;
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} mb-10`}>
      {eyebrow && (
        <span className="block text-sm font-semibold uppercase tracking-wider text-gold-dark mb-2">
          {eyebrow}
        </span>
      )}
      <Tag className="font-display font-bold text-graphite text-3xl sm:text-4xl leading-tight">
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-graphite/80">{description}</p>
      )}
    </div>
  );
}
