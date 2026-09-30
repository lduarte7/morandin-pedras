import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { applications } from "@/data/applications";

export function Applications() {
  return (
    <section id="ambientes" className="bg-nero py-20 md:py-28">
      <div className="container-editorial">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading title={"Pensado para viver\no ambiente."} />
            <Button href="#projetos" variant="ghost" className="self-start md:self-auto">
              <span>Explorar projetos</span>
              <span aria-hidden>→</span>
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3">
          {applications.map((app, index) => (
            <article
              key={app.id}
              className={`group relative aspect-[4/3] overflow-hidden rounded-[2px] border border-[var(--border-dark)] ${
                index === 0 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Image
                src={app.image}
                alt={app.name}
                fill
                sizes="(max-width:768px) 50vw, 33vw"
                className="object-cover stone-filter transition-transform duration-[850ms] ease-[var(--ease-editorial)] group-hover:scale-[1.025]"
              />
              <div className="img-overlay-bottom absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 md:p-5">
                <div>
                  <h3 className="font-display text-2xl text-calacatta md:text-[28px]">
                    {app.name}
                  </h3>
                  <p className="mt-1 hidden text-sm text-calacatta/70 md:block">
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
