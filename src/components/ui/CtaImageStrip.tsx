import { useState } from "react";
import Button from "@/components/ui/Button";

type Props = {
  imageSrc: string;
  title: string;
  ctaTo: string;
  ctaLabel: string;
};

/**
 * Bandeau pleine largeur avec image de fond et CTA (style cabinet de conseil).
 */
export default function CtaImageStrip({ imageSrc, title, ctaTo, ctaLabel }: Props) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section
      className="relative overflow-hidden border-y border-slate-200"
      aria-labelledby="cta-strip-heading"
    >
      {imgOk && (
        <img
          src={imageSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          width={1600}
          height={700}
          sizes="100vw"
          onError={() => setImgOk(false)}
        />
      )}
      <div
        className={`absolute inset-0 ${
          imgOk
            ? "bg-gradient-to-br from-brand-navy/92 via-[#0c1e3c]/88 to-brand-navy/82"
            : "bg-gradient-to-br from-brand-navy via-[#0a1628] to-brand-navy"
        }`}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2
          id="cta-strip-heading"
          className="mx-auto max-w-2xl text-balance text-xl font-semibold leading-snug text-white sm:text-2xl"
        >
          {title}
        </h2>
        <div className="mt-8">
          <Button
            to={ctaTo}
            variant="secondary"
            className="inline-flex shadow-lift ring-1 ring-white/20"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
