import { useState, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import ContentImage from "@/components/ui/ContentImage";
import { SITE, whatsappHref, canonicalUrl } from "@/config/site";
import { IMAGES, ogImages } from "@/config/images";
import { useFadeEnterMotion } from "@/lib/motion";

const NEED_TYPES = [
  { value: "", label: "Type de besoin" },
  { value: "cyber", label: "Cybersécurité / audit" },
  { value: "network", label: "Réseaux / infrastructure" },
  { value: "dev", label: "Développement / intégration" },
  { value: "other", label: "Autre / stratégique" },
] as const;

const REGIONS = [
  { value: "", label: "Pays / fuseau indicatif" },
  { value: "gcc", label: "GCC / Moyen-Orient" },
  { value: "europe", label: "Europe" },
  { value: "americas", label: "Amériques" },
  { value: "africa", label: "Afrique" },
  { value: "other", label: "Autre" },
] as const;

type FieldErrors = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  region?: string;
  needType?: string;
  message?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [needType, setNeedType] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const headLeft = useFadeEnterMotion(10, 0.4, 0);
  const headRight = useFadeEnterMotion(12, 0.45, 0.05);
  const colLeft = useFadeEnterMotion(8, 0.35, 0.08);
  const colRight = useFadeEnterMotion(8, 0.35, 0.12);

  function validate(): boolean {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Indiquez votre nom.";
    if (!email.trim()) next.email = "Indiquez votre adresse e-mail professionnelle.";
    else if (!isValidEmail(email))
      next.email = "Adresse e-mail invalide.";
    if (!company.trim()) next.company = "Indiquez le nom de votre organisation.";
    if (!needType) next.needType = "Sélectionnez un type de besoin.";
    if (!message.trim()) next.message = "Décrivez votre demande.";
    else if (message.trim().length < 20)
      next.message = "Merci de préciser votre besoin (au moins 20 caractères).";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(false);
    setSubmitSuccess(false);
    setSubmitError(null);
    if (!validate()) return;

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
    const lines = [
      `Nom : ${name.trim()}`,
      `E-mail : ${email.trim()}`,
      `Organisation : ${company.trim()}`,
      `Téléphone : ${phone.trim() || "—"}`,
      `Région / fuseau : ${region || "—"}`,
      `Type de besoin : ${needType}`,
      "",
      message.trim(),
    ];

    if (endpoint) {
      setSubmitting(true);
      try {
        const fd = new FormData();
        fd.append("name", name.trim());
        fd.append("email", email.trim());
        fd.append("company", company.trim());
        fd.append("phone", phone.trim());
        fd.append("region", region);
        fd.append("needType", needType);
        fd.append("message", message.trim());
        fd.append("_subject", `Demande de contact — ${company.trim()}`);

        const res = await fetch(endpoint, {
          method: "POST",
          body: fd,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("submit_failed");
        setSubmitSuccess(true);
        setName("");
        setEmail("");
        setCompany("");
        setPhone("");
        setRegion("");
        setNeedType("");
        setMessage("");
      } catch {
        setSubmitError(
          "L’envoi a échoué. Réessayez ou écrivez-nous directement à l’adresse indiquée.",
        );
      } finally {
        setSubmitting(false);
      }
      return;
    }

    const subject = encodeURIComponent(`Demande de contact — ${company.trim()}`);
    const body = encodeURIComponent(lines.join("\n"));
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
        <link rel="canonical" href={canonicalUrl("/contact")} />
        <meta property="og:image" content={ogImages.contact} />
      </Helmet>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div {...headLeft}>
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
            <motion.div {...headRight}>
              <ContentImage
                src={IMAGES.workspace}
                alt="Espace de travail professionnel moderne"
                aspect="16/10"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <section className="flex-1 bg-brand-muted py-12 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-5 lg:gap-14 lg:px-8">
          <motion.div {...colLeft} className="lg:col-span-2">
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

          <motion.div {...colRight} className="lg:col-span-3">
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
                    htmlFor="contact-company"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
                  >
                    Organisation
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                    placeholder="Raison sociale ou entité"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? "err-company" : undefined}
                  />
                  {errors.company && (
                    <p id="err-company" className="mt-2 text-sm text-red-600" role="alert">
                      {errors.company}
                    </p>
                  )}
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
                    >
                      Téléphone <span className="font-normal text-slate-400">(optionnel)</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                      placeholder="+ pays / indicatif"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-region"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
                    >
                      Pays / fuseau
                    </label>
                    <select
                      id="contact-region"
                      name="region"
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-brand-ink focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                    >
                      {REGIONS.map((r) => (
                        <option key={r.value || "empty"} value={r.value}>
                          {r.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-need"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-500"
                  >
                    Type de besoin
                  </label>
                  <select
                    id="contact-need"
                    name="needType"
                    value={needType}
                    onChange={(e) => setNeedType(e.target.value)}
                    className="mt-2 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-brand-ink focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                    aria-invalid={!!errors.needType}
                    aria-describedby={errors.needType ? "err-need" : undefined}
                  >
                    {NEED_TYPES.map((n) => (
                      <option key={n.value || "empty"} value={n.value}>
                        {n.label}
                      </option>
                    ))}
                  </select>
                  {errors.needType && (
                    <p id="err-need" className="mt-2 text-sm text-red-600" role="alert">
                      {errors.needType}
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
                  disabled={submitting}
                  className="w-full rounded-md bg-brand-accent py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Envoi en cours…" : "Envoyer la demande"}
                </button>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Sans endpoint configuré (<code className="rounded bg-slate-100 px-1">VITE_FORM_ENDPOINT</code>
                ), l’envoi ouvre votre messagerie. Pour un accusé de réception et
                l’archivage côté serveur, branchez un service de formulaire (Formspree,
                Netlify Forms, etc.).
              </p>

              {submitSuccess && (
                <p className="mt-4 text-sm text-emerald-700" role="status">
                  Merci pour votre message — nous vous répondrons dans les meilleurs délais.
                </p>
              )}
              {submitError && (
                <p className="mt-4 text-sm text-red-600" role="alert">
                  {submitError}
                </p>
              )}
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

      <section className="border-t border-slate-200 bg-white py-12 sm:py-16" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="faq-title" className="font-display text-2xl font-semibold text-brand-ink">
            Questions fréquentes
          </h2>
          <dl className="mt-8 space-y-6 text-slate-700">
            <div>
              <dt className="font-semibold text-brand-ink">Quels sont les délais de réponse ?</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-600">
                Les demandes professionnelles sont traitées en priorité ; nous visons une
                prise de contact sous quelques jours ouvrés selon la charge et le
                périmètre.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-ink">Budget et confidentialité</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-600">
                Les échanges sont couverts par un accord de confidentialité lorsque la
                mission le nécessite. Les propositions de budget sont précisées après
                cadrage, sans engagement de votre part.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-ink">Visio ou appel planifié</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-600">
                Les rendez-vous peuvent se faire en visioconférence ou par téléphone.
                Indiquez le fuseau et vos préférences dans le message.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
