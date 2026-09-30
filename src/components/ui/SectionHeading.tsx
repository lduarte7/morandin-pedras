import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "type-label mb-5",
            tone === "dark" ? "text-calacatta/70" : "text-graphite",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "type-display whitespace-pre-line",
          tone === "dark" ? "text-calacatta" : "text-nero",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-6 max-w-xl text-base leading-relaxed md:text-[20px] md:leading-[1.55]",
            tone === "dark" ? "text-calacatta/75" : "text-graphite",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
