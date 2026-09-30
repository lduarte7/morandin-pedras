import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IMG } from "@/data/images";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCta() {
  return (
    <section
      id="cta-final"
      className="relative min-h-[90svh] overflow-hidden bg-nero md:min-h-[80svh]"
    >
      <Image
        src={IMG.finalCta}
        alt="Ambiente com ilha em pedra"
        fill
        sizes="100vw"
        className="object-cover stone-filter"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,13,12,0.92)] via-[rgba(14,13,12,0.45)] to-[rgba(14,13,12,0.25)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(14,13,12,0.75)] to-transparent" />

      <div className="container-editorial relative z-10 flex min-h-[90svh] flex-col justify-end py-16 md:min-h-[80svh] md:justify-center md:py-24">
        <Reveal>
          <p className="type-label text-calacatta/70">
            Seu projeto pode começar aqui
          </p>
          <h2 className="type-display mt-5 max-w-2xl text-calacatta">
            Vamos dar
            <br />
            forma ao
            <br />
            seu projeto.
          </h2>
          <p className="mt-6 max-w-md text-base text-calacatta/75 md:text-[18px]">
            Envie suas medidas, referências ou projeto e converse com a Morandin
            sobre materiais e execução.
          </p>
          <div className="mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row">
            <Button href={buildWhatsAppUrl()} external fullWidth className="sm:w-auto">
              <span>Solicitar orçamento</span>
              <span aria-hidden>→</span>
            </Button>
            <Button
              href={buildWhatsAppUrl({ projectStatus: "Tenho projeto" })}
              external
              variant="secondary"
              fullWidth
              className="sm:w-auto"
            >
              <span>Enviar projeto</span>
              <span aria-hidden>→</span>
            </Button>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-3 border-t border-[var(--border-dark)] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="type-label text-calacatta/70">Da pedra ao ambiente.</p>
          <p className="text-[11px] tracking-[0.16em] text-calacatta/60 uppercase">
            Ideia — Projeto — Execução — Seu espaço
          </p>
        </div>
      </div>
    </section>
  );
}
