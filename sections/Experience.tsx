"use client";

import { motion } from "framer-motion";
import { Icon } from "../components/ui/Icon";
import { SectionHeading } from "../components/ui/SectionHeading";
import { experienceItems } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 pb-20 pt-20 sm:px-8 lg:px-10">
      <SectionHeading
        pretitle="Experience"
        title="Meaningful work that blends product polish with technical depth."
      />

      <div className="space-y-8">
        {experienceItems.map((item) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(6,10,22,0.5)] backdrop-blur-xl"
          >
            <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">{item.company}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
              </div>
              <span className="rounded-full bg-slate-900/90 px-4 py-2 text-sm text-slate-300">{item.period}</span>
            </div>
            <p className="mb-6 text-slate-300">{item.description}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {item.highlights.map((point) => (
                <div key={point} className="rounded-3xl border border-white/5 bg-slate-950/70 p-4 text-slate-300">
                  <div className="mb-2 flex items-center gap-2 text-cyan-300">
                    <Icon name="briefcase" className="h-4 w-4" />
                    {point.split(".")[0]}
                  </div>
                  <p className="text-sm leading-6 text-slate-400">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
