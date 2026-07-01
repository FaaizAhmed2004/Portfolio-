"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const interactiveSelectors = ["a", "button", "input", "textarea", "label", "select", "option", "textarea", "summary"];

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = interactiveSelectors.some((selector) => target.closest(selector));
      setActive(isInteractive);
    };

    const handleMouseOut = () => {
      setActive(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] flex h-14 w-14 items-center justify-center rounded-full border border-slate-900/90 bg-white/95 shadow-[0_0_0_1px_rgba(255,255,255,0.95),0_0_42px_rgba(14,165,233,0.2)] backdrop-blur-xl"
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          scale: active ? 1.28 : 1,
          opacity: 1,
          boxShadow: active
            ? "0 0 0 1px rgba(255,255,255,0.95), 0 0 45px rgba(14,165,233,0.25)"
            : "0 0 0 1px rgba(255,255,255,0.95), 0 0 25px rgba(15,23,42,0.16)",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      >
        <motion.div
          className="h-4 w-4 rounded-full bg-cyan-500 shadow-[0_0_18px_rgba(14,165,233,0.45)]"
          animate={{ scale: active ? 1.45 : 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
