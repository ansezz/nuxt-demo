<template>
  <div>
    <h1>Mobile Slug {{$route.params.slug}}</h1>
  </div>
</template>

<script>

  export default {
    components: {},
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
