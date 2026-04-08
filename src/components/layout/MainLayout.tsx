import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { usePageTransitionMotion } from "@/lib/motion";

export default function MainLayout() {
  const location = useLocation();
  const pageMotion = usePageTransitionMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-[#fafbfc]">
      <a
        href="#contenu-principal"
        className="sr-only left-4 top-4 z-[100] rounded-md bg-brand-ink px-4 py-2 text-sm font-semibold text-white shadow-lg outline-none ring-brand-accent transition focus:not-sr-only focus:absolute focus:ring-2"
      >
        Aller au contenu
      </a>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          role="main"
          id="contenu-principal"
          tabIndex={-1}
          className="flex flex-1 flex-col outline-none"
          initial={pageMotion.initial}
          animate={pageMotion.animate}
          exit={pageMotion.exit}
          transition={pageMotion.transition}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
