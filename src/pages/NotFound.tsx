import { Helmet } from "react-helmet-async";
import Button from "@/components/ui/Button";
export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page introuvable | Wiam IT Consulting</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="flex flex-1 flex-col items-center justify-center bg-white px-4 py-24 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
          Erreur 404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
          Cette page n’existe pas ou a été déplacée
        </h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600">
          Vérifiez l’adresse ou revenez à l’accueil pour parcourir nos services et nous
          contacter.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button to="/" variant="primary">
            Retour à l’accueil
          </Button>
          <Button to="/contact" variant="outline">
            Contact
          </Button>
        </div>
      </div>
    </>
  );
}
