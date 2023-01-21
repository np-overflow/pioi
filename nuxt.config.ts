// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/content',
      '@vueuse/nuxt',
      'nuxt-icon',
    ],
    app: {
      head: {
        htmlAttrs: {
          lang: 'en-US',
        },
        meta: [
          {name: 'description', content: 'PIOI'},
        ],
        bodyAttrs: {
          class: 'bg-[#0c0c0c]',
        },
        title: 'Poly-ITE Olympiad for Informatics',
      },
    },
    runtimeConfig: {
      notionKey: '',
      notionDB: '',
      turnstileSecretKey: '',
      public: {
        turnstileSiteKey: '0x4AAAAAAABnSV662UDNazDo',
      },
    },
  },
)
