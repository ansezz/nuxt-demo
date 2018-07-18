<template>
  <component :is="component"/>
</template>

<script>
  export default {
    layout: (ctx) => ctx.isMobile ? 'mobile' : 'desktop',
    beforeCreate() {
      // Load the needed data in this page
      this.$store.dispatch('news/LOAD_POST_CURRENT',{ slug: this.$route.params.slug})

      if (this.$device.isMobile) {
        this.component = () => ({
          component: import(`~/views/mobile/post.vue`)
        })
      } else {
        this.component = () => ({
          component: import(`~/views/web/post.vue`)
        })
      }
    },
    components: {}
  }
</script>

<style>
</style>
