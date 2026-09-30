import { cn } from "@/lib/cn";

export function HeroAnnotation({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)} aria-hidden>
      <div className="flex items-start">
        <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-calacatta" />
        <div className="ml-0 flex flex-col items-start">
          <div className="mb-3 h-px w-14 bg-calacatta/80" />
          <p className="type-label max-w-[100px] text-calacatta/85 [writing-mode:vertical-rl] rotate-180">
            Detalhes que fazem projetos reais
          </p>
        </div>
      </div>
    </div>
  );
}
