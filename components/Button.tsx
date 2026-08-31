import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  type?: "button" | "submit";
  children: ReactNode;
  className?: string;
  fullWidthMobile?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-navy hover:bg-gold-light shadow-card hover:shadow-cardHover",
  secondary:
    "bg-transparent border-[1.5px] border-navy text-navy hover:bg-navy hover:text-white",
  tertiary: "bg-transparent text-gold-dark underline-offset-4 hover:underline px-0",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  type = "button",
  children,
  className = "",
  fullWidthMobile = true,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-btn px-6 py-3 font-body font-semibold text-sm sm:text-base transition-all duration-200";
  const width = fullWidthMobile ? "w-full sm:w-auto" : "";
  const classes = `${base} ${variantClasses[variant]} ${variant !== "tertiary" ? width : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
