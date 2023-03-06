import { defineConfig, presetAttributify, presetIcons, presetWind } from "unocss";

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    // checkout https://github.com/unocss/unocss/tree/main/packages/preset-icons
    presetIcons({
      warn: true,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
});
