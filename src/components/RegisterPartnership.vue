<template>
	<div class="register-partnership">
		<img src="../assets/img/logo.png" class="logo" alt="Logo Cetak.id"/>
		<h2 class="f2 tc">Daftarkan Percetakanmu Disini</h2>
		<p class="i tc">Silahkan isi data tempat dengan benar</p>
		<form id="register-form">
			<div class="p-2">
				<label for="username" class="db fw4 lh-copy f6">Username</label>
				<input type="text" v-model="username" v-on:keyup.enter="signup()" name="username" class="p-2" required>
				<span class="text-danger" v-if="validationErrors.username" v-text="validationErrors.username"></span>
			</div>
			<div class="p-2">
				<label for="email" class="db fw4 lh-copy f6">Email</label>
				<input type="text" v-model="email" v-on:keyup.enter="signup()" name="email" class="p-2" required>
				<span class="text-danger" v-if="validationErrors.email" v-text="validationErrors.email"></span>
			</div>
			<div class="p-2">
				<label for="password1" class="db fw4 lh-copy f6">Password</label>
				<input type="password" v-model="password1" v-on:keyup.enter="signup()" name="password1" class="p-2" required>
				<span class="text-danger" v-if="validationErrors.password1" v-text="validationErrors.password1"></span>
			</div>
			<div class="p-2">
				<label for="password2"  class="db fw4 lh-copy f6">Confirm Password</label>
				<input type="password" v-model="password2" v-on:keyup.enter="signup()" name="password2" class="p-2" required>
				<span class="text-danger" v-if="validationErrors.password2" v-text="validationErrors.password2"></span>
			</div>
			<div class="p-2 mt3">
				<input type="button" value="Daftar Sekarang" @click="signup()" />
			</div>
		</form>
	</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
	name: 'RegisterPartnership',
	data(){
		return {
			username: '',
			email:'',
			password1:'',
			password2:'',
			validationErrors: {
				username: '',
				email:'',
				password1:'',
				password2:'',
			}
		}
	},
	methods: {
		signup() {
			if(this.validateForm()){
				const payload = {
					username: this.username,
					email: this.email,
					password1: this.password1,
					password2: this.password2
				}
				axios.post(this.$store.state.auth.endpoints.register, payload)
					.then(response => {
						this.info = response.data
						console.log(response.status)
						this.$router.push({path: '/login'})
					})
					.catch(error => {
						console.log(error)
						alert('Registrasi Gagal!')
					})
				}
		},

		validateForm(formId = 'register-form', errorObjectName = 'validationErrors'){
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
.register-partnership {
	min-height:100vh;
	margin-top: 0;
	padding-top: 50px;
	top: 0;
	text-align: left;
}

input[type="text"],
input[type="password"],
input[type="email"] {
	width: 100%;
	border: none;
	border-bottom: 1px solid #aaa;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus {
	outline: none;
	border-color: #000;
}

input[type="button"] {
  background-color: #1F99F1;
  color: #fff;
  border-radius: 40px;
  border: none;
  padding: 10px 15px 10px 15px; 
}

input[type="button"]:hover {
  background-color: greenyellow;
}

input[type="button"]:focus {
	outline: none;
}

form {
	margin: 0 auto;
	width: 60%;
}

img {
	margin: 0 auto;
	display: block;
	margin-bottom: 20px;
}
</style>