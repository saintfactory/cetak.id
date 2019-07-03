<template>
  <div class="login white">
    <form>
      <img src="../assets/img/logo.png" class="logo mv3" alt="Logo Cetak.id"/> <br>
      <span class="i">Silahkan Login menggunakan Akun Anda</span> <br>
      <label class="db fw6 lh-copy f6 black tl" for="email">Email</label>
      <input 
        type="text" 
        name="email" 
        class="ma2 pa2 bg-transparent hover-bg-blue hover-white" 
        v-model="email" 
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
        v-on:click="login()" 
        value="Login" 
      />
    </form>
    <p class="mv3 mt4 white">Lupa password ? <router-link to="" class="link b i white"> Reset password sekarang </router-link></p>
    <p class="mv3 white">Belum punya akun ? <router-link to="/join" class="link b i white">Register sekarang</router-link></p>
  </div>
</template>

<script>
import Axios from 'axios'

/* eslint-disable */ 
export default {
  name: 'Login',
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    // login() {
    //   if (this.input.email !== "" && this.input.password != "") {
    //     if (this.input.email == this.$parent.mockAccount.email && this.input.password == this.$parent.mockAccount.password) {
    //       this.$emit("authenticated", true);
    //       this.$router.replace({ name:"dashboard-partnership" });
    //     } else {
    //       alert("The email or password is incorrect")
    //     }
    //   } else {
    //     alert("A email and password must be present")
    //   }
    // }
    
    login(){
      const payload = {
        email: this.email,
        password: this.password
      }
      Axios.post(this.$store.state.endpoints.obtainJWT, payload)
        .then((response) => {
          this.$store.commit('updateToken', response.data.token)
          // get and set auth user
          const base = {
            baseURL: this.$store.state.endpoints.baseUrl,
            headers: {
              // Set your Authorization to 'JWT'
              Authorization: `JWT ${this.$store.state.jwt}`,
              'Content-Type': 'application/json'
            },
            xhrFields: {
              withCredentials: true
            }
          }
          const axiosInstance = Axios.create(base)
          axiosInstance({
            url: "/user/",
            method: "get",
            params: {}
          })
            .then((response) => {
              this.$store.commit("setAuthUser",
                {authUser: response.data, isAuthenticated: true}
              )
              this.$router.push({name: 'home'})
            })
            .catch((error) => {
              console.log(error);
              console.debug(error);
              console.dir(error);
            })
        })
    }
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
