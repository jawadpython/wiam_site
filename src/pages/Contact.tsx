import { useState, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE, whatsappHref } from "@/config/site";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Indiquez votre nom.";
    if (!email.trim()) next.email = "Indiquez votre adresse e-mail professionnelle.";
    else if (!isValidEmail(email))
      next.email = "Adresse e-mail invalide.";
    if (!message.trim()) next.message = "Décrivez votre demande.";
    else if (message.trim().length < 20)
      next.message = "Merci de préciser votre besoin (au moins 20 caractères).";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(false);
    if (!validate()) return;

    const subject = encodeURIComponent(`Demande de contact — ${name.trim()}`);
    const body = encodeURIComponent(
      `Nom : ${name.trim()}\nE-mail : ${email.trim()}\n\n${message.trim()}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <Helmet>
        <title>Contact | Wiam IT Consulting</title>
        <meta
          name="description"
          content="Contactez Wiam IT Consulting pour vos projets de cybersécurité, réseaux et développement : formulaire sécurisé, e-mail professionnel et WhatsApp."
        />
        <link rel="canonical" href="https://www.wiamit.com/contact" />
      </Helmet>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Contact
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
              Échangeons sur votre projet
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Transmettez-nous le contexte et vos contraintes. Les sollicitations sont
              traitées de manière confidentielle ; nous répondons par des prochaines
              étapes concrètes, sans relances marketing génériques.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="flex-1 bg-brand-muted py-12 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-5 lg:gap-14 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.35 }}
            className="lg:col-span-2"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Canaux directs
            </h2>
            <ul className="mt-6 space-y-6">
              <li>
                <div className="flex items-start gap-3">
                  <Mail
                    className="mt-1 h-5 w-5 shrink-0 text-brand-accent"
                    aria-hidden
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      E-mail professionnel
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-1 inline-block text-lg font-semibold text-brand-ink no-underline transition hover:text-brand-accent"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm leading-relaxed text-slate-600">
                Pour les demandes urgentes, WhatsApp est réservé aux échanges
                professionnels identifiés. Mentionnez le nom de votre organisation dans
                votre premier message.
              </p>
              <Button
                href={whatsappHref()}
                variant="primary"
                className="mt-6 w-full gap-2 bg-[#25D366] hover:bg-[#20bd5a] focus-visible:ring-[#25D366]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.35 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-slate-200 bg-white p-7 shadow-card sm:p-9"
              noValidate
            >
              <h2 className="text-lg font-semibold text-brand-ink">Formulaire de contact</h2>
              <p className="mt-2 text-sm text-slate-600">
                Les informations ci-dessous nous aident à qualifier votre demande et à
                vous répondre efficacement.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
                  >
                    Nom complet
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                    placeholder="Nom et prénom"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "err-name" : undefined}
                  />
                  {errors.name && (
                    <p id="err-name" className="mt-2 text-sm text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
                  >
                    E-mail professionnel
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                    placeholder="vous@entreprise.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "err-email" : undefined}
                  />
                  {errors.email && (
                    <p id="err-email" className="mt-2 text-sm text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-2 w-full resize-y rounded-md border border-slate-200 bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                    placeholder="Contexte, délais souhaités, enjeux de conformité ou techniques."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "err-msg" : undefined}
                  />
                  {errors.message && (
                    <p id="err-msg" className="mt-2 text-sm text-red-600" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full rounded-md bg-brand-accent py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Envoyer la demande
                </button>
              </div>

              {submitted && (
                <p className="mt-4 text-sm text-emerald-700" role="status">
                  Si votre messagerie ne s’est pas ouverte, écrivez-nous directement à{" "}
                  <a href={`mailto:${SITE.email}`} className="font-medium underline">
                    {SITE.email}
                  </a>
                  .
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
