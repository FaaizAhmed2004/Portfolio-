"use client";

import { motion } from "framer-motion";
import { achievements } from "../data/achievements";
import { SectionHeading } from "../components/ui/SectionHeading";

export function Achievements() {
  return (
    <section id="achievements" className="relative px-6 pb-20 pt-20 sm:px-8 lg:px-10">
      <SectionHeading
        pretitle="Achievements"
        title="Animated counters that highlight impact and momentum."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-7 shadow-[0_35px_95px_rgba(10,14,27,0.45)] backdrop-blur-xl"
          >
            <p className="text-5xl font-semibold text-white">{achievement.value}</p>
            <p className="mt-4 text-sm uppercase tracking-[0.35em] text-cyan-300/90">{achievement.label}</p>
            <p className="mt-3 text-slate-300">{achievement.suffix}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
