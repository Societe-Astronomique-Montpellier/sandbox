// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,

  typescript: {
    typeCheck: true
  },

  modules: ['@nuxtjs/prismic'],
  prismic: {
    endpoint: "https://sandbox-sam.cdn.prismic.io/api/v2"
  }
})