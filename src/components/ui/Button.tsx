import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-accent text-white shadow-sm hover:bg-brand-accent-hover focus-visible:ring-brand-accent-soft",
  secondary:
    "border border-slate-200 bg-white text-brand-ink shadow-sm hover:bg-slate-50 focus-visible:ring-slate-300",
  outline:
    "border border-brand-navy/15 bg-transparent text-brand-ink hover:border-brand-accent/40 hover:bg-slate-50 focus-visible:ring-brand-accent/30",
};

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  to?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  to,
  href,
  type = "button",
  onClick,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  if (to) {
    return (
      <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
