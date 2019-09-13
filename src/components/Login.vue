<template>
<div class="container-fluid">
  <div class="row login cover">
    <div class="part-login col-md-7 text-left">
      <h1 class="font-hero white mb-3">Selamat Datang</h1>
			<h2 class="font-secondary text-light font-weight-normal">Gunakan akun kamu untuk masuk</h2>
      <p class="font-secondary font-weight-normal mb-5">Dikejar <span class="font-weight-bold">Deadline</span>? Tenang, ada <span class="font-weight-bold">Cetak.Id</span></p>
      <img src="../assets/img/login.png" width="40%" alt="">
    </div>

    <div class="form-login col-md-5">
      <div class="row justify-content-md-center form-part">
        <div class="col-md-7">
          <h1 class="mb-5"><img src="../assets/img/logo.png" alt=""></h1>
          <form id="login-form" v-on:submit="login()" >
            <!-- <div class="form-group">
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" v-model="username">
            </div> -->
            <div class="form-group">
              <input type="text" class="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Username" v-model="username" autocomplete="username" v-on:keyup.enter="login()">
              <span class="text-danger" v-if="validationErrors.username" v-text="validationErrors.username"></span>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" autocomplete="current-password" v-on:keyup.enter="login()">
              <span class="text-danger" v-if="validationErrors.password" v-text="validationErrors.password"></span>
            </div>
            <div class="form-group form-check">
              <div class="row font-primary">
              <div class="col-md-6 text-left">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Ingat Kata Sandi</label>
              </div>
              <div class="col-md-6 text-right">
                <p><router-link to="" class="forgot"> Lupa Kata Sandi </router-link></p>
              </div>
              </div>
            </div>
            <button type="button" class="btn-block btn btn-primary mb-2" @click="login()" >Masuk</button>
            <span class="font-primary">Belum punya akun Cetak ? <span><router-link to="/join" class="join"> Daftar Sekarang </router-link></span></span>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- </div>
  <div class="login white">
    <form id="login-form">
      <img src="../assets/img/logo.png" class="logo mv3" alt="Logo Cetak.id"/> <br>
      <span class="i">Silahkan Login menggunakan Akun Anda</span> <br>

      <label class="db fw6 lh-copy f6 black tl" for="username">Username</label>
      <input 
        type="text" 
        name="username" 
        class="ma2 pa2 input-reset" 
        v-model="username" 
        v-on:keyup.enter="login()"
      /><br>
      <span class="text-danger" v-if="validationErrors.username" v-text="validationErrors.username"></span>

      <label class="db fw6 lh-copy f6 black tl" for="password">Password</label>
      <input 
        type="password" 
        class="ma2 pa2 input-reset" 
        name="password" 
        v-model="password"  
        v-on:keyup.enter="login()"
      /><br>
      <span class="text-danger" v-if="validationErrors.password" v-text="validationErrors.password"></span>

      <input 
        type="button" 
        class="f6 grow no-underline br-pill ph3 pv2 mv2 b mb2 dib white" 
        @click="login()" 
        value="Login" 
      />
    </form>
    <p class="mv3 mt4 white">Lupa password ? <router-link to="" class="link b i white"> Reset password sekarang </router-link></p>
    <p class="mv3 white">Belum punya akun ? <router-link to="/join" class="link b i white">Register sekarang</router-link></p>
  --> 
</template>

<script>
import axios from 'axios'
/* eslint-disable */ 
export default {
  name: 'Login',
  data(){
    return {
      username: '',
      password: '',
      validationErrors: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login(){
      if(this.validateForm()){
        const payload = {
          username: this.username,
          password: this.password
        }
        axios.post(this.$store.state.auth.endpoints.login, payload)
          .then(response => {
            this.info = response.data
            this.$store.commit('auth/updateToken', response.data.token)
            this.$store.commit('auth/setAuthUser',
              { 
                authUser: response.data, 
                isAuthenticated: true
              }
            )
            this.$router.push({path: 'dashboard-user/profil'})
            console.log(response.status)
            console.log(response.data)
          })
          .catch(error => {
            alert("The username or password is incorrect");
            console.log(error)
          })
      }
      
    },

    validateForm(formId = 'login-form', errorObjectName = 'validationErrors'){
			var nodes = document.querySelectorAll(`#${formId} :invalid`)
			
			Object.keys(this[errorObjectName]).forEach(key => {
				this[errorObjectName][key] = null
			})

			if(nodes.length > 0) {
				nodes.forEach(node => {
					if (node.title) {
            this[errorObjectName][node.name] = node.title;
          }
          else {
            this[errorObjectName][node.name] = node.validationMessage;
					}
					
					node.addEventListener('change', function (e) {
            this.validateForm(formId, errorObjectName);
          })
				})

				return false
			}
			else {
				return true
			}
		}
  }
}
</script>

<style scoped>
.login {
  min-height: 100vh;
  background-color: #f5f5f5
}

.part-login{
  background:url('../assets/img/bgbiru.png') no-repeat;
  background-size: cover;
  padding-top: 100px;
  padding-left: 200px;
}
.form-part{
  position: relative;
  padding-top: 30%;
  min-height: 100vh
}
.form-group{
  margin-top: 20px;
}
input[type=text], 
input[type=password] {
  border: none;
}
input::placeholder{
  font-size: 14px;
}
.forgot{
  text-decoration: none;
  color: #252525 !important
}
.forgot:hover{
  color: #DCAB0A !important
}
.join{
  text-decoration: none;
  font-weight: 600;
}
/* 
form {
  background-color: white;
  width: 500px;
  margin: 0 auto;
  padding: 2%;
  border-radius: 25px;
  box-shadow: 0px 4px 70px rgba(199, 232, 124, 0.7);
}

form span {
  color: #4286B7;
  margin-bottom: 25px;
  padding-bottom: 25px;
}

input[type=text], 
input[type=password] {
  margin-bottom: 5%;
  border: none;
  border-bottom: 1px solid #aaa; 
  width: 100%;
  color: #333;
}

input[type=text]:focus, 
input[type=password]:focus {
  border-bottom: 1px solid #000; 
  outline: none;
}

input[type=button] {
  background-color: #4286B7;
  border: 3px solid #C7E87C;
  width: 40%;
  margin: 0 auto;
  float: none;
  outline: none;
} */
</style>
