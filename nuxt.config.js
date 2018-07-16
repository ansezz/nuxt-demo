module.exports = {
  modules: [
    'nuxt-device-detect',
  ],
  router: {
    middleware: 'device',
    extendRoutes(routes, resolve) {
      /* routes.push({
        name: 'test.index',
        path: '/test/index',
        component: resolve(__dirname, 'test/index.vue')
      }) */
      for (i = 0; i < routes.length; i++) {
        console.log(routes[i].component)
      }
    }
  },
  css: [],
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-demo',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  // @TODO : custom loading
//  loading: '~/components/loading.vue'

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
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
