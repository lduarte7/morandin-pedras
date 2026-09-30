import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IMG } from "@/data/images";

export function OpeningStatement() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-nero py-20 md:py-28"
    >
      <div className="absolute inset-0 opacity-40">
        <Image
          src={IMG.openingMacro}
          alt=""
          fill
          sizes="100vw"
          className="object-cover stone-filter"
        />
        <div className="absolute inset-0 bg-[var(--overlay-heavy)]" />
      </div>

      <div className="container-editorial relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <Reveal>
          <p className="type-label text-calacatta/65">
            Morandin Pedras & Marmoraria
          </p>
          <h2 className="type-display-xl mt-6 text-calacatta">
            Cada pedra
            <br />
            tem um desenho.
            <br />
            Cada projeto,
            <br />
            uma intenção.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="max-w-md text-base leading-relaxed text-calacatta/75 md:text-[18px]">
            A Morandin transforma rochas naturais e superfícies especiais em
            peças sob medida para cozinhas, banheiros, áreas gourmet e projetos
            arquitetônicos.
          </p>
          <Button href="#projetos" className="mt-8">
            <span>Conheça nossos projetos</span>
            <span aria-hidden>→</span>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
