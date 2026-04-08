import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Target, Compass, Layers } from "lucide-react";
import Button from "@/components/ui/Button";

const approach = [
  {
    step: "01",
    title: "Comprendre et aligner",
    text: "Nous clarifions les objectifs business, les contraintes techniques, le cadre de conformité et les attentes des parties prenantes avant de proposer un périmètre.",
  },
  {
    step: "02",
    title: "Concevoir et prioriser",
    text: "Les plans d’architecture et de remédiation sont séquencés selon le risque et les dépendances — pour sécuriser des gains rapides sans dette technique cachée.",
  },
  {
    step: "03",
    title: "Livrer et valider",
    text: "La mise en œuvre inclut des jalons mesurables, des preuves de contrôle et une mise en production que vos équipes peuvent assumer.",
  },
  {
    step: "04",
    title: "Durcir et améliorer",
    text: "Nous accompagnons la phase de régime de croisière : playbooks, montée en compétences et, si besoin, continuité en conseil ciblé.",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>À propos | Wiam IT Consulting</title>
        <meta
          name="description"
          content="Wiam IT Consulting : cabinet de conseil IT indépendant, mission, vision et méthodologie structurée pour missions d’entreprise au Moyen-Orient et à l’international."
        />
        <link rel="canonical" href="https://www.wiamit.com/a-propos" />
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
              À propos
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
              Un cabinet de conseil IT, avec la discipline d’exécution d’une grande entreprise
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Wiam IT Consulting est structuré comme une société de services professionnels
              : engagements formalisés, confidentialité stricte et discours adapté aussi
              bien aux comités de direction qu’aux équipes techniques et d’audit.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="border-b border-slate-200 bg-brand-muted py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.article
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-200 bg-white p-8 shadow-card lg:p-10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-brand-accent">
                <Target className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </div>
              <h2 className="text-xl font-semibold text-brand-ink">Mission</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Permettre aux organisations d’Arabie saoudite, du Golfe et
                internationales d’exploiter la technologie avec maîtrise : incidents
                évitables en moins, responsabilités claires, infrastructures qui
                soutiennent la croissance sans compromettre sécurité ni résilience.
              </p>
            </motion.article>
            <motion.article
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="rounded-xl border border-slate-200 bg-white p-8 shadow-card lg:p-10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-brand-accent">
                <Compass className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </div>
              <h2 className="text-xl font-semibold text-brand-ink">Vision</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Être un conseil de référence pour les entreprises qui exigent la
                précision : recommandations défendables, livraisons prévisibles, et
                chaque mission renforce vos équipes internes plutôt qu’une dépendance
                permanente aux prestataires.
              </p>
            </motion.article>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-xl border border-slate-200 bg-white p-8 shadow-card lg:p-12"
          >
            <h2 className="font-display text-2xl font-semibold text-brand-ink sm:text-3xl">
              Une expertise vérifiable sur le terrain
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-slate-600">
              Notre expérience couvre la sécurité offensive, les environnements réseau
              de grande ampleur et les applicatifs critiques métiers. Nous pouvons
              intervenir aux côtés d’intégrateurs mondiaux ou piloter des programmes
              de bout en bout lorsqu’un interlocuteur unique est préférable. Notre
              rôle : arbitrer lorsqu’il faut investir, simplifier ou arrêter de
              complexifier inutilement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-start gap-4 sm:mb-12">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-accent">
              <Layers className="h-6 w-6" strokeWidth={1.5} aria-hidden />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Notre méthode
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-brand-ink">
                Un cadre de responsabilité, à chaque étape
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
                Le cycle de mission est lisible pour toutes les parties prenantes : pas
                de formalisme inutile, mais une intention constante — cadrage avant
                livraison.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {approach.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="border-l-2 border-brand-accent pl-6"
              >
                <span className="text-xs font-bold text-brand-accent">{item.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-brand-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button to="/contact" variant="primary">
              Planifier un échange
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
