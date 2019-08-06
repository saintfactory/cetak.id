<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './styles.css'
import { mapState } from 'vuex';

export default {
  name: 'app',
  computed: mapState('auth', ['authUser','isAuthenticated']),
  mounted() {
    this.$store.commit('auth/updateToken')
  },  
}
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans|Roboto');
#app {
  font-family: 'Open Sans', 'Lato', 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

router-link {
  color: white
}
</style>
