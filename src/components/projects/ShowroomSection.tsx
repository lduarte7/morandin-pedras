"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FilterChip } from "@/components/ui/FilterChip";
import { Reveal } from "@/components/ui/Reveal";
import { VeinLine } from "@/components/process/VeinLine";
import { IMG } from "@/data/images";
import { projectFilters, projects } from "@/data/projects";
import { cn } from "@/lib/cn";

export function ShowroomSection() {
  const [filter, setFilter] =
    useState<(typeof projectFilters)[number]>("Todos");

  const visible = useMemo(
    () =>
      filter === "Todos"
        ? projects
        : projects.filter((p) => p.filter === filter),
    [filter],
  );

  return (
    <section className="bg-nero">
      {/* Mobile opening */}
      <div id="sobre" className="relative scroll-mt-24 overflow-hidden lg:hidden">
        <div className="relative aspect-[4/5]">
          <Image
            src={IMG.openingMacro}
            alt=""
            fill
            sizes="100vw"
            className="object-cover stone-filter"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nero via-nero/40 to-transparent" />
          <div
            className="absolute right-6 top-[38%] max-w-[120px] text-right"
            aria-hidden
          >
            <div className="mb-2 ml-auto h-px w-10 bg-calacatta/70" />
            <p className="type-label text-calacatta/85">
              Rochas naturais histórias reais
            </p>
          </div>
        </div>
        <div className="container-editorial relative z-10 -mt-24 pb-16">
          <p className="type-label text-calacatta/65">
            Morandin Pedras & Marmoraria
          </p>
          <h2 className="type-display-xl mt-5 text-calacatta">
            Cada pedra tem um desenho. Cada projeto, uma intenção.
          </h2>
          <div className="mt-5 h-px w-14 bg-bronze" aria-hidden />
          <p className="mt-5 max-w-md text-base leading-relaxed text-calacatta/75">
            A Morandin transforma rochas naturais e superfícies especiais em
            peças sob medida para cozinhas, banheiros, áreas gourmet e projetos
            arquitetônicos.
          </p>
          <Button href="#projetos" className="mt-8">
            <span>Conheça nossos projetos</span>
            <span aria-hidden>→</span>
          </Button>
          <VeinLine className="mt-12 w-48 opacity-80" animate={false} />
          <p className="mt-4 type-label text-calacatta/55">
            Escolha → Projeto → Produção → Resultado
          </p>
        </div>
      </div>

      <div className="lg:grid lg:min-h-[100svh] lg:grid-cols-[0.95fr_1.35fr]">
        {/* Desktop opening column */}
        <div className="relative hidden overflow-hidden border-r border-[var(--border-dark)] lg:block">
          <Image
            src={IMG.openingMacro}
            alt=""
            fill
            sizes="40vw"
            className="object-cover stone-filter"
          />
          <div className="absolute inset-0 bg-[rgba(14,13,12,0.72)]" />
          <div className="relative z-10 flex h-full flex-col justify-center px-10 py-24 xl:px-16">
            <p className="type-label text-calacatta/65">
              Morandin Pedras & Marmoraria
            </p>
            <h2 className="type-display mt-6 text-calacatta">
              Cada pedra tem um desenho. Cada projeto, uma intenção.
            </h2>
            <p className="mt-8 max-w-sm text-[17px] leading-relaxed text-calacatta/75">
              A Morandin transforma rochas naturais e superfícies especiais em
              peças sob medida para cozinhas, banheiros, áreas gourmet e
              projetos arquitetônicos.
            </p>
            <Button href="#projetos" className="mt-10 self-start">
              <span>Ver todos os projetos</span>
              <span aria-hidden>→</span>
            </Button>
          </div>
        </div>

        {/* Projects — single instance */}
        <div
          id="projetos"
          className="container-editorial scroll-mt-24 py-16 lg:flex lg:flex-col lg:px-8 lg:py-16 xl:px-12"
        >
          <Reveal>
            <div className="flex items-start justify-between gap-4 lg:items-end">
              <h2 className="type-display max-w-[70%] text-calacatta lg:max-w-xl">
                Projetos reais. Detalhes que falam por si.
              </h2>
              <p className="type-label max-w-[90px] border-l border-bronze pl-3 text-calacatta/65 lg:hidden">
                Ambientes únicos feitos em pedra
              </p>
              <div className="mb-3 hidden h-px flex-1 bg-[var(--border-dark)] lg:block" />
            </div>
          </Reveal>

          <div className="mt-8 flex gap-2 overflow-x-auto border-b border-[var(--border-dark)] pb-5 scrollbar-none lg:flex-wrap lg:overflow-visible">
            {projectFilters.map((item) => (
              <FilterChip
                key={item}
                label={item}
                active={filter === item}
                onClick={() => setFilter(item)}
              />
            ))}
          </div>

          <div className="mt-8 grid flex-1 grid-cols-2 gap-3 lg:grid-cols-6 lg:grid-rows-[minmax(200px,1.2fr)_minmax(140px,0.9fr)_minmax(120px,0.85fr)]">
            {visible.map((project, index) => (
              <article
                key={project.id}
                className={cn(
                  "group relative overflow-hidden rounded-[2px]",
                  index === 0 &&
                    "col-span-2 min-h-[210px] aspect-[16/10] lg:col-span-3 lg:row-span-2 lg:aspect-auto lg:min-h-0",
                  index === 1 && "aspect-[4/5] lg:col-span-3 lg:aspect-auto",
                  index === 2 && "aspect-[4/5] lg:col-span-2 lg:aspect-auto",
                  index === 3 && "col-span-2 aspect-[16/10] lg:col-span-1 lg:aspect-auto",
                  index === 4 && "col-span-2 aspect-[16/8] lg:col-span-3 lg:aspect-auto",
                  index === 5 && "col-span-2 aspect-[16/8] lg:col-span-3 lg:aspect-auto",
                  index > 5 && "col-span-1 aspect-[4/5] lg:col-span-2",
                )}
              >
                <Image
                  src={project.cover}
                  alt={`Projeto ${project.number} — ${project.category}`}
                  fill
                  sizes="(max-width:768px) 100vw, 35vw"
                  className="object-cover stone-filter transition-transform duration-[700ms] ease-[var(--ease-editorial)] group-hover:scale-[1.035]"
                />
                <div className="img-overlay-bottom absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-3 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:-translate-y-1 md:p-4">
                  <p className="text-[10px] tracking-[0.16em] text-calacatta/70">
                    Projeto {project.number}
                  </p>
                  <p className="mt-1 font-display text-lg uppercase leading-none text-calacatta md:text-2xl">
                    {project.category}
                  </p>
                  <p className="mt-2 text-[10px] tracking-[0.12em] text-calacatta/75">
                    Ver projeto →
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
