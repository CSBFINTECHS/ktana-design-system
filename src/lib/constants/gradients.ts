export interface Gradient {
  name: string;
  css: string;
  description: string;
}

export const GRADIENTS: Gradient[] = [
  {
    name: "Noite Absoluta",
    css: "linear-gradient(135deg, #000000 0%, #0F0F0F 50%, #141414 100%)",
    description: "Fundo principal dark — preto puro para neutral-900",
  },
  {
    name: "Lama Negra",
    css: "linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 50%, #303030 100%)",
    description: "neutral-950 → neutral-800 → neutral-700",
  },
  {
    name: "Vermelho KTANA",
    css: "linear-gradient(45deg, #73071F 0%, #C00C33 100%)",
    description: "Brand 900 → 700 — gradiente escuro da marca",
  },
  {
    name: "Vermelho Vibrante",
    css: "linear-gradient(90deg, #E60F3D 0%, #F2365E 100%)",
    description: "Brand 300 → 200 — gradiente vibrante para CTAs",
  },
  {
    name: "Glow Vermelho",
    css: "radial-gradient(circle at 50% 50%, rgba(194, 11, 52, 0.4) 0%, transparent 70%)",
    description: "Radial glow vermelho para efeitos de iluminacao",
  },
  {
    name: "Borda Luminosa",
    css: "linear-gradient(135deg, rgba(255,231,231,0.46) 0%, rgba(255,255,255,0.47) 7%, transparent 24%, rgba(255,255,255,0.3) 58%, #F2365E 81%, #FBC5D1 100%)",
    description: "Stroke gradiente para cards glassmorphism",
  },
  {
    name: "Divisor Rosa",
    css: "linear-gradient(90deg, transparent 8%, #EF5B7C 50%, transparent 93%)",
    description: "Linha divisora com glow rosa",
  },
];
