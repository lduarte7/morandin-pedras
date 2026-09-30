import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { applications } from "@/data/applications";

export function Applications() {
  return (
    <section id="ambientes" className="bg-nero py-16 md:py-24 lg:py-28">
      <div className="container-editorial">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="type-label mb-4 text-calacatta/65 md:hidden">
                Aplicações • Ambientes
              </p>
              <SectionHeading title={"Pensado para viver\no ambiente."} />
            </div>
            <Button
              href="#projetos"
              variant="ghost"
              className="hidden self-start md:inline-flex md:self-auto"
            >
              <span>Explorar projetos</span>
              <span aria-hidden>→</span>
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:gap-4 lg:grid-cols-3">
          {applications.map((app) => (
            <article
              key={app.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-[4px] md:aspect-[4/3] md:rounded-[2px]"
            >
              <Image
                src={app.image}
                alt={app.name}
                fill
                sizes="(max-width:768px) 50vw, 33vw"
                className="object-cover stone-filter transition-transform duration-[850ms] ease-[var(--ease-editorial)] group-hover:scale-[1.025]"
              />
              <div className="img-overlay-bottom absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3 md:p-5">
                <div>
                  <h3 className="font-display text-xl uppercase leading-none text-calacatta md:text-[28px]">
                    {app.name}
                  </h3>
                  <p className="mt-2 hidden text-sm text-calacatta/70 md:block">
                    {app.description}
                  </p>
                </div>
                <span className="text-calacatta" aria-hidden>
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
