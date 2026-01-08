import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), sitemap(), mdx()],
	site: "https://lorenzoiovino.com",
	compressHTML: true,
	build: {
		inlineStylesheets: "auto",
	},
});
