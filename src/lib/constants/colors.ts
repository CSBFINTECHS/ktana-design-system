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

export const BRAND_COLORS: ColorStep[] = [
  { name: "100", hex: "#FBC5D1", cssVar: "--brand-100" },
  { name: "200", hex: "#F2365E", cssVar: "--brand-200" },
  { name: "300", hex: "#E60F3D", cssVar: "--brand-300" },
  { name: "400", hex: "#E51D4A", cssVar: "--brand-400" },
  { name: "500", hex: "#D70030", cssVar: "--brand-500" },
  { name: "600", hex: "#C20B34", cssVar: "--brand-600" },
  { name: "700", hex: "#C00C33", cssVar: "--brand-700" },
  { name: "800", hex: "#9B0A2A", cssVar: "--brand-800" },
  { name: "900", hex: "#73071F", cssVar: "--brand-900" },
];

export const SEMANTIC_COLORS: SemanticColor[] = [
  { name: "Background",     light: "#FAF5EA", dark: "#000000" },
  { name: "Foreground",     light: "#141414", dark: "#FFFFFF" },
  { name: "Primary",        light: "#D70030", dark: "#D70030" },
  { name: "Primary FG",     light: "#FFFFFF", dark: "#FFFFFF" },
  { name: "Secondary",      light: "#F0F0F0", dark: "#0F0F0F" },
  { name: "Muted",          light: "#F0F0F0", dark: "#131313" },
  { name: "Muted FG",       light: "#575757", dark: "#D0D5D7" },
  { name: "Accent",         light: "#C20B34", dark: "#C20B34" },
  { name: "Destructive",    light: "#EF4444", dark: "#EF4444" },
  { name: "Border",         light: "#D0D5D7", dark: "#303030" },
  { name: "Ring",           light: "#D70030", dark: "#D70030" },
  { name: "Card",           light: "#FFFEF7", dark: "#0F0F0F" },
];
