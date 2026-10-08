import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`font-mono text-[10px] tracking-[0.1em] uppercase ${className}`}>
      {children}
    </p>
  );
}
