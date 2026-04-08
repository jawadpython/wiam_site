import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  delay?: number;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  items,
  delay = 0,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px" }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col rounded-xl border border-slate-200/90 bg-white p-7 shadow-card transition hover:border-brand-accent/25 hover:shadow-card-hover sm:p-8"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-brand-accent transition group-hover:bg-blue-100">
        <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
      </div>
      <h3 className="text-xl font-semibold text-brand-ink">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
      <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-6 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-accent"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
