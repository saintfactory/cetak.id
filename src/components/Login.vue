<template>
  <div class="login white">
    <form action="">
      <img src="../assets/img/logo.png" class="logo mv3" alt="Logo Cetak.id"/> <br>
      <span class="i">Silahkan Login menggunakan Akun Anda</span> <br>
      <label class="db fw6 lh-copy f6 black tl" for="email">Email</label>
      <input type="text" name="email" class="ma2 pa2 bg-transparent hover-bg-blue hover-white" v-model="input.email" /> <br>
      <label class="db fw6 lh-copy f6 black tl" for="password">Password</label>
      <input type="password" class="ma2 pa2 bg-transparent hover-bg-blue hover-white" name="password" v-model="input.password"  /> <br>
      <input type="button" class="f6 grow no-underline br-pill ph3 pv2 mv2 b mb2 dib white" v-on:click="login()" value="Login" />
    </form>
    <p class="mv3 mt4 white">Lupa password ? <router-link to="" class="link b i white"> Reset password sekarang </router-link></p>
    <p class="mv3 white">Belum punya akun ? <router-link to="/join" class="link b i white">Register sekarang</router-link></p>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'Login',
  data(){
    return {
      input: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      if (this.input.email !== "" && this.input.password != "") {
        if (this.input.email == this.$parent.mockAccount.email && this.input.password == this.$parent.mockAccount.password) {
          this.$emit("authenticated", true);
          this.$router.replace({ name:"dashboard-partnership" });
        } else {
          alert("The email or password is incorrect")
        }
      } else {
        alert("A email and password must be present")
      }
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
