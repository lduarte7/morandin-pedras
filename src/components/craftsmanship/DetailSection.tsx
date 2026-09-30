import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { craftDetails } from "@/data/applications";
import { IMG } from "@/data/images";

export function DetailSection() {
  return (
    <section className="bg-nero py-20 md:py-28">
      <div className="container-editorial">
        <Reveal>
          <p className="type-label text-calacatta/65">Nosso ofício</p>
          <h2 className="type-display mt-5 max-w-3xl text-calacatta">
            É no detalhe
            <br />
            que a pedra
            <br />
            muda de nível.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-[var(--border-dark)] md:aspect-[16/10]">
              <Image
                src={IMG.detailMiter}
                alt="Detalhe de meia-esquadria em pedra"
                fill
                sizes="(max-width:1024px) 100vw, 60vw"
                className="object-cover stone-filter"
              />
              <div className="absolute left-5 top-5">
                <p className="type-label text-calacatta">Meia-esquadria</p>
                <p className="mt-1 text-[11px] tracking-[0.12em] text-calacatta/60">
                  Detail / Edge
                </p>
              </div>
              <div className="absolute bottom-8 left-8 flex items-center gap-3">
                <div className="h-px w-16 bg-bronze" />
                <span className="font-display text-2xl text-bronze">45°</span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4">
            {[
              { label: "45°", sub: "Encontros precisos", image: IMG.detailEdge },
              {
                label: "Polished",
                sub: "Acabamento",
                image: IMG.detailPolish,
              },
              {
                label: "Detail / Edge",
                sub: "Precisão",
                image: IMG.detailFit,
              },
            ].map((item) => (
              <article
                key={item.label}
                className="relative aspect-square overflow-hidden rounded-[2px] border border-[var(--border-dark)] lg:aspect-[16/9]"
              >
                <Image
                  src={item.image}
                  alt={item.sub}
                  fill
                  sizes="200px"
                  className="object-cover stone-filter"
                />
                <div className="img-overlay-bottom absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="type-label text-calacatta">{item.label}</p>
                  <p className="mt-1 text-sm text-calacatta/75">{item.sub}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {craftDetails.map((detail) => (
            <article key={detail.id} className="group">
              <p className="type-label text-calacatta/80">{detail.name}</p>
              <p className="mt-1 text-[11px] tracking-[0.08em] text-graphite">
                {detail.sub}
              </p>
              <div className="relative mt-3 aspect-[4/3] overflow-hidden rounded-[2px] border border-[var(--border-dark)]">
                <Image
                  src={detail.image}
                  alt={detail.name}
                  fill
                  sizes="180px"
                  className="object-cover stone-filter transition-transform duration-[850ms] ease-[var(--ease-editorial)] group-hover:scale-[1.025]"
                />
              </div>
            </article>
          ))}
        </div>

        <Button href="#processo" className="mt-10">
          <span>Conheça nosso processo</span>
          <span aria-hidden>→</span>
        </Button>
      </div>
    </section>
  );
}
