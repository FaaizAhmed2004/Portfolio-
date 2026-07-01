"use client";

import dynamic from "next/dynamic";
import { Navbar } from "./Navbar";
import { ScrollProgress } from "./ScrollProgress";
import { LenisProvider } from "./LenisProvider";
import { Footer } from "../sections/Footer";

const BackgroundScene = dynamic(
  () => import("./BackgroundScene").then((mod) => mod.BackgroundScene),
  { ssr: false }
);
const CustomCursor = dynamic(
  () => import("./CustomCursor").then((mod) => mod.CustomCursor),
  { ssr: false }
);

interface PortfolioPageProps {
  children: React.ReactNode;
}

export function PortfolioPage({ children }: PortfolioPageProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <LenisProvider />
      <ScrollProgress />
      <BackgroundScene />
      <CustomCursor />

      <div className="relative z-10 min-h-screen">
        <Navbar />
        <main className="mx-auto max-w-7xl pb-20 pt-4">
          <div className="px-6 pt-10 sm:px-8 lg:px-10">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
