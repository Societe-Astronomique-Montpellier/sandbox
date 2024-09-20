// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,

  typescript: {
    typeCheck: true
  },

  modules: ['@nuxtjs/prismic', '@nuxtjs/tailwindcss'],
  prismic: {
    endpoint: "https://sandbox-sam.cdn.prismic.io/api/v2"
  },
  css: [
    "@/assets/css/main.css"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
    }
  },
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
      ],
      htmlAttrs: {
        lang: "fr",
      },
    },
  },
})