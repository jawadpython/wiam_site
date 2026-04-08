import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Network,
  Code2,
  CheckCircle2,
  Check,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import ContentImage from "@/components/ui/ContentImage";
import CtaImageStrip from "@/components/ui/CtaImageStrip";
import TrustBar from "@/components/ui/TrustBar";
import PreFooterCta from "@/components/ui/PreFooterCta";
import { HERO_IT_VISUAL, OG_HOME_IMAGE, IMAGES } from "@/config/images";
import { canonicalUrl } from "@/config/site";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";
import { useFadeEnterMotion, useInViewMotion } from "@/lib/motion";

const techPreview = [
  "Cisco",
  "VMware",
  "Linux",
  "Azure",
  "AWS",
  "Kubernetes",
  "PostgreSQL",
];

const whyUs = [
  {
    title: "Expertise terrain",
    text: "Des consultants qui interviennent sur vos environnements réels — pas de slides sans mise en œuvre.",
  },
  {
    title: "Réactivité",
    text: "Des délais annoncés clairement et une priorisation alignée sur vos incidents et vos jalons.",
  },
  {
    title: "Sécurité avancée",
    text: "Architecture, contrôle et preuves : chaque livrable doit tenir face à l’audit et à la menace.",
  },
  {
    title: "Approche sur mesure",
    text: "Des périmètres et des méthodes adaptés à votre maturité IT — sans surcharger vos équipes.",
  },
];

function SectionReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const m = useInViewMotion(0, 22, { margin: "-40px" });
  return (
    <motion.div {...m} className={className}>
      {children}
    </motion.div>
  );
}

