export interface ColorStep {
  name: string;
  hex: string;
  cssVar: string;
}

export interface SemanticColor {
  name: string;
  light: string;
  dark: string;
}

export const NEUTRAL_COLORS: ColorStep[] = [
  { name: "50",  hex: "#FAF5EA", cssVar: "--neutral-50" },
  { name: "100", hex: "#FFFEF7", cssVar: "--neutral-100" },
  { name: "200", hex: "#F0F0F0", cssVar: "--neutral-200" },
  { name: "300", hex: "#D0D5D7", cssVar: "--neutral-300" },
  { name: "400", hex: "#818E8C", cssVar: "--neutral-400" },
  { name: "500", hex: "#575757", cssVar: "--neutral-500" },
  { name: "600", hex: "#515151", cssVar: "--neutral-600" },
  { name: "700", hex: "#303030", cssVar: "--neutral-700" },
  { name: "800", hex: "#1A1A1A", cssVar: "--neutral-800" },
  { name: "900", hex: "#141414", cssVar: "--neutral-900" },
  { name: "950", hex: "#0D0D0D", cssVar: "--neutral-950" },
];

export const FIRE_COLORS: ColorStep[] = [
  { name: "100", hex: "#FFD6BF", cssVar: "--brand-fire-100" },
  { name: "200", hex: "#FFAD8F", cssVar: "--brand-fire-200" },
  { name: "300", hex: "#FF8566", cssVar: "--brand-fire-300" },
  { name: "400", hex: "#FF5C3D", cssVar: "--brand-fire-400" },
  { name: "500", hex: "#FF3317", cssVar: "--brand-fire-500" },
  { name: "600", hex: "#CC2810", cssVar: "--brand-fire-600" },
];

export const SPECTRUM_COLORS: ColorStep[] = [
  { name: "Magenta", hex: "#FE006A", cssVar: "--brand-spectrum-magenta" },
  { name: "Purple",  hex: "#D300C5", cssVar: "--brand-spectrum-purple" },
  { name: "Orange",  hex: "#FD4C2A", cssVar: "--brand-spectrum-orange" },
  { name: "Gold",    hex: "#FFD100", cssVar: "--brand-spectrum-gold" },
];

export const ICE_COLORS: ColorStep[] = [
  { name: "300", hex: "#9DCCEA", cssVar: "--brand-ice-300" },
  { name: "400", hex: "#7DBBE0", cssVar: "--brand-ice-400" },
  { name: "500", hex: "#5DAAD6", cssVar: "--brand-ice-500" },
  { name: "600", hex: "#4A91B8", cssVar: "--brand-ice-600" },
  { name: "700", hex: "#3B7A9E", cssVar: "--brand-ice-700" },
];

export const SEMANTIC_COLORS: SemanticColor[] = [
  { name: "Background",     light: "#FAF5EA", dark: "#0D0D0D" },
  { name: "Foreground",     light: "#141414", dark: "#FAF5EA" },
  { name: "Primary",        light: "#FF3317", dark: "#FF3317" },
  { name: "Secondary",      light: "#F0F0F0", dark: "#303030" },
  { name: "Accent",         light: "#FFD100", dark: "#FFD100" },
  { name: "Muted",          light: "#F0F0F0", dark: "#1A1A1A" },
  { name: "Destructive",    light: "#EF4444", dark: "#EF4444" },
  { name: "Border",         light: "#D0D5D7", dark: "#303030" },
  { name: "Ring",           light: "#FF3317", dark: "#FF3317" },
  { name: "Fire",           light: "#FF3317", dark: "#FF3317" },
  { name: "Ice",            light: "#5DAAD6", dark: "#5DAAD6" },
  { name: "Spectrum Gold",  light: "#FFD100", dark: "#FFD100" },
];
