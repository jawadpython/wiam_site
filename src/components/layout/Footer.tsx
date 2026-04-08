import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { SITE } from "@/config/site";

const footerLinks = [
  { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À propos" },
  { to: "/technologies", label: "Technologies" },
  { to: "/contact", label: "Contact" },
];

const legalLinks = [
  { to: "/mentions-legales", label: "Mentions légales" },
  { to: "/politique-confidentialite", label: "Politique de confidentialité" },
];

const REGION =
  "Moyen-Orient · Interventions en Arabie saoudite, GCC et à l’international";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-gradient-to-b from-brand-navy to-[#0a1628] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent to-blue-900 text-sm font-bold text-white shadow-md shadow-black/20"
                aria-hidden
              >
                W
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-semibold text-white">Wiam</span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  IT Consulting
                </span>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Cabinet de conseil IT indépendant : infrastructures sécurisées, réseaux
              résilients et logiciels sur mesure pour les directions générales et les
              DSI qui exigent rigueur, confidentialité et résultats mesurables.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Plan du site
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-slate-300 transition hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden />
                <span className="text-slate-400">{REGION}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-8 text-xs text-slate-500">
          {legalLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-slate-400 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Wiam IT Consulting. Tous droits réservés.</p>
          <p className="text-slate-600">
            Conseil IT · Cybersécurité · Réseaux · Développement logiciel
          </p>
        </div>
        <p className="mt-6 text-center text-[0.65rem] text-slate-600">
          Crédits visuels :{" "}
          <a
            href="https://unsplash.com"
            className="text-slate-500 underline-offset-2 hover:text-slate-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>{" "}
          (remplacer par vos propres visuels en production)
        </p>
      </div>
    </footer>
  );
}
