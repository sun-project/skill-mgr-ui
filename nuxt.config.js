const os = require('os')
const pkg = require('./package')

const hostName = os.hostname()

function getLocalAddress() {
  const interfaces = os.networkInterfaces()
  for (const dev in interfaces) {
    const details = interfaces[dev]
    for (let i = 0; i < details.length; i++) {
      const detail = details[i]
      if (!detail.internal && detail.family === 'IPv4') {
        return detail.address
      }
    }
  }
}

const localAddress = getLocalAddress()

const contextPath = process.env.CONTEXT_PATH || '/ui'

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: ['ant-design-vue/dist/antd.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/antd-ui'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Eureka module configuration
   */
  eureka: {
    instance: {
      app: 'skillMgrUi',
      hostName: hostName,
      ipAddr: localAddress,
      instanceId: `${hostName}:skillMgrUi:3000`,
      statusPageUrl: `http://${hostName}:3000${contextPath}/api/info`,
      healthCheckUrl: `http://${hostName}:3000${contextPath}/api/health`,
      port: {
        $: 3000,
        '@enabled': 'true'
      },
      vipAddress: 'skillMgrUi',
      dataCenterInfo: {
        '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
        name: 'MyOwn'
      }
    },
    eureka: {
      host: process.env.EUREKA_HOST || 'localhost',
      port: process.env.EUREKA_PORT || 8761,
      servicePath: process.env.EUREKA_PATH || '/eureka/apps/',
      maxRetries: 20,
      requestRetryDelay: 5000
    }
  },
  /*
   ** Info response
   */
  info: {
    path: `${contextPath}/api/info`,
    data: {
      app: 'skillMgrUi'
    }
  },
  /*
   ** Health response
   */
  health: {
    path: `${contextPath}/api/health`
  },

  /*
   ** Router configuration
   */
  router: {
    base: `${contextPath}/`
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
