export interface Gradient {
  name: string;
  css: string;
  description: string;
}

export const GRADIENTS: Gradient[] = [
  {
    name: "Lama Negra",
    css: "linear-gradient(135deg, #0D0D0D 0%, #303030 50%, #515151 100%)",
    description: "neutral-950 → neutral-700 → neutral-600",
  },
  {
    name: "Fogo KTANA",
    css: "linear-gradient(135deg, #CC2810 0%, #FF3317 50%, #FF5C3D 100%)",
    description: "fire-600 → fire-500 → fire-400",
  },
  {
    name: "Espectro KTANA",
    css: "conic-gradient(from 225deg, #FE006A 26%, #D300C5 52%, #FD4C2A 73%, #FFD100 100%)",
    description: "magenta → purple → orange → gold",
  },
  {
    name: "Gelo Digital",
    css: "linear-gradient(135deg, #3B7A9E 0%, #5DAAD6 50%, #9DCCEA 100%)",
    description: "ice-700 → ice-500 → ice-300",
  },
  {
    name: "Noite Samurai",
    css: "linear-gradient(135deg, #000000 0%, #141414 50%, #303030 100%)",
    description: "pure-black → neutral-900 → neutral-700",
  },
];
