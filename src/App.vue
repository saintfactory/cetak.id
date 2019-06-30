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
/* eslint-disable */ 
import './styles.css'
import axios from 'axios'

const url = 'http://127.0.0.1:8000'

export default {
  name: 'app',
  data() {
    return {
        authenticated: false,
        mockAccount: {
            email: "test",
            password: "123"
        },
        boards: []
    }
  },
  // mounted() {
  //     if(!this.authenticated) {
  //         this.$router.replace({ name: "login" });
  //     }
  // },
  mounted() {
    axios.get(url)
      .then(response => {
        this.boards = response.data
        console.log(response.status)
      })
      .catch((error) => {
        console.log(error)
      })
  },
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
