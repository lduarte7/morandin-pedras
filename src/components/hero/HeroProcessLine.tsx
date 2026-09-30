import { VeinLine } from "@/components/process/VeinLine";

const STEPS = ["Medição", "Corte", "Acabamento", "Instalação"] as const;

export function HeroProcessLine() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 border-t border-[var(--border-dark)] bg-gradient-to-t from-[rgba(14,13,12,0.85)] to-transparent">
      <div className="container-editorial flex flex-col gap-4 py-5 md:flex-row md:items-end md:justify-between md:py-6">
        <div className="flex items-end gap-4">
          <VeinLine className="hidden w-40 md:block" animate={false} />
          <p className="type-label text-calacatta/80">Da pedra ao ambiente.</p>
        </div>
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] tracking-[0.14em] text-calacatta/75 uppercase md:gap-x-4">
          {STEPS.map((step, index) => (
            <li key={step} className="flex items-center gap-3 md:gap-4">
              <span>{step}</span>
              {index < STEPS.length - 1 ? (
                <span className="text-bronze" aria-hidden>
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
