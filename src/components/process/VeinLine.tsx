"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type VeinLineProps = {
  className?: string;
  animate?: boolean;
};

export function VeinLine({ className, animate = true }: VeinLineProps) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!animate) return;
    const svg = ref.current;
    if (!svg) return;

    const paths = svg.querySelectorAll("path");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        paths.forEach((path) => path.classList.add("is-drawn"));
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(svg);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <svg
      ref={ref}
      className={cn("overflow-visible", className)}
      viewBox="0 0 420 28"
      fill="none"
      aria-hidden
    >
      <path
        className="vein-organic"
        d="M2 18 C48 6, 72 24, 110 14 S170 4, 210 16 S280 26, 330 12 S390 8, 418 18"
        stroke="rgba(243,240,233,0.70)"
        strokeWidth="1"
      />
      <path
        className="vein-technical"
        d="M2 18 H120 L150 8 H250 L290 18 H418"
        stroke="var(--color-bronze)"
        strokeWidth="1"
      />
    </svg>
  );
}
