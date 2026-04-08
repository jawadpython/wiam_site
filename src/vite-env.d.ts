/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL publique du site, ex. https://www.wiamitconsulting.services — canonical, OG, sitemap */
  readonly VITE_SITE_URL?: string;
  /** POST du formulaire contact (Formspree, etc.) — si absent, envoi par mailto */
  readonly VITE_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
