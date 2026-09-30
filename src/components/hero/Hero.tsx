"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { HeroAnnotation } from "./HeroAnnotation";
import { HeroProcessLine } from "./HeroProcessLine";
import { IMG } from "@/data/images";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.55], [1.08, 1]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-nero"
      aria-labelledby="hero-title"
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { scale }}
      >
        <Image
          src={IMG.heroKitchen}
          alt="Ilha de pedra em cozinha contemporânea"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-[58%_center] stone-filter md:object-[62%_center]"
        />
      </motion.div>

      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(14,13,12,.92) 0%, rgba(14,13,12,.72) 27%, rgba(14,13,12,.28) 55%, rgba(14,13,12,.06) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,13,12,0.88)] via-[rgba(14,13,12,0.35)] to-[rgba(14,13,12,0.45)] md:hidden" />

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="container-editorial relative flex flex-1 flex-col justify-end pb-28 pt-28 md:justify-center md:pb-24 md:pt-32">
          <div className="max-w-[720px] md:ml-[2%] md:max-w-[54%] lg:ml-[4%]">
            <p className="type-label text-calacatta/75">
              <span className="md:hidden">Marmoraria • Porto Alegre</span>
              <span className="hidden md:inline">
                Marmoraria em Porto Alegre
              </span>
            </p>
            <h1 id="hero-title" className="type-hero mt-5 text-calacatta">
              <span className="sr-only">
                Marmoraria em Porto Alegre para projetos sob medida.{" "}
              </span>
              Pedra que
              <br />
              transforma
              <br />
              o espaço.
            </h1>
            <div className="mt-5 h-px w-14 bg-bronze md:mt-6 md:w-16" aria-hidden />
            <p className="mt-5 max-w-[280px] text-[15px] leading-relaxed text-calacatta/80 md:mt-6 md:max-w-md md:text-[18px] md:leading-[1.5]">
              <span className="md:hidden">
                Projetos sob medida em mármore, granito, quartzo e superfícies
                especiais.
              </span>
              <span className="hidden md:inline">
                Mármores, granitos, quartzos e superfícies especiais
                transformados sob medida para projetos residenciais e comerciais
                em Porto Alegre.
              </span>
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:max-w-none">
              <Button
                href={buildWhatsAppUrl()}
                external
                className="w-[78%] sm:w-auto"
              >
                <span>Solicitar orçamento</span>
                <span aria-hidden>→</span>
              </Button>
              <Button
                href="#projetos"
                variant="secondary"
                className="hidden w-auto sm:inline-flex"
              >
                <span>Explorar projetos</span>
                <span aria-hidden>→</span>
              </Button>
            </div>
          </div>

          <HeroAnnotation className="pointer-events-none absolute right-[2%] top-[48%] hidden lg:block" />
        </div>

        <HeroProcessLine />
      </div>
    </section>
  );
}
