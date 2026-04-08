import { useState } from "react";
import { ImageIcon } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** true pour l’image LCP (héro) */
  priority?: boolean;
  aspect?: "4/3" | "16/10" | "21/9" | "square";
};

const aspectClass: Record<NonNullable<Props["aspect"]>, string> = {
  "4/3": "aspect-[4/3]",
  "16/10": "aspect-[16/10]",
  "21/9": "aspect-[21/9]",
  square: "aspect-square",
};

/**
 * Image responsive avec état de chargement et repli si fichier manquant.
 */
export default function ContentImage({
  src,
  alt,
  className = "",
  priority = false,
  aspect = "4/3",
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <figure
        className={`flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200/90 text-slate-500 ${aspectClass[aspect]} ${className}`}
      >
        <ImageIcon className="h-10 w-10 opacity-40" aria-hidden />
        <span className="mt-2 text-xs font-medium">Visuel indisponible</span>
      </figure>
    );
  }

  return (
    <figure
      className={`relative overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-card ring-1 ring-slate-900/[0.04] ${aspectClass[aspect]} ${className}`}
    >
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100"
          aria-hidden
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover object-center transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
        width={1600}
        height={1200}
        sizes="(max-width: 1024px) 100vw, 50vw"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </figure>
  );
}
