<template>
  <div id="app">
    <div id="nav">
        <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import './styles.css'

export default {
  name: 'app',
  data() {
    return {
        authenticated: false,
        mockAccount: {
            email: "test",
            password: "123"
        }
    }
  },
  // mounted() {
  //     if(!this.authenticated) {
  //         this.$router.replace({ name: "login" });
  //     }
  // },
  methods: {
      setAuthenticated(status) {
          this.authenticated = status;
      },
      logout() {
          this.authenticated = false;
      }
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
