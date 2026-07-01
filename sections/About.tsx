"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative px-6 pb-20 pt-20 sm:px-8 lg:px-10">
      <SectionHeading
        pretitle="About"
        title="Passionate software engineering with strong full stack experience."
        description="I am a dedicated Software Developer and Full Stack Developer building scalable web applications with modern JavaScript technologies. I combine responsive interfaces, secure APIs, and premium interface motion to deliver polished digital products."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_50px_100px_rgba(4,6,19,0.45)] backdrop-blur-xl">
          <p className="text-base leading-8 text-slate-300">
            I am a passionate Software Developer and Full Stack Developer with experience building scalable web applications using modern JavaScript technologies.
          </p>
          <p className="text-base leading-8 text-slate-300">
            I specialize in React, Next.js, TypeScript, Node.js, Express.js, MongoDB, Tailwind CSS, REST APIs, Authentication, Responsive Design, and modern UI development.
          </p>
          <p className="text-base leading-8 text-slate-300">
            Previously worked as a MERN Stack Developer Intern at Coderatory on ERP Systems, HRM, LMS, CRM, REST APIs, Admin Dashboards, client projects, and authentication systems. I am currently pursuing a Bachelor of Science in Computer Science (BSCS) while continuously learning blockchain development and modern software architecture.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_35px_80px_rgba(9,12,25,0.55)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Profile</p>
            <ul className="mt-5 space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400" />
                Experienced in full stack development, UI/UX, and backend architecture.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400" />
                Built scalable systems with authentication, responsive dashboards, and API-first design.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400" />
                Comfortable with collaboration tools, agile delivery, and fast iteration cycles.
              </li>
            </ul>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_35px_80px_rgba(9,12,25,0.55)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Highlights</p>
            <div className="mt-5 grid gap-4 text-slate-300 sm:grid-cols-2">
              {[
                "ERP Systems",
                "HRM Platforms",
                "LMS & CRM",
                "Admin Dashboards",
                "Authentication Systems",
                "Modern responsive UIs",
              ].map((item) => (
                <span key={item} className="rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
