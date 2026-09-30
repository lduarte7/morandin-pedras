"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import {
  quoteAmbientes,
  quoteAplicacoes,
  quoteMaterialOptions,
  quoteProjectOptions,
} from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

type StepKey = "ambiente" | "aplicacao" | "material" | "projeto";

export function QuoteFlow() {
  const [ambiente, setAmbiente] = useState<string>("Cozinha");
  const [aplicacao, setAplicacao] = useState<string>("Bancada");
  const [material, setMaterial] = useState<string>("Ainda não");
  const [projeto, setProjeto] = useState<string>("Ainda não");

  const whatsapp = buildWhatsAppUrl({
    ambiente,
    aplicacao,
    materialStatus: material,
    projectStatus: projeto,
  });

  return (
    <section id="orcamento" className="bg-nero py-20 md:py-28">
      <div className="container-editorial">
        <Reveal>
          <p className="type-label text-calacatta/55">
              Orçamento personalizado
            </p>
          <h2 className="type-display mt-4 max-w-3xl text-calacatta">
            Monte seu
            <br />
            pedido de orçamento.
          </h2>
          <p className="mt-6 max-w-xl text-base text-calacatta/75 md:text-[18px]">
            Nos conte sobre o seu projeto para receber um atendimento
            especializado.
          </p>
        </Reveal>

        {/* Desktop step cards */}
        <div className="mt-14 hidden gap-3 lg:grid lg:grid-cols-5">
          {(
            [
              {
                key: "ambiente" as StepKey,
                n: "01",
                title: "Ambiente",
                body: "Qual é o ambiente do seu projeto?",
              },
              {
                key: "aplicacao" as StepKey,
                n: "02",
                title: "Aplicação",
                body: "Qual será a aplicação da pedra?",
              },
              {
                key: "material" as StepKey,
                n: "03",
                title: "Material",
                body: "Já tem um material em mente?",
              },
              {
                key: "projeto" as StepKey,
                n: "04",
                title: "Medidas / Projeto",
                body: "Informe as medidas ou envie seu projeto.",
              },
              {
                key: "whatsapp" as const,
                n: "05",
                title: "WhatsApp",
                body: "Nossa equipe recebe suas informações.",
              },
            ] as const
          ).map((card, index) => (
            <div
              key={card.n}
              className="relative flex min-h-[220px] flex-col justify-between rounded-[2px] border border-[var(--border-dark)] p-5"
            >
              {index < 4 ? (
                <span
                  className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-bronze xl:block"
                  aria-hidden
                >
                  →
                </span>
              ) : null}
              <div>
                <p className="type-label text-bronze">{card.n}</p>
                <h3 className="mt-4 font-display text-2xl text-calacatta">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-calacatta/65">{card.body}</p>
              </div>
              {card.key === "whatsapp" ? (
                <Button href={whatsapp} external className="mt-6 min-h-[48px]">
                  <span>Continuar</span>
                  <span aria-hidden>→</span>
                </Button>
              ) : (
                <p className="mt-6 text-xs tracking-[0.12em] text-calacatta/50">
                  {card.key === "ambiente"
                    ? ambiente
                    : card.key === "aplicacao"
                      ? aplicacao
                      : card.key === "material"
                        ? material
                        : projeto}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-10 lg:mt-14">
          <Step
            number="01"
            title="Qual ambiente?"
            options={quoteAmbientes}
            value={ambiente}
            onChange={setAmbiente}
          />
          <Step
            number="02"
            title="O que você precisa?"
            options={quoteAplicacoes}
            value={aplicacao}
            onChange={setAplicacao}
          />
          <Step
            number="03"
            title="Já escolheu o material?"
            options={quoteMaterialOptions}
            value={material}
            onChange={setMaterial}
          />
          <Step
            number="04"
            title="Você possui medidas ou projeto?"
            options={quoteProjectOptions}
            value={projeto}
            onChange={setProjeto}
          />

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bronze text-[11px] text-calacatta">
                05
              </span>
              <h3 className="font-display text-2xl text-calacatta">Uploads</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["Foto", "PDF", "Referência"].map((label) => (
                <div
                  key={label}
                  className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-[2px] border border-dashed border-[var(--border-dark-strong)] text-calacatta/60"
                >
                  <span className="text-xl" aria-hidden>
                    {label === "Foto" ? "▣" : label === "PDF" ? "▤" : "↗"}
                  </span>
                  <span className="text-[11px] tracking-[0.14em] uppercase">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-calacatta/45">
              Aceitos: JPG, PNG, PDF. Envio completo via WhatsApp.
            </p>
          </div>

          <Button href={whatsapp} external fullWidth className="max-w-xl">
            <span>Continuar no WhatsApp</span>
            <span aria-hidden>→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  options,
  value,
  onChange,
}: {
  number: string;
  title: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bronze text-[11px] text-calacatta">
          {number}
        </span>
        <h3 className="font-display text-2xl text-calacatta">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={cn(
              "focus-ring min-h-11 rounded-[2px] px-4 text-[13px] transition-colors duration-500 ease-[var(--ease-editorial)]",
              value === option
                ? "bg-bronze text-calacatta"
                : "border border-[var(--border-dark)] bg-transparent text-calacatta/85 hover:border-[var(--border-dark-strong)]",
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
