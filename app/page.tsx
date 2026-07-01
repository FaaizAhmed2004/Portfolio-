"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { ScrollProgress } from "../components/ScrollProgress";
import { LoadingScreen } from "../components/LoadingScreen";
import { LenisProvider } from "../components/LenisProvider";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { TechStack } from "../sections/TechStack";
import { Experience } from "../sections/Experience";
import { Skills } from "../sections/Skills";
import { Services } from "../sections/Services";
import { Projects } from "../sections/Projects";
import { Achievements } from "../sections/Achievements";
import { Testimonials } from "../sections/Testimonials";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";

const BackgroundScene = dynamic(
  () => import("../components/BackgroundScene").then((mod) => mod.BackgroundScene),
  { ssr: false }
);
const CustomCursor = dynamic(
  () => import("../components/CustomCursor").then((mod) => mod.CustomCursor),
  { ssr: false }
);

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <LenisProvider />
      <ScrollProgress />
      <BackgroundScene />
      <CustomCursor />

      <div className="relative z-10 min-h-screen">
        <Navbar />
        {loading ? (
          <LoadingScreen />
        ) : (
          <main className="mx-auto max-w-7xl pb-20 pt-4">
            <Hero />
            <About />
            <TechStack />
            <Experience />
            <Skills />
            <Services />
            <Projects />
            <Achievements />
            <Testimonials />
            <Contact />
            <Footer />
          </main>
        )}
      </div>
    </div>
  );
}
