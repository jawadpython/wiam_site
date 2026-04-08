/**
 * Fine bandeau de confiance sous le hero — réassurance sans alourdir la grille.
 */
const ITEMS = [
  "Disponible au Maroc",
  "Support rapide",
  "Expertise certifiée",
] as const;

export default function TrustBar() {
  return (
    <div
      className="border-b border-slate-200/90 bg-gradient-to-b from-slate-50/80 to-white"
      role="region"
      aria-label="Engagements et disponibilité"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <ul className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-0 sm:divide-x sm:divide-slate-200">
          {ITEMS.map((label) => (
            <li
              key={label}
              className="px-4 text-center text-sm font-medium leading-snug tracking-wide text-slate-600 sm:py-0.5"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
