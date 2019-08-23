<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './styles.css'

export default {
  name: 'app',
  mounted() {
    if(this.$store.state.auth.jwt){
      this.$store.commit('auth/setAuthUser',
        { 
          isAuthenticated: true
        }
      )
    }
  }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans|Roboto');
#app {
  font-family: 'Open Sans' !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

router-link {
  color: white
}
</style>
