import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Shield,
  ShieldCheck,
  Lock,
  Eye,
  Network,
  Router,
  Phone,
  Wrench,
  Code2,
  Workflow,
  Puzzle,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ContentImage from "@/components/ui/ContentImage";
import { IMAGES, ogImages } from "@/config/images";
import { canonicalUrl } from "@/config/site";
import { useFadeEnterMotion, useInViewMotion } from "@/lib/motion";

const sections = [
  {
    id: "cybersecurite",
    title: "Cybersécurité",
    lead: "Réduire le risque matériel par des tests fondés sur des preuves, une remédiation structurée et des contrôles opérables par vos équipes.",
    icon: Shield,
    blocks: [
      {
        icon: Eye,
        heading: "Tests d’intrusion",
        bullets: [
          "Campagnes externes, internes et applications web",
          "Scénarios alignés sur vos modèles de menace",
          "Restitution exécutif + technique avec priorisation",
        ],
      },
      {
        icon: ShieldCheck,
        heading: "Audit et assurance sécurité",
        bullets: [
          "Écarts par rapport aux référentiels et politiques internes",
          "Collecte de preuves pour cycles de certification et audit",
          "Feuilles de route arbitrées selon l’urgence et la charge opérationnelle",
        ],
      },
      {
        icon: Lock,
        heading: "Durcissement et supervision",
        bullets: [
          "Socles serveurs, postes, identité et périmètre",
          "Alignement cas d’usage SIEM / détection",
          "Contrôles de non-régression après changement",
        ],
      },
      {
        icon: Shield,
        heading: "Conseil continu",
        bullets: [
          "Revue d’architecture pour projets à risque élevé",
          "Préparation d’exercices et communication de crise",
          "Évaluation posture fournisseurs et cloud",
        ],
      },
    ],
  },
  {
    id: "reseaux",
    title: "Réseaux",
    lead: "Concevoir une connectivité scalable et sécurisée — du campus et du datacenter aux équipes distribuées dans la région.",
    icon: Network,
    blocks: [
      {
        icon: Router,
        heading: "Conception et architecture",
        bullets: [
          "Segmentation, routage et topologies haute disponibilité",
          "Documentation normalisée pour l’exploitation",
          "Dimensionnement résilience et montée en charge",
        ],
      },
      {
        icon: Network,
        heading: "VPN et accès sécurisés",
        bullets: [
          "Site à site et accès nomade",
          "Principes compatibles zero trust lorsque pertinent",
          "Migration de politiques et bascule maîtrisée",
        ],
      },
      {
        icon: Phone,
        heading: "VoIP et communications unifiées",
        bullets: [
          "Intégration, qualité de service et supervision",
          "Diagnostic flux voix, passerelles et trunk SIP",
          "Plans de migration avec impact maîtrisé",
        ],
      },
      {
        icon: Wrench,
        heading: "Exploitation et dépannage",
        bullets: [
          "Analyse de performance et causes racines",
          "Fenêtres de changement, retour arrière, validation",
          "Transfert de compétences vers vos équipes réseau",
        ],
      },
    ],
  },
  {
    id: "developpement",
    title: "Développement logiciel",
    lead: "Livrer des applicatifs compatibles avec votre gouvernance, interopérables et maintenables après la fin de mission.",
    icon: Code2,
    blocks: [
      {
        icon: Code2,
        heading: "Applications web",
        bullets: [
          "Portails internes et canaux clients lorsque requis",
          "Contrôle d’accès, traçabilité et cycle de développement sécurisé",
          "Objectifs de performance et disponibilité contractualisés",
        ],
      },
      {
        icon: Workflow,
        heading: "Automatisation et intégration",
        bullets: [
          "Orchestration de processus et suppression des ruptures manuelles",
          "Intégration API entre systèmes métiers",
          "Tâches planifiées, supervision et guides d’exploitation",
        ],
      },
      {
        icon: Puzzle,
        heading: "Intégration de systèmes",
        bullets: [
          "Gestion rigoureuse des identités et comptes de service",
          "Mapping de données, contrôles et réconciliation",
          "Documentation pour le support et les évolutions",
        ],
      },
    ],
  },
];

type ServiceBlock = (typeof sections)[number]["blocks"][number];

function ServiceBlockArticle({ block, bi }: { block: ServiceBlock; bi: number }) {
  const m = useInViewMotion(bi * 0.05, 12, { margin: "-24px" });
  const BlockIcon = block.icon;
  return (
    <motion.article
      {...m}
      className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
    >
      <div className="mb-4 flex items-center gap-3">
        <BlockIcon className="h-5 w-5 text-brand-accent" strokeWidth={1.5} aria-hidden />
        <h3 className="text-lg font-semibold text-brand-ink">{block.heading}</h3>
      </div>
      <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
        {block.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400"
              aria-hidden
            />
            {b}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Services() {
  const heroLeft = useFadeEnterMotion(10, 0.4, 0);
  const heroRight = useFadeEnterMotion(12, 0.45, 0.05);

  return (
    <>
      <Helmet>
        <title>Services de conseil IT | Wiam IT Consulting</title>
        <meta
          name="description"
          content="Cybersécurité, réseaux et développement logiciel : tests d’intrusion, audits, VPN, VoIP, applications métiers et intégration pour entreprises."
        />
        <link rel="canonical" href={canonicalUrl("/services")} />
        <meta property="og:image" content={ogImages.services} />
      </Helmet>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div {...heroLeft}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                Services
              </p>
              <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
                Des prestations calibrées pour environnements réglementés et critiques
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                Chaque mission démarre par un cadrage précis des résultats attendus, des
                contraintes et des parties prenantes. La livraison suit une méthode
                structurée : décisions traçables, risques explicités, transfert
                opérationnel complet.
              </p>
            </motion.div>
            <motion.div {...heroRight}>
              <ContentImage
                src={IMAGES.cyber}
                alt="Cybersécurité et supervision des systèmes d’information"
                aspect="16/10"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {sections.map((section, si) => {
        const SectionIcon = section.icon;
        const bg = si % 2 === 0 ? "bg-brand-muted" : "bg-white";
        return (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-20 border-b border-slate-200 py-14 sm:py-16 md:py-20 ${bg}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-10 flex flex-col gap-6 lg:mb-12">
                <div className="flex gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-accent">
                    <SectionIcon className="h-7 w-7" strokeWidth={1.5} aria-hidden />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-brand-ink sm:text-3xl">
                      {section.title}
                    </h2>
                    <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
                      {section.lead}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                {section.blocks.map((block, bi) => (
                  <ServiceBlockArticle key={block.heading} block={block} bi={bi} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-brand-muted py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            title="Cadrage, planning et modalités d’intervention"
            subtitle="Indiquez vos objectifs, le périmètre technique et le contexte réglementaire : nous revenons vers vous avec une proposition structurée."
            align="center"
          />
          <Button to="/contact" variant="primary" className="px-8">
            Échanger avec un consultant
          </Button>
        </div>
      </section>
    </>
  );
}
