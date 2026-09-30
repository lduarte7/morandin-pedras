"use client";

import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  items: readonly { href: string; label: string }[];
};

export function MobileMenu({ open, onClose, items }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-nero transition-[opacity,visibility] duration-500 ease-[var(--ease-editorial)] lg:hidden",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
      aria-hidden={!open}
    >
      <div className="flex h-full flex-col px-5 pb-10 pt-28">
        <nav className="flex flex-1 flex-col gap-1" aria-label="Mobile">
          {items.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="focus-ring border-b border-[var(--border-dark)] py-5 font-display text-[34px] leading-none tracking-[-0.02em] text-calacatta"
            >
              <span className="mr-4 text-[12px] tracking-[0.16em] text-bronze">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          href={buildWhatsAppUrl()}
          external
          fullWidth
          className="mt-8"
          onClick={onClose}
        >
          <span>Solicitar orçamento</span>
          <span aria-hidden>→</span>
        </Button>
      </div>
    </div>
  );
}
