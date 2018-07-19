

export default function (context) {
  if (context.isMobile) {
    context.component = () => ({
      component: import(`~/views/mobile/post.vue`)
    })
  } else {
    context.component = () => ({
      component: import(`~/views/web/post.vue`)
    })
  }
}
