<template>
  <component :is="component"/>
</template>

<script>
  export default {
    layout: (ctx) => ctx.isMobile ? 'mobile' : 'desktop',

    async fetch({store, params}) {
      await store.dispatch('news/LOAD_NEWS_LATEST')
    },

    beforeCreate() {
      this.component = this.$device.isMobile ? 'mobile' : 'desktop'
    },
    components: {
      mobile: () => import(`~/views/mobile/home.vue`),
      desktop: () => import(`~/views/web/home.vue`)
    }
  }
</script>

<style>
</style>
