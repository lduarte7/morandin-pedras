import { IMG } from "./images";

export type MaterialCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
  filters: string[];
};

export const materialFilters = [
  "Todos",
  "Claros",
  "Escuros",
  "Veios marcantes",
  "Neutros",
  "Quentes",
] as const;

export const materials: MaterialCategory[] = [
  {
    id: "marmores",
    name: "Mármores",
    description: "Sofisticação visual e padrões naturais.",
    image: IMG.marbleLight,
    filters: ["Claros", "Veios marcantes", "Quentes"],
  },
  {
    id: "granitos",
    name: "Granitos",
    description: "Resistência e caráter para o dia a dia.",
    image: IMG.graniteDark,
    filters: ["Escuros", "Neutros"],
  },
  {
    id: "quartzos",
    name: "Quartzos",
    description: "Superfícies uniformes e práticas.",
    image: IMG.quartzWhite,
    filters: ["Claros", "Neutros"],
  },
  {
    id: "sinterizados",
    name: "Sinterizados",
    description: "Tecnologia e precisão de desenho.",
    image: IMG.sintered,
    filters: ["Escuros", "Veios marcantes", "Neutros"],
  },
];

export const comparisonRows = [
  {
    label: "Caráter estético",
    values: [
      "Veios expressivos",
      "Grãos e movimento",
      "Padrão controlado",
      "Desenho técnico",
    ],
  },
  {
    label: "Origem / tipo",
    values: [
      "Rocha natural",
      "Rocha natural",
      "Superfície composta",
      "Superfície sinterizada",
    ],
  },
  {
    label: "Aplicações comuns",
    values: [
      "Bancadas e revestimentos",
      "Áreas de alto uso",
      "Cozinhas e banheiros",
      "Grandes formatos",
    ],
  },
  {
    label: "Manutenção",
    values: [
      "Cuidados específicos",
      "Rotina prática",
      "Limpeza simples",
      "Conforme especificação",
    ],
  },
] as const;
