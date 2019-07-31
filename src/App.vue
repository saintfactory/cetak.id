<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div> -->
    <!-- <router-view @authenticated="setAuthenticated" /> -->
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */ 
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
  },
  created() {
    this.$store.dispatch('auth/refreshToken')
  }
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
