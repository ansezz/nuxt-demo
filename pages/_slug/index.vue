<template>
  <component :is="component"/>
</template>

<script>

  export default {
    layout: (ctx) => ctx.isMobile ? 'mobile' : 'desktop',
    components: {},
    beforeCreate() {
      if (this.$device.isMobile) {
        this.component = () => ({
          component: import(`~/views/m/post/index.vue`)
        })
      } else {
        this.component = () => ({
          component: import(`~/views/post/index.vue`)
        })
      }
    },
    asyncData(context) {
      // called every time before loading the component
      return {
        content: 'Content test',
        title: 'Title Slug page ',
        description: 'description ',
      }
    },
    fetch() {
      // The `fetch` method is used to fill the store before rendering the page
    },
    head() {
      return {
        title: this.title,
        meta: [
          {hid: 'description', name: 'description', content: this.description}
        ]
      }
    },
  }
</script>

<style>
</style>
