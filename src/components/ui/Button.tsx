import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-accent text-white shadow-md shadow-blue-500/10 hover:bg-brand-accent-hover hover:shadow-lg hover:shadow-blue-500/20 focus-visible:ring-brand-accent-soft active:scale-[0.98]",
  secondary:
    "border border-slate-200 bg-white text-brand-ink shadow-sm hover:bg-slate-50 hover:shadow-md focus-visible:ring-slate-300 active:scale-[0.98]",
  outline:
    "border border-brand-navy/15 bg-transparent text-brand-ink hover:border-brand-accent/50 hover:bg-slate-50 hover:shadow-sm focus-visible:ring-brand-accent/30 active:scale-[0.98]",
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
    "inline-flex min-h-[44px] items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-200 ease-out hover:scale-[1.02] motion-reduce:transform-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

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
