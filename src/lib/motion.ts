import { useReducedMotion } from "framer-motion";

/** Props pour entrée de page (opacity + léger déplacement vertical) */
export function useFadeEnterMotion(y = 10, duration = 0.4, delay = 0) {
  const reduced = useReducedMotion();
  if (reduced) {
    return {
      initial: false,
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    } as const;
  }
  return {
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as const },
  } as const;
}

/** Props pour cartes / blocs avec whileInView */
export function useInViewMotion(
  delay = 0,
  y = 14,
  opts?: { margin?: string },
) {
  const reduced = useReducedMotion();
  const margin = opts?.margin ?? "-32px";
  if (reduced) {
    return {
      initial: false,
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin } as const,
      transition: { duration: 0 },
    } as const;
  }
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin } as const,
    transition: {
      duration: 0.4,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  } as const;
}

/** Transition de page (Outlet) */
export function usePageTransitionMotion() {
  const reduced = useReducedMotion();
  if (reduced) {
    return {
      initial: false,
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    } as const;
  }
  return {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -4 },
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const },
  } as const;
}
