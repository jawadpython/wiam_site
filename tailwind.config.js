/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          /** Texte principal / en-têtes */
          ink: "#0f172a",
          /** Bleu entreprise */
          navy: "#0c1e3c",
          /** Accents */
          accent: "#1d4ed8",
          "accent-hover": "#1e40af",
          "accent-soft": "#2563eb",
          /** Surfaces claires */
          muted: "#f8fafc",
          line: "#e2e8f0",
        },
      },
      fontFamily: {
        sans: [
          '"Source Sans 3"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          '"Source Serif 4"',
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
      },
      backgroundImage: {
        "hero-light":
          "radial-gradient(ellipse 90% 60% at 0% -10%, rgba(37, 99, 235, 0.08), transparent), radial-gradient(ellipse 70% 50% at 100% 0%, rgba(15, 23, 42, 0.04), transparent)",
        "footer-dark": "linear-gradient(180deg, #0c1e3c 0%, #0a1628 100%)",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(15 23 42 / 0.04), 0 8px 24px -6px rgb(15 23 42 / 0.08)",
        "card-hover":
          "0 4px 12px -2px rgb(15 23 42 / 0.08), 0 20px 40px -12px rgb(37 99 235 / 0.14)",
        nav: "0 1px 0 0 rgb(226 232 240 / 1), 0 4px 16px -4px rgb(15 23 42 / 0.06)",
        lift: "0 12px 40px -12px rgb(15 23 42 / 0.12)",
      },
      maxWidth: {
        prose: "42rem",
      },
    },
  },
  plugins: [],
};
