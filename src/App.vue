<template>
  <div>
    <HeaderComponent>
  
    </HeaderComponent>
  </div>
  <router-view />
</template>

<script>
import HeaderComponent from './layout/Header/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
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
