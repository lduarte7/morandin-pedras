"use client";

import { useEffect, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("section[aria-labelledby='hero-title']");
    const quote = document.getElementById("orcamento");
    const final = document.getElementById("cta-final");

    const update = () => {
      const y = window.scrollY;
      const heroBottom =
        (hero as HTMLElement | null)?.offsetHeight ?? window.innerHeight;
      const hideNearQuote = isNear(quote);
      const hideNearFinal = isNear(final);
      setVisible(y > heroBottom * 0.85 && !hideNearQuote && !hideNearFinal);
    };

    const isNear = (el: HTMLElement | null) => {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "focus-ring fixed bottom-3 left-3 right-3 z-40 flex h-14 items-center justify-between rounded-[2px] bg-bronze px-5 text-[13px] tracking-[0.06em] text-calacatta shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-[opacity,transform] duration-500 ease-[var(--ease-editorial)] md:hidden",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <span>Solicitar orçamento</span>
      <span aria-hidden>→</span>
    </a>
  );
}
