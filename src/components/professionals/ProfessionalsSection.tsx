import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { professionalFeatures } from "@/data/content";
import { IMG } from "@/data/images";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function ProfessionalsSection() {
  return (
    <section id="profissionais" className="bg-nero py-20 md:py-28">
      <div className="container-editorial grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-[var(--border-dark)] md:aspect-[5/6]">
            <Image
              src={IMG.professionals}
              alt="Profissional trabalhando sobre desenhos técnicos e amostras de pedra"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover stone-filter"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="type-label text-calacatta/65">
            Arquitetos · Designers · Engenheiros
          </p>
          <h2 className="type-display mt-5 text-calacatta">
            Seu projeto
            <br />
            merece uma
            <br />
            execução à altura.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-calacatta/75 md:text-[18px]">
            A Morandin atende profissionais que precisam transformar
            especificações e desenhos em peças sob medida, acompanhando o
            projeto da conferência de medidas à instalação.
          </p>

          <ul className="mt-10">
            {professionalFeatures.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 border-b border-[var(--border-dark)] py-4 text-sm tracking-[0.04em] text-calacatta/85"
              >
                <span
                  className="inline-block h-3 w-3 border border-bronze"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={buildWhatsAppUrl({ projectStatus: "Tenho projeto" })} external>
              <span>Enviar um projeto</span>
              <span aria-hidden>→</span>
            </Button>
            <Button href={buildWhatsAppUrl()} external variant="secondary">
              <span>Falar com a Morandin</span>
              <span aria-hidden>→</span>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
