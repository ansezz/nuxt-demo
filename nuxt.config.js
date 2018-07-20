module.exports = {
  modules: [
    '@nuxtjs/axios',
    'nuxt-device-detect',
    'nuxt-buefy',
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'Nuxt Demo',
    short_name: 'NuxtDemo',
    title: 'Nuxt Demo Title',
    'og:title': 'Nuxt Demo ogTitle',
    description: 'Nuxt Demo  appDescription',
    'og:description': 'Nuxt Demo  ogDescription',
    lang: 'en',
    theme_color: '#42b883',
    background_color: '#35495e'
  },
  router: {
    middleware: 'platform',
  },
  css: [],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Demo',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
    ],
    script: [],
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
  // build: {
  //   vendor: ['vue-i18n']
  // },
  //
  // plugins: ['~/plugins/index.js']


}
