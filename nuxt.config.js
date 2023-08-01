require("dotenv").config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    "@/assets/css/global.scss",
    "@/assets/css/animation.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    "@/api/request.js",
    "@/constant/apiConstant.js",
    "@/api/httpUtils.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "@nuxtjs/proxy",
    "@nuxtjs/markdownit",
    ['@nuxtjs/dotenv', { filename: `.env.${process.env.BASE}` }]
  ],

  markdownit: {
    runtime: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      // 'markdown-it-div',
      // 'markdown-it-attrs'
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  proxy: {
    "/api": {
      target: 'http://localhost:8710',
      changeOrigin: true
    }
  },

  env: {
    ...process.env
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
}
