<template>
  <component :is="component"/>
</template>

<script>
  export default {
    layout: (ctx) => ctx.isMobile ? 'mobile' : 'desktop',

    async fetch({store, params}) {
      await store.dispatch('news/LOAD_POST_CURRENT', {slug: params.slug})
    },

    beforeCreate() {
      this.component = this.$device.isMobile ? 'mobile' : 'desktop'
    },
    components: {
      mobile: () => import(`~/views/mobile/post.vue`),
      desktop: () => import(`~/views/web/post.vue`)
    },
    head() {
      return {
        title: this.$store.state.news.current_post.title,
        meta: [
          {hid: 'description', name: 'description', content: this.$store.state.news.current_post.title}
        ]
      }
    }
  }
</script>

<style>
</style>
