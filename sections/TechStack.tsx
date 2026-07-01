"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui/SectionHeading";
import { techCategories } from "../data/techStack";

export function TechStack() {
  return (
    <section id="tech" className="relative px-6 pb-20 pt-20 sm:px-8 lg:px-10">
      <SectionHeading
        pretitle="Tech Stack"
        title="A rich toolkit for modern engineering and premium product delivery."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {techCategories.map((group) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(9,12,25,0.45)] backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <div className="mt-5 space-y-3">
              {group.items.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-3xl border border-white/5 bg-slate-950/60 px-4 py-3 text-slate-300 transition hover:border-cyan-400/20 hover:bg-slate-900/80">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
