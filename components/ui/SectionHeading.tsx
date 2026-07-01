import type { ReactNode } from "react";

interface SectionHeadingProps {
  pretitle: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function SectionHeading({ pretitle, title, description, children }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm uppercase tracking-[0.4em] text-cyan-300/80">{pretitle}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-slate-300 sm:text-lg">{description}</p> : null}
      {children}
    </div>
  );
}
