"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-cyan-400 via-violet-500 to-blue-400 shadow-[0_0_20px_rgba(56,189,248,0.45)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
