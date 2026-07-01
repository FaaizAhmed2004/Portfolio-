"use client";

import { motion } from "framer-motion";
import { Icon } from "../components/ui/Icon";
import { SectionHeading } from "../components/ui/SectionHeading";
import { projectPlaceholders } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative px-6 pb-20 pt-20 sm:px-8 lg:px-10">
      <SectionHeading
        pretitle="Projects"
        title="Elegant placeholder cards ready for your future portfolio showcases."
        description="No fake case studies — this portfolio is designed to present your real work when you are ready to add it."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {projectPlaceholders.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="group rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_90px_rgba(2,6,18,0.55)] backdrop-blur-xl"
          >
            <div className="mb-5 flex items-center justify-between rounded-3xl bg-white/5 px-4 py-3 text-slate-300">
              <span className="flex items-center gap-2 text-cyan-200">
                <Icon name="layers" className="h-4 w-4" /> Placeholder
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-slate-400">Editable</span>
            </div>
            <div className="mb-6 h-48 rounded-[28px] bg-gradient-to-br from-slate-900 via-[#060a14] to-slate-950" />
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.28em] text-slate-400">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100 transition hover:bg-cyan-400/15" disabled>
                GitHub
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10" disabled>
                Live Demo
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
