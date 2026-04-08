/** Paramètres de contact — à adapter en production */
export const SITE = {
  name: "Wiam IT Consulting",
  email: "contact@wiamitconsulting.services",
  /** WhatsApp : indicatif pays + numéro, sans + ni espaces */
  whatsappE164: "212702618710",
  whatsappMessage:
    "Bonjour Wiam IT Consulting, je souhaite échanger sur une mission de conseil.",
  /** LinkedIn public (pour JSON-LD sameAs) — à compléter si disponible */
  linkedInUrl: "" as string,
} as const;

/**
 * URL publique du site (HTTPS, sans slash final). Source unique pour canonical, OG, sitemap.
 * Définir `VITE_SITE_URL` en production (ex. https://www.wiamitconsulting.services).
 */
export function getSiteUrl(): string {
  return (
    import.meta.env.VITE_SITE_URL || "https://www.wiamitconsulting.services"
  ).replace(/\/$/, "");
}

/**
 * URL canonique pour une route (ex. `/contact` → `https://domain.com/contact`).
 */
export function canonicalUrl(path: string = "/"): string {
  const base = getSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  if (p === "/") return `${base}/`;
  return `${base}${p}`;
}

export function whatsappHref(): string {
  const text = encodeURIComponent(SITE.whatsappMessage);
  return `https://wa.me/${SITE.whatsappE164}?text=${text}`;
}
