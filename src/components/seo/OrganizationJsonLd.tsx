import { Helmet } from "react-helmet-async";
import { SITE, getSiteUrl } from "@/config/site";

/**
 * JSON-LD Organization / ProfessionalService pour les moteurs de recherche.
 */
export default function OrganizationJsonLd() {
  const url = getSiteUrl();
  const logo = `${url}/favicon.svg`;
  const sameAs = [SITE.linkedInUrl].filter(Boolean);
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    url,
    email: SITE.email,
    logo,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    areaServed: {
      "@type": "Place",
      name: "Moyen-Orient, Golfe, international",
    },
    description:
      "Conseil IT d’entreprise : cybersécurité, réseaux et développement logiciel.",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
