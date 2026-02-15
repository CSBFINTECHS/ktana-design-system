import StyleDictionary from "style-dictionary";
import type { TransformedToken } from "style-dictionary/types";
import { register } from "@tokens-studio/sd-transforms";

register(StyleDictionary);

StyleDictionary.registerTransform({
  name: "name/ktana-semantic",
  type: "name",
  filter: (token) => token.filePath.includes("semantic/"),
  transform: (token) => {
    const path = token.path.filter((p: string) => p !== "semantic");
    return path.join("-");
  },
});

StyleDictionary.registerTransform({
  name: "name/ktana-primitive",
  type: "name",
  filter: (token) => !token.filePath.includes("semantic/"),
  transform: (token) => {
    return token.path.join("-");
  },
});

async function run() {
  const sdLight = new StyleDictionary({
    source: [
      "tokens/primitive/colors.json",
      "tokens/primitive/typography.json",
      "tokens/primitive/spacing.json",
      "tokens/primitive/radius.json",
      "tokens/primitive/shadows.json",
      "tokens/semantic/colors-light.json",
      "tokens/semantic/typography.json",
    ],
    preprocessors: ["tokens-studio"],
    platforms: {
      css: {
        transforms: [
          "ts/descriptionToComment",
          "ts/size/px",
          "ts/opacity",
          "ts/size/lineheight",
          "ts/typography/fontWeight",
          "ts/color/modifiers",
          "ts/color/css/hexrgba",
          "ts/shadow/innerShadow",
          "name/ktana-semantic",
          "name/ktana-primitive",
        ],
        buildPath: "src/styles/generated/",
        files: [
          {
            destination: "tokens-light.css",
            format: "css/variables",
            options: {
              selector: ":root",
              outputReferences: false,
            },
            filter: (token: TransformedToken) => {
              return (
                token.filePath.includes("semantic/colors") &&
                token.$type === "color"
              );
            },
          },
        ],
      },
    },
    log: { verbosity: "silent" },
  });

  await sdLight.buildAllPlatforms();
  console.log("✅ Built light theme");

  const sdDark = new StyleDictionary({
    source: [
      "tokens/primitive/colors.json",
      "tokens/primitive/typography.json",
      "tokens/primitive/spacing.json",
      "tokens/primitive/radius.json",
      "tokens/primitive/shadows.json",
      "tokens/semantic/colors-dark.json",
      "tokens/semantic/typography.json",
    ],
    preprocessors: ["tokens-studio"],
    platforms: {
      css: {
        transforms: [
          "ts/descriptionToComment",
          "ts/size/px",
          "ts/opacity",
          "ts/size/lineheight",
          "ts/typography/fontWeight",
          "ts/color/modifiers",
          "ts/color/css/hexrgba",
          "ts/shadow/innerShadow",
          "name/ktana-semantic",
          "name/ktana-primitive",
        ],
        buildPath: "src/styles/generated/",
        files: [
          {
            destination: "tokens-dark.css",
            format: "css/variables",
            options: {
              selector: ".dark",
              outputReferences: false,
            },
            filter: (token: TransformedToken) => {
              return (
                token.filePath.includes("semantic/colors") &&
                token.$type === "color"
              );
            },
          },
        ],
      },
    },
    log: { verbosity: "silent" },
  });

  await sdDark.buildAllPlatforms();
  console.log("✅ Built dark theme");

  const sdTheme = new StyleDictionary({
    source: [
      "tokens/primitive/colors.json",
      "tokens/primitive/typography.json",
      "tokens/primitive/spacing.json",
      "tokens/primitive/radius.json",
      "tokens/primitive/shadows.json",
    ],
    preprocessors: ["tokens-studio"],
    platforms: {
      css: {
        transforms: [
          "ts/descriptionToComment",
          "ts/size/px",
          "ts/opacity",
          "ts/size/lineheight",
          "ts/typography/fontWeight",
          "ts/color/modifiers",
          "ts/color/css/hexrgba",
          "ts/shadow/innerShadow",
          "name/ktana-primitive",
          "name/ktana-semantic",
        ],
        buildPath: "src/styles/generated/",
        files: [
          {
            destination: "tokens-theme.css",
            format: "css/variables",
            options: {
              selector: ":root",
              outputReferences: false,
            },
          },
        ],
      },
    },
    log: { verbosity: "silent" },
  });

  await sdTheme.buildAllPlatforms();
  console.log("✅ Built theme tokens (primitives)");
}

run().catch((err) => {
  console.error("❌ Build failed:", err);
  process.exit(1);
});
