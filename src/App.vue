<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>
</template>

<script>
import Header from './layout/Header/Header.vue'
import Footer from './layout/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
