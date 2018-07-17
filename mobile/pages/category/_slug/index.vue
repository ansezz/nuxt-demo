<template>
  <div>
    <h1>Mobile Category Slug {{$route.params.slug}}</h1>
  </div>
</template>

<script>

  export default {
    components: {},
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
