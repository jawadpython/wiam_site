/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#0f172a",
          navy: "#0f172a",
          accent: "#2563eb",
          "accent-hover": "#1d4ed8",
          "accent-soft": "#2563eb",
          muted: "#f8fafc",
          line: "#e2e8f0",
        },
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "hero-light":
          "radial-gradient(ellipse 90% 60% at 0% -10%, rgba(37, 99, 235, 0.07), transparent), radial-gradient(ellipse 70% 50% at 100% 0%, rgba(15, 23, 42, 0.035), transparent)",
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
