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
          className="object-cover object-[62%_center] stone-filter"
        />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(14,13,12,.92) 0%, rgba(14,13,12,.72) 27%, rgba(14,13,12,.28) 55%, rgba(14,13,12,.06) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,13,12,0.72)] via-transparent to-[rgba(14,13,12,0.35)] md:hidden" />

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="container-editorial relative flex flex-1 flex-col justify-end pb-28 pt-28 md:justify-center md:pb-24 md:pt-32">
          <div className="max-w-[720px] md:ml-[4%] md:max-w-[52%]">
            <p className="type-label text-calacatta/70">
              Marmoraria · Porto Alegre
            </p>
            <h1
              id="hero-title"
              className="type-hero mt-5 text-calacatta"
            >
              <span className="sr-only">
                Marmoraria em Porto Alegre para projetos sob medida.{" "}
              </span>
              Pedra que
              <br />
              transforma
              <br />
              o espaço.
            </h1>
            <div className="mt-6 h-px w-16 bg-bronze" aria-hidden />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-calacatta/80 md:text-[18px] md:leading-[1.5]">
              Mármores, granitos, quartzos e superfícies especiais transformados
              sob medida para projetos residenciais e comerciais em Porto
              Alegre.
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:max-w-none">
              <Button
                href={buildWhatsAppUrl()}
                external
                className="w-[82%] sm:w-auto"
              >
                <span>Solicitar orçamento</span>
                <span aria-hidden>→</span>
              </Button>
              <Button href="#projetos" variant="secondary" className="w-[82%] sm:w-auto">
                <span>Explorar projetos</span>
                <span aria-hidden>→</span>
              </Button>
            </div>
          </div>

          <HeroAnnotation className="pointer-events-none absolute right-0 top-[38%] hidden lg:block" />
        </div>

        <HeroProcessLine />
      </div>
    </section>
  );
}
