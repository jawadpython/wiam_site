import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  children,
}: Props) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`mb-10 max-w-3xl sm:mb-12 ${alignClass}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
