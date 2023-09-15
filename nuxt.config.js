import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  // My Nuxt config
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "nuxt-swiper"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["@/assets/main.css"],
});
