import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({

  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "nuxt-swiper"],
  components: true,
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
