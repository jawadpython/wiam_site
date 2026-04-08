import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Technologies = lazy(() => import("@/pages/Technologies"));

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
        </Route>
      </Routes>
    </Suspense>
  );
}
