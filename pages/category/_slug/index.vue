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
          component: import(`~/views/m/category/index.vue`)
        })
      } else {
        this.component = () => ({
          component: import(`~/views/category/index.vue`)
        })
      }
    },
    asyncData(context) {
      // called every time before loading the component
      // global
    },
    fetch() {
      // The `fetch` method is used to fill the store before rendering the page
    }
  }
</script>

<style>
</style>
