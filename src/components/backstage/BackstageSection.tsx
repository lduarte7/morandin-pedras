"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FilterChip } from "@/components/ui/FilterChip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { backstageFilters, backstageItems } from "@/data/content";

export function BackstageSection() {
  const [filter, setFilter] =
    useState<(typeof backstageFilters)[number]>("Obras");

  const visible = useMemo(
    () => backstageItems.filter((item) => item.filter === filter),
    [filter],
  );

  const list = visible.length > 0 ? visible : [...backstageItems];

  return (
    <section id="conteudo" className="bg-nero py-20 md:py-28">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            title={"Bastidores\nMorandin"}
            description="Do bloco à instalação. Acompanhe projetos, processos e o cuidado em cada detalhe."
          />
        </Reveal>

        <div className="mt-10 flex gap-3 overflow-x-auto scrollbar-none pb-2">
          {backstageFilters.map((item) => (
            <FilterChip
              key={item}
              label={item}
              active={filter === item}
              onClick={() => setFilter(item)}
            />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3">
          {list.map((item) => (
            <article
              key={item.id}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2px] border border-[var(--border-dark)]"
            >
              <Image
                src={item.image}
                alt="Bastidores Morandin"
                fill
                sizes="(max-width:768px) 50vw, 33vw"
                className="object-cover stone-filter transition-transform duration-[850ms] ease-[var(--ease-editorial)] group-hover:scale-[1.025]"
              />
              {item.video ? (
                <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-calacatta/50 bg-[rgba(15,14,12,0.45)] text-calacatta">
                  ▶
                </span>
              ) : null}
            </article>
          ))}
        </div>

        <Button
          href="https://instagram.com/marmoraria_morandin"
          external
          className="mt-10"
        >
          <span>Acompanhar no Instagram</span>
          <span aria-hidden>→</span>
        </Button>
      </div>
    </section>
  );
}
