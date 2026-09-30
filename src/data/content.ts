import { IMG } from "./images";

export const processSteps = [
  {
    id: "01",
    title: "Entendimento",
    description: "Entendemos seu espaço, necessidades e estilo.",
    image: IMG.process01,
  },
  {
    id: "02",
    title: "Material",
    description: "Ajudamos na escolha da pedra ideal para o seu projeto.",
    image: IMG.process02,
  },
  {
    id: "03",
    title: "Medição",
    description: "Levantamento técnico no local com precisão.",
    image: IMG.process03,
  },
  {
    id: "04",
    title: "Beneficiamento",
    description: "Corte, usinagem e acabamento sob medida.",
    image: IMG.process04,
  },
  {
    id: "05",
    title: "Logística",
    description: "Transporte cuidadoso até a obra.",
    image: IMG.process05,
  },
  {
    id: "06",
    title: "Instalação",
    description: "Montagem precisa e entrega do ambiente.",
    image: IMG.process06,
  },
] as const;

export const professionalFeatures = [
  "Medição técnica",
  "Verificação de projeto",
  "Beneficiamento sob medida",
  "Acabamento",
  "Transporte",
  "Instalação",
] as const;

export const backstageFilters = [
  "Obras",
  "Instalação",
  "Materiais",
  "Antes & Depois",
  "Processo",
] as const;

export const backstageItems = [
  { id: "b1", filter: "Processo", image: IMG.backstage01, video: true },
  { id: "b2", filter: "Obras", image: IMG.backstage02, video: false },
  { id: "b3", filter: "Instalação", image: IMG.backstage03, video: false },
  { id: "b4", filter: "Materiais", image: IMG.backstage04, video: true },
  { id: "b5", filter: "Obras", image: IMG.backstage05, video: false },
  { id: "b6", filter: "Processo", image: IMG.backstage06, video: true },
] as const;

export const quoteAmbientes = [
  "Cozinha",
  "Banheiro",
  "Área Gourmet",
  "Lareira",
  "Escada",
  "Comercial",
  "Outro",
] as const;

export const quoteAplicacoes = [
  "Bancada",
  "Ilha",
  "Cuba",
  "Revestimento",
  "Outra aplicação",
] as const;

export const quoteMaterialOptions = [
  "Sim",
  "Ainda não",
  "Quero orientação",
] as const;

export const quoteProjectOptions = [
  "Tenho medidas",
  "Tenho projeto",
  "Ainda não",
] as const;
