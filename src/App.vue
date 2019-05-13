<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import './styles.css'

export default {
  name: 'app',
  components: {
    Header,
    Home
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans|Roboto');
#app {
  font-family: 'Open Sans', 'Lato', 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
</style>
