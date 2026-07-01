import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_rgba(12,15,28,0.4)] backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}
