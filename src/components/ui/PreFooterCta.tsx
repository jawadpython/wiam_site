import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useInViewMotion } from "@/lib/motion";

type Props = {
  title: string;
  ctaTo: string;
  ctaLabel: string;
};

/**
 * Bloc CTA discret avant le footer — répétition de conversion sans image lourde.
 */
export default function PreFooterCta({ title, ctaTo, ctaLabel }: Props) {
  const m = useInViewMotion(0, 12, { margin: "-48px" });

  return (
    <motion.section
      {...m}
      className="border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
      aria-labelledby="prefooter-cta-heading"
    >
      <div className="page-shell py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="prefooter-cta-heading"
            className="font-display text-balance text-2xl font-semibold tracking-tight text-brand-ink sm:text-3xl"
          >
            {title}
          </h2>
          <div className="mt-8">
            <Button to={ctaTo} variant="primary" className="min-h-[48px] px-8 sm:min-h-[44px]">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
