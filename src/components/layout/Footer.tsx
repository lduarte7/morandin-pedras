import { VeinLine } from "@/components/process/VeinLine";

const COLUMNS = [
  {
    title: "Projetos",
    links: ["Projetos residenciais", "Projetos comerciais"],
  },
  {
    title: "Materiais",
    links: ["Mármores", "Granitos", "Quartzos", "Superfícies especiais"],
  },
  {
    title: "Morandin",
    links: ["Sobre nós", "Nosso processo", "Ambientes"],
  },
  {
    title: "Profissionais",
    links: ["Arquitetos", "Designers", "Engenheiros"],
  },
  {
    title: "Conteúdo",
    links: ["Artigos", "Inspirações", "Materiais", "Tendências"],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-dark)] bg-nero pb-16 pt-16 md:pt-24">
      <div className="container-editorial">
        <VeinLine className="mb-12 max-w-md opacity-70" />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-display text-[28px] tracking-[0.08em]">
              MORANDIN
            </p>
            <p className="mt-1 type-label text-calacatta/55">
              Pedras & Marmoraria
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-calacatta/65">
              Técnica e excelência em pedras naturais e superfícies especiais
              para projetos em Porto Alegre.
            </p>
            <a
              href="https://instagram.com/marmoraria_morandin"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-8 inline-flex items-center gap-3 text-[12px] tracking-[0.12em] text-calacatta/80 hover:text-calacatta"
            >
              <span aria-hidden>◎</span>
              @marmoraria_morandin
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="type-label text-bronze">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <span className="text-sm text-calacatta/70">{link}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[var(--border-dark)] pt-8 text-[11px] tracking-[0.12em] text-calacatta/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Morandin Pedras & Marmoraria</p>
          <p>DA PEDRA AO AMBIENTE.</p>
        </div>
      </div>
    </footer>
  );
}
