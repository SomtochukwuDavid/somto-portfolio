import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://somtoogbonna.com",
  integrations: [tailwind({ applyBaseStyles: false })],
  output: "static",
  build: { inlineStylesheets: "auto" },
});