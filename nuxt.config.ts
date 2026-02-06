// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  components: {
    dirs: [{ path: '~/components', pathPrefix: false}]
  },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vee-validate/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],
  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/main.scss" as *;',
          sassOptions: {
            quietDeps: true
          }
        }
      }
    },    
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      // autoprefixer: {},
    },
  },

  i18n:{ 
    types:'composition',
    langDir:'locales/',
    strategy:'prefix_except_default',
    defaultLocale:'fr',
    locales:[
      {
        code:'fr',
        files:[
          'fr.json',

        ]
      },
      {
        code: 'en',
        files:[
          'en.json',
       
        ]
      }
    ]
  }
})