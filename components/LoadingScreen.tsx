"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50 text-slate-900"
    >
      <div className="flex w-full max-w-lg flex-col items-center gap-8 px-6 text-center">
        {/* Logo Container */}
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/20 bg-white shadow-[0_0_80px_rgba(14,165,233,0.2)]">
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-violet-500/10 to-blue-400/20 blur-2xl" />

          {/* Logo */}
          <div className="relative h-32 w-32 overflow-hidden rounded-full">
            <Image
              src="/logo.jpeg" // Your logo in the public folder
              alt="Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Loading Text & Progress Bar */}
        <div className="w-full space-y-4">
          <p className="text-sm uppercase tracking-[0.45em] text-slate-500">
            Preparing your digital experience
          </p>

          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-blue-400"
              initial={{ x: "-100%" }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}