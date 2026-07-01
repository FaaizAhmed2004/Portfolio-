import { Icon } from "../components/ui/Icon";
import { navItems, siteConfig } from "../constants/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-cyan-300/80">Faaiz Ahmed</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">A premium portfolio experience built for performance, motion, and modern engineering.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          {navItems.map((item) => (
            <a key={item.id} href={item.href ?? (item.id === "home" ? "/" : `#${item.id}`)} className="transition hover:text-cyan-200">
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>{siteConfig.copyright}</p>
        <div className="flex items-center gap-3">
          {[
            { href: "#", label: "GitHub" },
            { href: "#", label: "LinkedIn" },
            { href: "#", label: "Instagram" },
            { href: "#", label: "WhatsApp" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-200"
            >
              <Icon name="arrow-right" className="h-4 w-4" />
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
