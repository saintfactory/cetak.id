<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header />
    <HelloWorld msg="Welcome to Your Vue.js App on Now 2.0"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue'
import '../node_modules/vue-tachyons/dist/index.css'
import '../node_modules/vue-tachyons/dist/vue-tachyons.js'
export default {
  name: 'app',
  components: {
    Header,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
