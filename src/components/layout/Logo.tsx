import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  tone?: "light" | "dark";
};

export function Logo({ className, tone = "light" }: LogoProps) {
  const color = tone === "dark" ? "text-nero" : "text-calacatta";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="28"
        height="32"
        viewBox="0 0 28 32"
        fill="none"
        aria-hidden
        className={color}
      >
        <path
          d="M2 30V4.5L14 22.5L26 4.5V30"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="miter"
        />
        <path
          d="M8 30V14L14 24L20 14V30"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.45"
        />
      </svg>
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display text-[20px] leading-none tracking-[0.12em] md:text-[24px]",
            color,
          )}
        >
          MORANDIN
        </span>
        <span
          className={cn(
            "mt-1 text-[8px] tracking-[0.22em] md:text-[9px]",
            tone === "dark" ? "text-graphite" : "text-calacatta/70",
          )}
        >
          PEDRAS & MARMORARIA
        </span>
      </span>
    </span>
  );
}
