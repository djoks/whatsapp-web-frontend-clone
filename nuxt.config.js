import path from 'path'
import fs from 'fs'

import EnvVars from './env.config.js'
const env = process.env.NODE_ENV || 'develop'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'whatsapp-web-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  pwa: {
    manifest: {
      name: 'Whatsapp',
      short_name: 'Whatsapp',
      lang: 'en',
      useWebmanifestExtension: false,
      background_color: '#000000',
      theme_color: '#000000',
    },
    meta: {
      ogSiteName: 'Whatsapp',
      ogSiteTitle: 'Whatsapp',
      ogDescription:
        'Social media communication platform.',
      ogHost: 'https://app.myticketgh.com',
      ogImage: true,
      nativeUI: true,
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/persistedState.client.js' },
    '~/plugins/echo.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/laravel-echo',
    '@nuxtjs/device',
    'nuxt-user-agent'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: EnvVars[env].baseUrl || '',
  },

  auth: {
    strategies: {
      'laravelJWT': {
        provider: 'laravel/jwt',
        url: '/auth',
        endpoints: {
          login:{
            url: '/login',
          },
          logout:{
            url: '/auth/logout'
          },
          refresh:{
            url: '/auth/refresh'
          },
          user: false
        },
        token: {
          property: 'access_token',
          maxAge: 60 * 60
        },
        refreshToken: {
          maxAge: 20160 * 60
        },
      },
    },
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      callback: '/auth/login',
      home: '/'
    }
  },

  echo: {
    broadcaster: EnvVars[env].wsBroadcaster,
    wsHost: EnvVars[env].wsHost,
    wsPort: EnvVars[env].wsPort,
    key: EnvVars[env].wsKey,
    cluster: EnvVars[env].wsCluster,
    forceTLS: EnvVars[env].wsForceTLS,
    encrypted: EnvVars[env].wsEncrypted,
    disableStats: EnvVars[env].wsDisableStats,
    wssHost: EnvVars[env].wsHost,
    wssPort: EnvVars[env].wsPort,
    authModule: true,
    authEndpoint: EnvVars[env].wsAuthEndpoint,
    connectOnLogin: false,
    disconnectOnLogout: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },

  tailwindcss: {
    jit: true,
  },

  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
}
