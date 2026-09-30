"use client";

import { cn } from "@/lib/cn";

type FilterChipProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
  tone?: "dark" | "light";
};

export function FilterChip({
  label,
  active,
  onClick,
  tone = "dark",
}: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "focus-ring h-[42px] shrink-0 whitespace-nowrap px-5 text-[12px] tracking-[0.04em] transition-colors duration-500 ease-[var(--ease-editorial)] md:h-10 md:px-[22px]",
        tone === "dark" &&
          (active
            ? "rounded-full bg-bronze text-calacatta md:rounded-[2px]"
            : "rounded-full border border-[rgba(243,240,233,0.28)] bg-transparent text-calacatta hover:border-[rgba(243,240,233,0.52)] md:rounded-[2px]"),
        tone === "light" &&
          (active
            ? "rounded-[2px] bg-bronze text-calacatta"
            : "rounded-[2px] border border-[var(--border-light)] bg-transparent text-nero hover:border-nero/40"),
      )}
    >
      {label}
    </button>
  );
}
