import { IMG } from "./images";

export const applications = [
  {
    id: "cozinhas",
    name: "Cozinhas",
    description: "Funcionalidade e beleza.",
    image: IMG.appKitchen,
  },
  {
    id: "banheiros",
    name: "Banheiros",
    description: "Precisão no encontro com a water.",
    image: IMG.appBath,
  },
  {
    id: "gourmet",
    name: "Áreas Gourmet",
    description: "Pedra para viver ao ar livre.",
    image: IMG.appGourmet,
  },
  {
    id: "lareiras",
    name: "Lareiras",
    description: "Volume e presença.",
    image: IMG.appFireplace,
  },
  {
    id: "escadas",
    name: "Escadas",
    description: "Continuidade entre níveis.",
    image: IMG.appStairs,
  },
  {
    id: "comercial",
    name: "Comercial",
    description: "Marca material no espaço.",
    image: IMG.appCommercial,
  },
] as const;

export const craftDetails = [
  { id: "bisote", name: "Bisotê", sub: "Detail / Edge", image: IMG.detailEdge },
  {
    id: "polimento",
    name: "Polimento",
    sub: "Polished",
    image: IMG.detailPolish,
  },
  {
    id: "encaixes",
    name: "Encaixes",
    sub: "Detail / Fit",
    image: IMG.detailFit,
  },
  { id: "cubas", name: "Cubas", sub: "Detail / Sink", image: IMG.detailSink },
  {
    id: "bordas",
    name: "Bordas",
    sub: "Detail / Edge",
    image: IMG.detailBorder,
  },
  {
    id: "juncoes",
    name: "Junções",
    sub: "Detail / Join",
    image: IMG.detailJoin,
  },
] as const;