function WhyUsCell({
  item,
  index,
}: {
  item: (typeof whyUs)[number];
  index: number;
}) {
  const m = useInViewMotion(index * 0.04, 10);
  return (
    <motion.div
      {...m}
      className="bg-white p-8 shadow-sm sm:p-10 lg:p-6 xl:p-10"
    >
      <div className="flex items-start gap-3">
        <span
          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent"
          aria-hidden
        >
          <Check className="h-3.5 w-3.5" strokeWidth={3} />
        </span>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-brand-ink">{item.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 [text-wrap:pretty]">
            {item.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const heroLeft = useFadeEnterMotion(16, 0.45, 0);
  const heroRight = useFadeEnterMotion(20, 0.5, 0.08);

  return (
    <>
      <Helmet>
        <title>
          Wiam IT Consulting | Cybersécurité, réseaux et cloud pour entreprises
        </title>
        <meta
          name="description"
          content="Cabinet de conseil IT : cybersécurité, réseaux, cloud et développement. Résultats mesurables, livrables pour la direction, exécution de niveau entreprise."
        />
        <link rel="canonical" href={canonicalUrl("/")} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Wiam IT Consulting | Infrastructure IT & cybersécurité d’entreprise"
        />
        <meta
          property="og:description"
          content="Réduisez le risque cyber, fiabilisez vos réseaux et industrialisez vos applications — avec un cabinet qui livre à la hauteur de vos enjeux."
        />
        <meta property="og:image" content={OG_HOME_IMAGE} />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OG_HOME_IMAGE} />
      </Helmet>
      <OrganizationJsonLd />

      <section
        className="surface-section relative overflow-hidden"
        aria-labelledby="hero-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-hero-light" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <motion.div {...heroLeft}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
                Cabinet de conseil IT indépendant
              </p>
              <h1
                id="hero-title"
                className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-brand-ink sm:text-5xl lg:text-[3.25rem]"
              >
                Sécuriser. Optimiser. Fiabiliser votre infrastructure IT.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl [text-wrap:pretty]">
                Moins de risque cyber. Des réseaux prêts à scaler. Des applications métiers
                sous contrôle — avec des engagements clairs et une exécution digne d’un
                grand compte.
              </p>
              <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Button to="/contact" variant="primary">
                  Demander une consultation
                </Button>
                <Button to="/services" variant="outline">
                  Découvrir l’offre
                </Button>
              </div>
            </motion.div>
            <motion.div {...heroRight}>
              <ContentImage
                src={HERO_IT_VISUAL}
                alt="Salle serveurs et infrastructure réseau d’entreprise — datacenter"
                priority
                aspect="16/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <TrustBar />

      <section
        className="border-b border-slate-200 bg-slate-50/90"
        aria-labelledby="trust-heading"
      >
        <div className="page-shell py-14 sm:py-16 md:py-20">
          <SectionReveal>
            <h2
              id="trust-heading"
              className="mb-10 text-balance text-center font-display text-2xl font-semibold leading-tight tracking-tight text-brand-ink sm:mb-12 sm:text-3xl"
            >
              Un partenaire pour environnements critiques
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {[
                {
                  label: "Profils seniors",
                  text: "Missions pilotées par des consultants expérimentés — pas de relais systématique vers des profils juniors.",
                },
                {
                  label: "Zones d’intervention",
                  text: "GCC, Arabie saoudite : accompagnement à distance ou sur site selon vos contraintes.",
                },
                {
                  label: "Secteurs",
                  text: "Finance, industrie, services : environnements réglementés et systèmes critiques.",
                },
                {
                  label: "Confidentialité",
                  text: "NDA, livrables exploitables en interne, transparence sur les engagements.",
                },
              ].map((x) => (
                <div
                  key={x.label}
                  className="rounded-xl border border-slate-200/90 bg-white p-7 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-8"
                >
                  <p className="text-sm font-semibold tracking-tight text-brand-ink">{x.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 [text-wrap:pretty]">
                    {x.text}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="surface-muted section-y">
        <div className="page-shell">
          <SectionReveal>
            <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Notre positionnement
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold leading-[1.2] tracking-tight text-brand-ink sm:text-3xl">
                  Un cabinet IT. Une exécution précise.
                </h2>
                <p className="mt-8 leading-relaxed text-slate-600 [text-wrap:pretty]">
                  Partenaire indépendant : cadrage net, communication transparente, livrables
                  utilisables par vos équipes. Nos missions se jugent à la résilience, à la
                  performance et au ROI — pas au volume de jours facturés.
                </p>
                <Link
                  to="/a-propos"
                  className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent no-underline transition hover:text-brand-accent-hover"
                >
                  Mission, vision et méthode
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </div>
              <div className="flex flex-col gap-10">
                <ContentImage
                  src={IMAGES.collaboration}
                  alt="Collaboration professionnelle en équipe projet IT"
                  aspect="16/10"
                />
                <div className="rounded-2xl border border-slate-200/90 bg-white p-8 shadow-card sm:p-10">
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    En synthèse
                  </p>
                  <ul className="mt-6 space-y-4">
                    {[
                      "Cybersécurité : tests, audits, durcissement, supervision",
                      "Réseaux : architecture, HA, VPN, exploitation",
                      "Développement : applicatifs métiers, API, automatisation",
                    ].map((line) => (
                      <li key={line} className="flex gap-3 text-slate-700">
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent"
                          aria-hidden
                        />
                        <span className="leading-relaxed">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="surface-section section-y">
        <div className="page-shell">
          <SectionReveal>
            <SectionHeading
              eyebrow="Offre"
              title="Trois domaines d’intervention intégrés"
              subtitle="Des livrables rédigés pour la direction, exploitables par vos équipes — avec transfert de compétences."
            />
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
              <ServiceCard
                icon={Shield}
                title="Cybersécurité"
                description="Réduire la surface d’attaque et prouver la résistance de vos systèmes — avant que l’adversaire ne le fasse pour vous."
                items={[
                  "Tests d’intrusion et audits de sécurité",
                  "Plans de remédiation et préparation audit",
                  "Durcissement et alignement supervision / détection",
                ]}
                delay={0}
              />
              <ServiceCard
                icon={Network}
                title="Réseaux"
                description="Des réseaux disponibles, segmentés et prêts pour la croissance — du siège aux accès distants."
                items={[
                  "Architecture, haute disponibilité et VPN",
                  "VoIP / communications unifiées et résolution d’incidents",
                  "Migration, performance et support opérationnel",
                ]}
                delay={0.06}
              />
              <ServiceCard
                icon={Code2}
                title="Développement"
                description="Applications et automatisation intégrées à votre SI — sous contrôle de la gouvernance et de la sécurité."
                items={[
                  "Portails métiers et plateformes internes",
                  "Automatisation de flux et exposition d’API",
                  "Intégration applicative et outillage d’exploitation",
                ]}
                delay={0.12}
              />
            </div>
            <div className="mt-14 text-center">
              <Button to="/services" variant="secondary" className="gap-2">
                Voir le détail des services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      <CtaImageStrip
        imageSrc={IMAGES.meeting}
        title="Un audit, une transformation ou un durcissement à planifier ? Parlons calendrier et contraintes."
        ctaTo="/contact"
        ctaLabel="Parler à un consultant"
      />

      <section className="surface-muted section-y">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Pourquoi nous choisir"
            title="Des engagements clairs. Une exécution à la hauteur."
            align="center"
          />
          <div className="mx-auto grid max-w-5xl gap-px bg-slate-200 sm:grid-cols-2">
            {whyUs.map((item, i) => (
              <WhyUsCell key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="surface-section section-y border-b-0">
        <div className="page-shell">
          <SectionReveal>
            <SectionHeading
              eyebrow="Technologies"
              title="Un environnement technique aligné sur vos standards"
              subtitle="Nous nous adaptons à vos choix éditeurs et cloud. Exemples représentatifs ci-dessous."
              align="center"
            />
            <ul
              className="flex flex-wrap justify-center gap-2.5 sm:gap-3"
              aria-label="Technologies et éditeurs"
            >
              {techPreview.map((t) => (
                <li key={t}>
                  <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-brand-accent/30 hover:bg-white hover:shadow-sm">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-12 text-center">
              <Button to="/technologies" variant="outline">
                Panorama technologique
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      <PreFooterCta
        title="Prêt à sécuriser et fiabiliser votre SI ?"
        ctaTo="/contact"
        ctaLabel="Demander une consultation"
      />
    </>
  );
}
