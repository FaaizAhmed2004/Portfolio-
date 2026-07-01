"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui/SectionHeading";
import { skillItems } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative px-6 pb-20 pt-20 sm:px-8 lg:px-10">
      <SectionHeading
        pretitle="Skills"
        title="Animated indicators that show where my strengths really live."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillItems.map((skill) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(5,10,20,0.45)] backdrop-blur-xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
              <span className="text-sm text-cyan-200">{skill.value}%</span>
            </div>
            <div className="relative h-5 overflow-hidden rounded-full bg-slate-900/90">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-blue-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">{skill.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
