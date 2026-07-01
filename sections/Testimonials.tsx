"use client";

import { motion } from "framer-motion";
import { Icon } from "../components/ui/Icon";
import { SectionHeading } from "../components/ui/SectionHeading";
import { testimonials } from "../data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 pb-20 pt-20 sm:px-8 lg:px-10">
      <SectionHeading
        pretitle="Testimonials"
        title="Elegant feedback cards to reflect your professional story."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(8,11,24,0.45)] backdrop-blur-xl"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
              <Icon name="quote" className="h-5 w-5" />
            </div>
            <p className="text-base leading-8 text-slate-300">“{testimonial.quote}”</p>
            <div className="mt-8 space-y-1">
              <p className="text-lg font-semibold text-white">{testimonial.name}</p>
              <p className="text-sm text-slate-400">{testimonial.role} • {testimonial.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
