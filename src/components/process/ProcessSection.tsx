import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VeinLine } from "@/components/process/VeinLine";
import { processSteps } from "@/data/content";

export function ProcessSection() {
  return (
    <section id="processo" className="bg-calacatta py-20 text-nero md:py-28">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Nosso processo"
            title={"Da medição\nà instalação."}
            description="Do primeiro atendimento à instalação, cada etapa é conduzida com atenção às medidas, ao material, ao acabamento e ao resultado final."
          />
        </Reveal>

        <VeinLine className="mt-12 w-full max-w-3xl text-nero" />

        {/* Desktop */}
        <div className="mt-14 hidden lg:block">
          <div className="relative mb-10">
            <div className="absolute left-0 right-0 top-4 h-px bg-[rgba(21,21,21,0.18)]" />
            <div className="grid grid-cols-6 gap-4">
              {processSteps.map((step) => (
                <div key={step.id} className="relative pt-0">
                  <div className="relative z-10 mb-6 h-3 w-3 rounded-full bg-bronze" />
                  <p className="type-label text-bronze">{step.id}</p>
                  <h3 className="mt-3 font-display text-[28px] leading-none">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-6 gap-3">
            {processSteps.map((step) => (
              <div
                key={`img-${step.id}`}
                className="relative aspect-[3/4] overflow-hidden rounded-[2px]"
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="16vw"
                  className="object-cover stone-filter"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <ol className="relative mt-12 space-y-10 lg:hidden">
          <div className="absolute bottom-4 left-[15px] top-4 w-px bg-bronze/50" />
          {processSteps.map((step) => (
            <li key={step.id} className="grid grid-cols-[32px_1fr] gap-4">
              <div className="relative z-10 mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-bronze bg-calacatta text-[11px] text-bronze">
                {step.id}
              </div>
              <div>
                <h3 className="font-display text-[28px] leading-none">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">
                  {step.description}
                </p>
                <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-[2px]">
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    sizes="80vw"
                    className="object-cover stone-filter"
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
