"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FilterChip } from "@/components/ui/FilterChip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  comparisonRows,
  materialFilters,
  materials,
} from "@/data/materials";

export function MaterialExplorer() {
  const [filter, setFilter] =
    useState<(typeof materialFilters)[number]>("Todos");

  const visible = useMemo(
    () =>
      filter === "Todos"
        ? materials
        : materials.filter((m) => m.filters.includes(filter)),
    [filter],
  );

  return (
    <section id="materiais" className="bg-nero py-16 md:py-24 lg:py-28">
      <div className="container-editorial">
        <Reveal>
          <p className="type-label text-calacatta/65 md:hidden">
            Materiais • Inspiração
          </p>
          <SectionHeading
            className="mt-4 md:mt-0"
            title={"Escolha a superfície\ndo seu projeto."}
            description="Explore diferentes possibilidades de mármores, granitos, quartzos e superfícies especiais."
          />
        </Reveal>

        <div className="mt-8 flex gap-3 overflow-x-auto scrollbar-none pb-2 md:mt-10">
          {materialFilters.map((item) => (
            <FilterChip
              key={item}
              label={item}
              active={filter === item}
              onClick={() => setFilter(item)}
            />
          ))}
        </div>

        {/* Mobile: full-bleed stacked cards */}
        <div className="mt-8 space-y-3 md:hidden">
          {visible.map((material) => (
            <article
              key={material.id}
              className="relative aspect-[16/9] overflow-hidden rounded-[4px]"
            >
              <Image
                src={material.image}
                alt={material.name}
                fill
                sizes="100vw"
                className="object-cover stone-filter"
              />
              <div className="img-overlay-bottom absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                <h3 className="font-display text-[28px] uppercase leading-none text-calacatta">
                  {material.name}
                </h3>
                <span className="text-calacatta" aria-hidden>
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop: 4 tall columns */}
        <div className="mt-10 hidden gap-4 md:grid md:grid-cols-4">
          {visible.map((material) => (
            <article
              key={material.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-[2px] border border-[var(--border-dark)]"
            >
              <Image
                src={material.image}
                alt={material.name}
                fill
                sizes="25vw"
                className="object-cover stone-filter transition-transform duration-[850ms] ease-[var(--ease-editorial)] group-hover:scale-[1.025]"
              />
              <div className="img-overlay-bottom absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-[32px] uppercase leading-none text-calacatta">
                  {material.name}
                </h3>
                <p className="mt-3 max-w-[220px] text-sm text-calacatta/75">
                  {material.description}
                </p>
                <span className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-dark-strong)] text-calacatta">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MaterialComparison() {
  return (
    <section className="border-t border-[var(--border-dark)] bg-nero py-20 md:py-28">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            title={"Qual superfície faz\nsentido para o seu projeto?"}
          />
        </Reveal>

        <div className="mt-12 overflow-x-auto scrollbar-none">
          <div className="min-w-[760px]">
            <div className="grid grid-cols-[160px_repeat(4,1fr)] gap-4 border-b border-[var(--border-dark)] pb-6 md:grid-cols-[180px_repeat(4,1fr)]">
              <div />
              {materials.map((material) => (
                <div key={material.id}>
                  <div className="relative mb-4 aspect-square overflow-hidden rounded-[2px]">
                    <Image
                      src={material.image}
                      alt=""
                      fill
                      sizes="120px"
                      className="object-cover stone-filter"
                    />
                  </div>
                  <p className="font-display text-xl uppercase text-calacatta">
                    {material.name.replace(/s$/, "")}
                  </p>
                </div>
              ))}
            </div>

            {comparisonRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[160px_repeat(4,1fr)] gap-4 border-b border-[var(--border-dark)] py-6 md:grid-cols-[180px_repeat(4,1fr)]"
              >
                <p className="type-label text-calacatta/55">{row.label}</p>
                {row.values.map((value) => (
                  <p
                    key={value}
                    className="text-sm leading-relaxed text-calacatta/80"
                  >
                    {value}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
