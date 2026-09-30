"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FilterChip } from "@/components/ui/FilterChip";
import { Reveal } from "@/components/ui/Reveal";
import { projectFilters, projects } from "@/data/projects";
import { cn } from "@/lib/cn";

export function ProjectShowroom() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("Todos");

  const visible = useMemo(
    () =>
      filter === "Todos"
        ? projects
        : projects.filter((p) => p.filter === filter),
    [filter],
  );

  return (
    <section id="projetos" className="bg-nero py-20 md:py-28">
      <div className="container-editorial">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="type-display max-w-3xl text-calacatta">
              Projetos reais.
              <br />
              Detalhes que falam por si.
            </h2>
            <p className="type-label max-w-[160px] border-l border-bronze pl-4 text-calacatta/70">
              Ambientes únicos feitos em pedra
            </p>
          </div>
        </Reveal>

        <div className="mt-10 flex gap-3 overflow-x-auto scrollbar-none pb-2">
          {projectFilters.map((item) => (
            <FilterChip
              key={item}
              label={item}
              active={filter === item}
              onClick={() => setFilter(item)}
            />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
          {visible.map((project, index) => {
            const desktopSpan =
              project.size === "main"
                ? "col-span-2 lg:col-span-7 lg:row-span-2 min-h-[240px] lg:min-h-[560px]"
                : project.size === "wide"
                  ? "col-span-2 lg:col-span-6 aspect-[16/7]"
                  : "col-span-1 lg:col-span-5 aspect-[4/3]";

            return (
              <article
                key={project.id}
                className={cn(
                  "group relative overflow-hidden rounded-[2px] border border-[var(--border-dark)]",
                  desktopSpan,
                  index === 0 && "col-span-2",
                )}
              >
                <Image
                  src={project.cover}
                  alt={`Projeto ${project.number} — ${project.category}`}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover stone-filter transition-transform duration-[700ms] ease-[var(--ease-editorial)] group-hover:scale-[1.035]"
                />
                <div className="img-overlay-bottom absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:-translate-y-1 md:p-5">
                  <div>
                    <p className="text-[10px] tracking-[0.16em] text-calacatta/70">
                      Projeto {project.number} / {project.category}
                    </p>
                    <p className="mt-1 font-display text-xl text-calacatta md:text-2xl">
                      {project.category}
                    </p>
                  </div>
                  <span className="shrink-0 text-[11px] tracking-[0.12em] text-calacatta/85">
                    Ver projeto →
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
