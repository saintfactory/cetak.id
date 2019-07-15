<template>
  <div class="login white">
    <form>
      <img src="../assets/img/logo.png" class="logo mv3" alt="Logo Cetak.id"/> <br>
      <span class="i">Silahkan Login menggunakan Akun Anda</span> <br>
      <label class="db fw6 lh-copy f6 black tl" for="username">Username</label>
      <input 
        type="text" 
        name="username" 
        class="ma2 pa2 bg-transparent hover-bg-blue hover-white" 
        v-model="username" 
      /><br>
      <label class="db fw6 lh-copy f6 black tl" for="password">Password</label>
      <input 
        type="password" 
        class="ma2 pa2 bg-transparent hover-bg-blue hover-white" 
        name="password" 
        v-model="password"  
      /><br>
      <input 
        type="button" 
        class="f6 grow no-underline br-pill ph3 pv2 mv2 b mb2 dib white" 
        @click="login()" 
        value="Login" 
      />
    </form>
    <p class="mv3 mt4 white">Lupa password ? <router-link to="" class="link b i white"> Reset password sekarang </router-link></p>
    <p class="mv3 white">Belum punya akun ? <router-link to="/join" class="link b i white">Register sekarang</router-link></p>
  </div>
</template>

<script>
import axios from 'axios'
/* eslint-disable */ 
export default {
  name: 'Login',
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login(){
      const payload = {
        username: this.username,
        password: this.password
      }
      axios.post(this.$store.state.endpoints.obtainJWT, payload)
        .then((response) => {
          this.$store.commit('updateToken', response.data.token)
          this.$store.commit("setAuthUser",
            { 
              authUser: response.data, 
              isAuthenticated: true
            }
          )
          this.$router.push({name: 'dashboard-user'})
        })
        .catch((error) => {
          //NOTE: erase this when production
          console.log(error);
          console.debug(error);
          console.dir(error);
          alert("The username or password is incorrect");
        })
    }
    // login(){
    //   this.$store.dispatch('login')
    // }
  }
}
</script>

<style scoped>
.login {
  background:url('../assets/img/backgroundcetak.png') no-repeat center;
  background-color: #4286B7;
  position: relative;
  padding-bottom: 10%;
  padding-top: 10%;
  min-height: 100%;
}

form {
  background-color: white;
  width: 500px;
  margin: 0 auto;
  padding: 2%;
  border-radius: 25px;
}

form span {
    color: #4286B7;
    margin-bottom: 25px;
    padding-bottom: 25px;
}

input[type=text], input[type=password] {
    margin-bottom: 5%;
    border: none;
    border-bottom: 1px solid black; 
    width: 100%;
}

input[type=button] {
    background-color: #4286B7;
    border: none;
    width: 40%;
}
</style>
