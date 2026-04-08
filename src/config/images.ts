/**
 * Visuels servis depuis /public/images (fichiers locaux = affichage fiable, pas de dépendance au hotlink).
 * Pour les métas Open Graph, utiliser absoluteOgUrl() — aligné sur getSiteUrl() / VITE_SITE_URL.
 */

import { getSiteUrl } from "@/config/site";

const base = import.meta.env.BASE_URL ?? "/";

/** Préfixe Vite (ex. / ou /sous-chemin/) + chemin public */
function publicAsset(path: string): string {
  const p = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${p}`.replace(/\/{2,}/g, "/");
}

export const IMAGES = {
  heroCity: publicAsset("images/hero-city.jpg"),
  meeting: publicAsset("images/meeting.jpg"),
  cyber: publicAsset("images/cyber.jpg"),
  collaboration: publicAsset("images/collaboration.jpg"),
  workspace: publicAsset("images/workspace.jpg"),
  techAbstract: publicAsset("images/tech.jpg"),
} as const;

/** Domaine du site pour og:image absolu */
const SITE_ORIGIN = getSiteUrl();

/**
 * URL absolue pour og:image / Twitter (les réseaux exigent une URL complète).
 */
export function absoluteOgUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${clean}`;
}

/** URLs absolues pour les balises meta (réseaux sociaux) */
export const ogImages = {
  home: absoluteOgUrl("/images/hero-city.jpg"),
  about: absoluteOgUrl("/images/meeting.jpg"),
  services: absoluteOgUrl("/images/cyber.jpg"),
  contact: absoluteOgUrl("/images/workspace.jpg"),
  technologies: absoluteOgUrl("/images/tech.jpg"),
} as const;

export const OG_HOME_IMAGE = ogImages.home;
