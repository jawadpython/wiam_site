import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Technologies = lazy(() => import("@/pages/Technologies"));
const MentionsLegales = lazy(() => import("@/pages/MentionsLegales"));
const PolitiqueConfidentialite = lazy(() => import("@/pages/PolitiqueConfidentialite"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] flex-1 items-center justify-center bg-white">
      <p className="text-sm font-medium text-slate-500">Chargement…</p>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="a-propos" element={<About />} />
          <Route path="about" element={<Navigate to="/a-propos" replace />} />
          <Route path="contact" element={<Contact />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="mentions-legales" element={<MentionsLegales />} />
          <Route
            path="politique-confidentialite"
            element={<PolitiqueConfidentialite />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
