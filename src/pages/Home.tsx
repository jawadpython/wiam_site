import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Network,
  Code2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

const techPreview = [
  "Cisco",
  "Linux",
  "Pare-feu",
  "VPN",
  "Cloud",
  "Python",
  "Kubernetes",
  "PostgreSQL",
];

const whyUs = [
  {
    title: "Expertise senior",
    text: "Chaque mission est pilotée par des consultants de terrain : pas de relais systématique vers des profils juniors.",
  },
  {
    title: "Gouvernance structurée",
    text: "Jalons, comités de pilotage et reporting adaptés aux directions générales et aux comités de risques.",
  },
  {
    title: "Sécurité par conception",
    text: "Les choix d’architecture et de contrôle sont arbitrés selon la menace réelle et votre capacité opérationnelle.",
  },
  {
    title: "Contexte régional",
    text: "Expérience auprès d’organisations du Golfe et d’Arabie saoudite : exigences de conformité, disponibilité et résilience.",
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Wiam IT Consulting | Conseil IT, cybersécurité et infrastructures
        </title>
        <meta
          name="description"
          content="Wiam IT Consulting accompagne les entreprises du Moyen-Orient et au-delà : cybersécurité, réseaux et développement logiciel avec une exigence de niveau cabinet."
        />
        <link rel="canonical" href="https://www.wiamit.com/" />
      </Helmet>

      <section
        className="relative overflow-hidden border-b border-slate-200 bg-white"
        aria-labelledby="hero-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-hero-light" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
              Cabinet de conseil IT indépendant
            </p>
            <h1
              id="hero-title"
              className="text-balance font-display text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]"
            >
              Sécuriser. Optimiser. Fiabiliser votre infrastructure IT.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              Nous aidons les directions générales et les DSI à réduire le risque
              cyber, à moderniser les réseaux et à industrialiser les applications
              métiers — avec des engagements clairs et une exécution de niveau
              entreprise.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button to="/contact" variant="primary">
                Demander une consultation
              </Button>
              <Button to="/contact" variant="outline">
                Nous contacter
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-brand-muted py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Notre positionnement
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-brand-ink sm:text-3xl">
                Un conseil IT structuré comme un cabinet, livré avec la précision
                d’une équipe technique
              </h2>
              <p className="mt-6 leading-relaxed text-slate-600">
                Wiam IT Consulting intervient en tant que partenaire indépendant :
                cadrage rigoureux, communication transparente et livrables exploitables
                par vos équipes. Nos missions sont mesurées à l’aune de la résilience,
                de la performance et du retour sur investissement — pas au seul volume
                de journées facturées.
              </p>
              <Link
                to="/a-propos"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent no-underline transition hover:text-brand-accent-hover"
              >
                Mission, vision et méthode
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-card sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                En synthèse
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Cybersécurité : évaluation, tests, durcissement et supervision",
                  "Réseaux : conception, exploitation et accès sécurisés",
                  "Développement : applications métiers, automatisation et intégration",
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-slate-700">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Offre"
            title="Trois domaines d’intervention intégrés"
            subtitle="Des livrables rédigés pour la direction et exploitables par vos équipes techniques — avec transfert de compétences systématique."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            <ServiceCard
              icon={Shield}
              title="Cybersécurité"
              description="Réduire la surface d’attaque et démontrer la résistance de vos systèmes avant que l’adversaire ne le fasse à votre place."
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
              description="Concevoir et opérer des réseaux disponibles, segmentés et prêts pour la croissance — du siège aux accès distants."
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
              description="Applications et automatisation intégrées à votre SI, sous contrôle de la gouvernance et de la sécurité."
              items={[
                "Portails métiers et plateformes internes",
                "Automatisation de flux et exposition d’API",
                "Intégration applicative et outillage d’exploitation",
              ]}
              delay={0.12}
            />
          </div>
          <div className="mt-12 text-center">
            <Button to="/services" variant="secondary" className="gap-2">
              Voir le détail des services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-brand-muted py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pourquoi nous confier vos projets"
            title="La confiance se construit par la clarté des engagements et la qualité d’exécution"
            align="center"
          />
          <div className="mx-auto grid max-w-5xl gap-px bg-slate-200 sm:grid-cols-2">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="bg-brand-muted p-8 sm:p-10"
              >
                <h3 className="text-lg font-semibold text-brand-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Technologies"
            title="Un environnement technique aligné sur vos standards"
            subtitle="Nous nous adaptons à vos choix éditeurs et cloud. Exemples représentatifs ci-dessous."
            align="center"
          />
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {techPreview.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/technologies" variant="outline">
              Panorama technologique
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
