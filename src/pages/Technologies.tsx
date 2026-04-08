import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const categories = [
  {
    title: "Réseaux et infrastructure",
    items: [
      "Cisco IOS-XE / IOS-XR",
      "Routage, commutation et conception campus",
      "Répartition de charge et haute disponibilité",
      "DNS, DHCP et services fondamentaux",
    ],
  },
  {
    title: "Sécurité et identité",
    items: [
      "Pare-feu nouvelle génération",
      "VPN site à site et accès nomade",
      "SIEM et usages de corrélation",
      "Active Directory et intégration d’identité",
    ],
  },
  {
    title: "Plateformes et cloud",
    items: [
      "Linux (RHEL, Debian, Ubuntu)",
      "Environnements Windows Server",
      "Charges sur AWS et Azure",
      "Conteneurs (Docker, orchestration)",
    ],
  },
  {
    title: "Développement et données",
    items: [
      "Python, TypeScript et scripts d’exploitation",
      "API REST et intégration événementielle",
      "PostgreSQL et modélisation relationnelle",
      "CI/CD et infrastructure as code (Terraform, etc.)",
    ],
  },
];

const also = [
  "VoIP / SIP",
  "Supervision",
  "PCA / PRA",
  "Feuille de route zero trust",
];

export default function Technologies() {
  return (
    <>
      <Helmet>
        <title>Technologies | Wiam IT Consulting</title>
        <meta
          name="description"
          content="Environnements techniques et outils couverts par Wiam IT Consulting : Cisco, Linux, pare-feu, cloud, Python, intégration d’entreprise."
        />
        <link rel="canonical" href="https://www.wiamit.com/technologies" />
      </Helmet>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Technologies
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
              Un socle technique aligné sur vos standards
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Nous adaptons nos interventions à vos choix éditeurs et à votre
              politique cloud. La liste ci-dessous est indicative — elle reflète des
              environnements que nous accompagnons régulièrement au Moyen-Orient et à
              l’international.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="border-b border-slate-200 bg-brand-muted py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((cat, i) => (
              <motion.article
                key={cat.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-brand-ink">{cat.title}</h2>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-slate-600">
                  {cat.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-accent"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Également couverts
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {also.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="mt-14 text-center">
            <Button to="/contact" variant="primary">
              Parler de votre environnement
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
