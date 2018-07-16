<template>
  <component :is="component"/>
</template>

<script>
  export default {
    layout: (ctx) => ctx.isMobile ? 'mobile' : 'desktop',
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
    components: {}
  }
</script>

<style>
</style>
