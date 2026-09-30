import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
  fullWidth?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
  external,
  fullWidth,
}: ButtonProps) {
  const styles = cn(
    "focus-ring inline-flex min-h-[56px] items-center justify-between gap-8 px-7 text-[13px] font-medium tracking-[0.04em] transition-[background,border-color,color] duration-500 ease-[var(--ease-editorial)] md:min-h-[62px] md:px-8",
    variant === "primary" &&
      "border border-transparent bg-bronze text-calacatta hover:bg-[#A08266]",
    variant === "secondary" &&
      "border border-[rgba(243,240,233,0.70)] bg-transparent text-calacatta hover:bg-[rgba(243,240,233,0.06)]",
    variant === "ghost" &&
      "border border-[var(--border-dark)] bg-transparent text-calacatta hover:border-[var(--border-dark-strong)]",
    fullWidth && "w-full",
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
