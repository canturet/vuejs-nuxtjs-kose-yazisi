export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Köşe Yazısı',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://bootswatch.com/4/sketchy/bootstrap.min.css' }
    ],
    script: [

    ]
  },
  loading: { 
    color: '#666',
    failedColor : 'orange'
  },
  
  env : {
    baseURL : "https://nuxt-js-kose-yazisi-default-rtdb.firebaseio.com/"
  },

  transition : {
    name : "layout",
    mode : "out-in"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/style/transition.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/Components.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
