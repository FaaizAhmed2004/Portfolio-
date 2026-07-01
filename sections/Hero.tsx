"use client";

import { motion } from "framer-motion";
import { Icon } from "../components/ui/Icon";
import { siteConfig } from "../constants/site";
import { useTypewriter } from "../hooks/useTypewriter";
import Image from "next/image";

const roles = [
  "Software Developer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "Next.js Developer",
  "TypeScript Developer",
  "Backend Developer",
  "Blockchain Enthusiast",
];

export function Hero() {
  const typed = useTypewriter(roles, 100, 1400);

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-28 pt-24 sm:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-[380px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_45%)]" />
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-2xl"
        >
          <p className="mb-4 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_30px_rgba(56,189,248,0.1)]">
            <Icon name="sparkles" className="h-4 w-4 text-cyan-300" /> Premium digital experiences for ambitious brands.
          </p>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Hello, I&apos;m <span className="text-cyan-300">{siteConfig.name}</span>
          </h1>
          <p className="mt-6 text-xl font-medium leading-relaxed text-slate-200 sm:text-2xl">
            {siteConfig.role}
          </p>
          <div className="mt-4 overflow-hidden rounded-3xl border border-cyan-300/10 bg-slate-950/70 px-5 py-4 shadow-[0_30px_90px_rgba(8,12,24,0.55)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Focus</p>
            <p className="mt-2 text-3xl font-semibold text-white">{typed}<span className="blinking-cursor">|</span></p>
          </div>
          <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            {siteConfig.description} I enjoy transforming ideas into powerful digital experiences with clean architecture, elegant design, and exceptional user experiences.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={siteConfig.resume}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-black transition hover:border-cyan-300/60 hover:bg-cyan-400/15"
            >
              <Icon name="download" className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-white/10"
            >
              View Projects <Icon name="arrow-right" className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-200"
            >
              Contact Me <Icon name="mail" className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
        {/* Right Side - Logo and Glow Effects */}
  <motion.div
  initial={{ opacity: 0, y: 32 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
  className="relative flex flex-1 items-center justify-center"
>
  <div className="relative flex items-center justify-center">
    {/* Background Glow */}
    <div className="absolute h-[550px] w-[550px] rounded-full bg-cyan-400/20 blur-[150px]" />
    <div className="absolute h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[130px]" />

    {/* Glass Card */}
    <div className="relative flex h-[500px] w-[500px] items-center justify-center rounded-[40px] border border-white/10 bg-slate-950/70 p-4 shadow-[0_40px_120px_rgba(8,12,24,0.55)] backdrop-blur-2xl">
      {/* Inner Glow */}
      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/10" />

      {/* Animated Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [0.98, 1.03, 0.98],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 h-[92%] w-[92%]"
      >
        <Image
          src="/logo.jpeg"
          alt="Logo"
          fill
          priority
          className="object-contain drop-shadow-[0_0_80px_rgba(34,211,238,0.45)]"
        />
      </motion.div>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}
