import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { canonicalUrl, SITE } from "@/config/site";

export default function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions légales | Wiam IT Consulting</title>
        <meta
          name="description"
          content="Mentions légales du site Wiam IT Consulting : éditeur, propriété intellectuelle et contact."
        />
        <link rel="canonical" href={canonicalUrl("/mentions-legales")} />
      </Helmet>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-prose px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            Informations légales
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Mentions légales
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Document type à adapter à votre statut juridique, siège social et hébergeur
            effectif.
          </p>

          <div className="prose prose-slate mt-10 max-w-none text-slate-700">
            <h2 className="font-display text-xl font-semibold text-brand-ink">
              Éditeur du site
            </h2>
            <p>
              <strong>{SITE.name}</strong>
              <br />
              Contact :{" "}
              <a href={`mailto:${SITE.email}`} className="text-brand-accent hover:underline">
                {SITE.email}
              </a>
            </p>
            <p>
              Les informations juridiques détaillées (forme sociale, capital, siège,
              immatriculation) doivent être complétées par le représentant légal.
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-brand-ink">
              Propriété intellectuelle
            </h2>
            <p>
              L’ensemble des contenus présents sur ce site (textes, visuels, structure)
              est protégé. Toute reproduction non autorisée est interdite sauf accord
              écrit préalable.
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-brand-ink">
              Hébergement
            </h2>
            <p>
              À compléter avec le nom, l’adresse et les coordonnées de l’hébergeur du
              site en production.
            </p>

            <p className="mt-12 text-sm">
              <Link to="/politique-confidentialite" className="text-brand-accent hover:underline">
                Politique de confidentialité
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
