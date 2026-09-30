import { IMG } from "./images";

export type Project = {
  id: string;
  number: string;
  category: string;
  filter: string;
  cover: string;
  size: "main" | "small" | "wide";
};

export const projectFilters = [
  "Todos",
  "Cozinhas",
  "Banheiros",
  "Ilhas",
  "Churrasqueiras",
  "Lareiras",
  "Comercial",
] as const;

export const projects: Project[] = [
  {
    id: "p-018",
    number: "018",
    category: "Cozinha",
    filter: "Cozinhas",
    cover: IMG.projectKitchen,
    size: "main",
  },
  {
    id: "p-026",
    number: "026",
    category: "Banheiro",
    filter: "Banheiros",
    cover: IMG.projectBath,
    size: "small",
  },
  {
    id: "p-031",
    number: "031",
    category: "Churrasqueira",
    filter: "Churrasqueiras",
    cover: IMG.projectGrill,
    size: "small",
  },
  {
    id: "p-022",
    number: "022",
    category: "Lareira",
    filter: "Lareiras",
    cover: IMG.projectFireplace,
    size: "small",
  },
  {
    id: "p-015",
    number: "015",
    category: "Detalhe",
    filter: "Cozinhas",
    cover: IMG.projectSink,
    size: "wide",
  },
  {
    id: "p-009",
    number: "009",
    category: "Ilha",
    filter: "Ilhas",
    cover: IMG.projectIsland,
    size: "wide",
  },
];
