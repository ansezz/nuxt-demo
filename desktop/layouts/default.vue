<template>
  <div>
    <header>
      <div>Menu Desktop</div>
      <ul>
        <li>
          <nuxt-link to="/">Home page</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/slug-demo">slug demo</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/category/test-category">slug category</nuxt-link>
        </li>
      </ul>
    </header>
    <main>
      <nuxt/>
    </main>
    <footer>Footer Desktop</footer>
  </div>
</template>

<style>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background-color: #47494e;
  }
</style>
