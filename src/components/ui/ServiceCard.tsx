import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInViewMotion } from "@/lib/motion";

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
  const m = useInViewMotion(delay);
  return (
    <motion.article
      {...m}
      className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-8 shadow-card transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-brand-accent/35 hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.18)] sm:p-9 motion-reduce:transform-none motion-reduce:hover:shadow-card"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-brand-accent transition group-hover:bg-blue-100">
        <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-brand-ink">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 [text-wrap:pretty]">
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
