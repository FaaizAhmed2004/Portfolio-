"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui/SectionHeading";
import { serviceItems } from "../data/services";

export function Services() {
  return (
    <section id="services" className="relative px-6 pb-20 pt-20 sm:px-8 lg:px-10">
      <SectionHeading
        pretitle="Services"
        title="Premium service offerings for modern software products."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {serviceItems.map((service) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(8,12,24,0.45)] backdrop-blur-xl"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300 shadow-[inset_0_0_20px_rgba(56,189,248,0.08)]">
              <span className="text-2xl font-semibold">•</span>
            </div>
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-4 text-slate-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
