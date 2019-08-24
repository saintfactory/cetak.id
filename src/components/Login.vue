<template>
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
            this.$router.push({path: 'dashboard-user/id/profil'})
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
}
</style>
