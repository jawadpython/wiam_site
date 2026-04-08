import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { canonicalUrl, SITE } from "@/config/site";

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Helmet>
        <title>Politique de confidentialité | Wiam IT Consulting</title>
        <meta
          name="description"
          content="Politique de confidentialité et traitement des données personnelles — Wiam IT Consulting."
        />
        <link rel="canonical" href={canonicalUrl("/politique-confidentialite")} />
      </Helmet>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-prose px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            Données personnelles
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Version cadre — à valider par votre conseil en conformité (RGPD / lois
            locales selon votre activité).
          </p>

          <div className="prose prose-slate mt-10 max-w-none text-slate-700">
            <h2 className="font-display text-xl font-semibold text-brand-ink">
              Responsable du traitement
            </h2>
            <p>
              <strong>{SITE.name}</strong> — contact :{" "}
              <a href={`mailto:${SITE.email}`} className="text-brand-accent hover:underline">
                {SITE.email}
              </a>
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-brand-ink">
              Données collectées
            </h2>
            <p>
              Lorsque vous utilisez le formulaire de contact ou nous écrivez par
              e-mail, nous traitons les informations nécessaires pour répondre à votre
              demande (identité, coordonnées professionnelles, contenu du message).
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-brand-ink">
              Finalités et base légale
            </h2>
            <p>
              Les données sont utilisées pour la gestion des demandes entrantes et la
              relation précontractuelle ou contractuelle. Elles ne sont pas vendues à des
              tiers.
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-brand-ink">
              Durée de conservation
            </h2>
            <p>
              Les échanges sont conservés pendant la durée nécessaire au traitement de
              la demande et aux obligations légales applicables.
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-brand-ink">
              Vos droits
            </h2>
            <p>
              Vous pouvez demander l’accès, la rectification ou l’effacement de vos
              données, et exercer vos droits selon le cadre applicable (notamment RGPD
              pour les personnes concernées dans l’UE), en écrivant à l’adresse
              ci-dessus.
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-brand-ink">
              Cookies et mesure d’audience
            </h2>
            <p>
              Ce site vise à limiter les traceurs non essentiels. En cas d’ajout
              d’outils d’analyse ou de publicité, une information et un consentement
              conformes devront être mis en œuvre.
            </p>

            <p className="mt-12 text-sm">
              <Link to="/mentions-legales" className="text-brand-accent hover:underline">
                Mentions légales
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
