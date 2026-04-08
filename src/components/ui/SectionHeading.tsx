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
    <div className={`mb-12 max-w-3xl sm:mb-16 ${alignClass}`}>
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {align === "left" && (
            <span
              className="h-4 w-1 shrink-0 rounded-full bg-brand-accent shadow-sm shadow-blue-500/25"
              aria-hidden
            />
          )}
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="text-balance font-display text-3xl font-semibold leading-[1.2] tracking-tight text-brand-ink sm:text-[2.125rem]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg ${
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
