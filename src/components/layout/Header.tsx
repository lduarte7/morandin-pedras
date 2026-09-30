"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "./MobileMenu";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "#projetos", label: "Projetos" },
  { href: "#materiais", label: "Materiais" },
  { href: "#ambientes", label: "Ambientes" },
  { href: "#processo", label: "Processo" },
  { href: "#profissionais", label: "Profissionais" },
  { href: "#sobre", label: "Sobre" },
  { href: "#conteudo", label: "Conteúdo" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const process = document.getElementById("processo");
    if (!process) return;

    const observer = new IntersectionObserver(
      ([entry]) => setLight(Boolean(entry?.isIntersecting)),
      { threshold: 0.2 },
    );
    observer.observe(process);
    return () => observer.disconnect();
  }, []);

  const darkChrome = light && (scrolled || open);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background,border-color,color,backdrop-filter] duration-500 ease-[var(--ease-editorial)]",
          scrolled || open
            ? darkChrome
              ? "border-b border-[rgba(21,21,21,0.12)] bg-[rgba(243,240,233,0.94)] text-nero backdrop-blur-[18px]"
              : "border-b border-[rgba(243,240,233,0.12)] bg-[rgba(21,21,21,0.88)] text-calacatta backdrop-blur-[18px]"
            : "border-b border-transparent bg-transparent text-calacatta",
        )}
      >
        <div className="container-editorial flex h-[76px] items-center justify-between md:h-24">
          <Link href="/" className="focus-ring">
            <Logo tone={darkChrome ? "dark" : "light"} />
          </Link>

          <nav
            className="hidden items-center gap-7 xl:flex"
            aria-label="Principal"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring text-[11px] uppercase tracking-[0.14em] transition-opacity hover:opacity-70",
                  darkChrome ? "text-nero" : "text-calacatta/90",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href={buildWhatsAppUrl()}
              external
              className="min-h-[48px] gap-6 px-6 text-[12px]"
            >
              <span>Solicitar orçamento</span>
              <span aria-hidden>→</span>
            </Button>
          </div>

          <button
            type="button"
            className="focus-ring flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-6 flex-col gap-[5px]">
              <span
                className={cn(
                  "h-px w-full transition-transform duration-500",
                  darkChrome ? "bg-nero" : "bg-calacatta",
                  open && "translate-y-[6px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-full transition-opacity duration-500",
                  darkChrome ? "bg-nero" : "bg-calacatta",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-px w-full transition-transform duration-500",
                  darkChrome ? "bg-nero" : "bg-calacatta",
                  open && "-translate-y-[6px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} items={NAV} />
    </>
  );
}
