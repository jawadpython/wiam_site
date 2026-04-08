/**
 * Visuels locaux sous /public/images + hero IT (datacenter / infra) pour LCP et OG.
 */

import { getSiteUrl } from "@/config/site";

const base = import.meta.env.BASE_URL ?? "/";

function publicAsset(path: string): string {
  const p = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${p}`.replace(/\/{2,}/g, "/");
}

/** Datacenter / salle serveurs — haute qualité, adapté au hero et aux partages sociaux */
export const HERO_IT_VISUAL =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80";

export const OG_HOME_IMAGE =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=630&q=80";

export const IMAGES = {
  heroCity: publicAsset("images/hero-city.jpg"),
  meeting: publicAsset("images/meeting.jpg"),
  cyber: publicAsset("images/cyber.jpg"),
  collaboration: publicAsset("images/collaboration.jpg"),
  workspace: publicAsset("images/workspace.jpg"),
  techAbstract: publicAsset("images/tech.jpg"),
} as const;

const SITE_ORIGIN = getSiteUrl();

export function absoluteOgUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${clean}`;
}

export const ogImages = {
  home: OG_HOME_IMAGE,
  about: absoluteOgUrl("/images/meeting.jpg"),
  services: absoluteOgUrl("/images/cyber.jpg"),
  contact: absoluteOgUrl("/images/workspace.jpg"),
  technologies: absoluteOgUrl("/images/tech.jpg"),
} as const;
