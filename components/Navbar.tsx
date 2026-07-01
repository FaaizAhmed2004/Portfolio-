"use client";

import { useEffect, useMemo, useState } from "react";
import { Icon } from "./ui/Icon";
import { navItems } from "../constants/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const links = useMemo(
    () =>
      navItems.map((item) => (
        <a
          key={item.id}
          href={item.href ?? (item.id === "home" ? "/" : `#${item.id}`)}
          className={`rounded-full px-4 py-2 text-sm transition-all duration-300 hover:text-cyan-200 hover:bg-white/5 ${
            activeId === item.id ? "text-cyan-100" : "text-slate-300"
          }`}
          onClick={() => setOpen(false)}
        >
          {item.label}
        </a>
      )),
    [activeId]
  );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Faaiz Ahmed</p>
          <p className="text-sm font-medium text-slate-900"> Software Engineer</p>
        </div>

        <nav className="hidden items-center gap-2 lg:flex">{links}</nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-900 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-100 lg:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <Icon name="x" size={20} /> : <Icon name="menu" size={20} />}
        </button>
      </div>

      {open ? (
        <div className="flex flex-col gap-2 border-t border-slate-200 bg-white/95 px-6 py-4 backdrop-blur-2xl lg:hidden">
          {links}
        </div>
      ) : null}
    </header>
  );
}
