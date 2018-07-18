<template>
  <component :is="component"/>
</template>

<script>
  export default {
    layout: (ctx) => ctx.isMobile ? 'mobile' : 'desktop',
    beforeCreate() {
      // Load the needed data in this page
      this.$store.dispatch('news/LOAD_NEWS_LATEST')

      if (this.$device.isMobile) {
        this.component = () => ({
          component: import(`~/views/mobile/home.vue`)
        })
      } else {
        this.component = () => ({
          component: import(`~/views/web/home.vue`)
        })
      }
    },
    components: {}
  }
</script>

<style>
</style>
