import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "transparent" | "full";
  className?: string;
}

export default function Logo({ variant = "transparent", className = "" }: LogoProps) {
  const src =
    variant === "transparent"
      ? "/images/sunshine-logo-transparente.png"
      : "/images/sunshine-logo.png";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="Sunshine Desenvolvimento Esportivo — página inicial"
    >
      <Image
        src={src}
        alt="Sunshine Desenvolvimento Esportivo — Superando limites, unindo pessoas"
        width={220}
        height={116}
        priority
        className="h-10 w-auto sm:h-12"
      />
    </Link>
  );
}
