import { cn } from "@/lib/cn";

export function HeroAnnotation({ className }: { className?: string }) {
  return (
    <div className={cn(className)} aria-hidden>
      <div className="flex items-start gap-3">
        <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-calacatta" />
        <div>
          <div className="mb-2 h-px w-16 bg-calacatta/70" />
          <p className="type-label max-w-[110px] text-calacatta/85">
            Detalhes que fazem projetos reais
          </p>
        </div>
      </div>
    </div>
  );
}
