/** Paramètres de contact — à adapter en production */
export const SITE = {
  name: "Wiam IT Consulting",
  email: "contact@wiamitconsulting.services",
  /** WhatsApp : indicatif pays + numéro, sans + ni espaces */
  whatsappE164: "212702618710",
  whatsappMessage:
    "Bonjour Wiam IT Consulting, je souhaite échanger sur une mission de conseil.",
} as const;

export function whatsappHref(): string {
  const text = encodeURIComponent(SITE.whatsappMessage);
  return `https://wa.me/${SITE.whatsappE164}?text=${text}`;
}
