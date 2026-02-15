export interface SpacingToken {
  name: string;
  value: string;
}

export interface RadiusToken {
  name: string;
  value: string;
}

export const SPACING_SCALE: SpacingToken[] = [
  { name: "1",  value: "4px" },
  { name: "2",  value: "8px" },
  { name: "3",  value: "12px" },
  { name: "4",  value: "16px" },
  { name: "5",  value: "20px" },
  { name: "6",  value: "24px" },
  { name: "8",  value: "32px" },
  { name: "10", value: "40px" },
  { name: "12", value: "48px" },
  { name: "16", value: "64px" },
  { name: "20", value: "80px" },
  { name: "24", value: "96px" },
];

export const RADIUS_SCALE: RadiusToken[] = [
  { name: "none", value: "0px" },
  { name: "xs",   value: "4px" },
  { name: "sm",   value: "9px" },
  { name: "md",   value: "20px" },
  { name: "base", value: "33px" },
  { name: "lg",   value: "55px" },
  { name: "xl",   value: "111px" },
  { name: "full", value: "1111px" },
];

export const SHADOW_NAMES = ["xs", "sm", "md", "lg", "xl"] as const;

export const ICON_SIZES = [16, 20, 24, 28, 32, 40, 48] as const;
