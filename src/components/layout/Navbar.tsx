import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À propos" },
  { to: "/technologies", label: "Technologies" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 shadow-nav backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex min-w-0 flex-shrink-0 items-center gap-3 no-underline"
          onClick={() => setOpen(false)}
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent to-blue-900 text-sm font-bold text-white shadow-md shadow-blue-900/20"
            aria-hidden
          >
            W
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight text-brand-ink">
              Wiam
            </span>
            <span className="hidden text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:inline">
              IT Consulting
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Navigation principale"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                [
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-brand-ink"
                    : "text-slate-600 hover:text-brand-ink",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <span className="relative px-1 py-0.5">
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-md bg-slate-100"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-accent-hover"
          >
            Demander une consultation
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-brand-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <nav
              className="flex flex-col px-4 py-3"
              aria-label="Navigation principale (mobile)"
            >
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `border-b border-slate-100 py-3.5 text-base font-medium no-underline ${
                      isActive ? "text-brand-ink" : "text-slate-600"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-3 rounded-md bg-brand-accent py-3 text-center text-sm font-semibold text-white no-underline"
                onClick={() => setOpen(false)}
              >
                Demander une consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
