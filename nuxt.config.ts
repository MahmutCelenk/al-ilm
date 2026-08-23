export default defineNuxtConfig({
  modules: ['@nuxt/content', '@pinia/nuxt', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2026-06-04',
  future: {
    compatibilityVersion: 4
  },
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'tr'
      },
      titleTemplate: '%s | Al-Ilm',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&display=swap'
        }
      ],
      meta: [
        {
          name: 'description',
          content: 'Al-Ilm, geleneksel ilmi modern ve sakin bir öğrenme deneyimiyle buluşturan İslami eğitim platformudur.'
        }
      ]
    }
  },
  content: {
    build: {
      markdown: {
        highlight: false
      }
    }
  }
})
