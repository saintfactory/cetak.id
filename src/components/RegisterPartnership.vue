<template>
<<<<<<< HEAD
	<div class="container-fluid">
		<div class="row justify-content-md-center join-partner">
			<div class="col-md-4 join-user-part">
				<p><img src="../assets/img/user.png" width="40%" alt="Join Cetak.id"/></p>
				<h1 class="font-subhero">Daftarkan Usahamu Disini</h1>
				<p class="font-primary">Lengkapi data diri akun kamu dengan <br> baik dan benar</p>
			</div>

			<div class="col-md-8 join-user-paid">
				<div class="row justify-content-md-center">
				<div class="col-md-7">
				<form>
					<div class="form-group">
						<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" v-model="username">
					</div>
					<div class="form-group">
						<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
					</div>
					
					<button type="submit" class="btn-block btn btn-primary mb-2" @click="login()">Masuk</button>
					<span class="font-primary">Belum punya akun Cetak ? <span><router-link to="/join" class="join"> Daftar Sekarang </router-link></span></span>
          		</form>
				</div>
				</div>
			</div>
		</div>
		<!-- <h2 class="f2 white tc">Daftarkan Percetakanmu Disini</h2>
		<p class="i white tc">Silahkan isi data tempat dengan benar</p>
		<form @submit="signup" class="white">
			<div class="pa2">
=======
	<div class="register-partnership">
		<img src="../assets/img/logo.png" class="logo" alt="Logo Cetak.id"/>
		<h2 class="f2 tc">Daftarkan Percetakanmu Disini</h2>
		<p class="i tc">Silahkan isi data tempat dengan benar</p>
		<form>
			<div class="p-2">
>>>>>>> frontend
				<label for="username" class="db fw4 lh-copy f6">Username</label>
				<input type="text" v-model="username" name="username" class="p-2">
			</div>
			<div class="p-2">
				<label for="email" class="db fw4 lh-copy f6">Email</label>
				<input type="text" v-model="email" name="email" class="p-2">
			</div>
			<div class="p-2">
				<label for="password1" class="db fw4 lh-copy f6">Password</label>
				<input type="password" v-model="password1" name="password1" class="p-2 ">
			</div>
			<div class="p-2">
				<label for="password2"  class="db fw4 lh-copy f6">Confirm Password</label>
				<input type="password" v-model="password2" name="password2" class="p-2">
			</div>
			<div class="p-2 mt3">
				<input type="button" value="Daftar Sekarang" @click="signup()" />
			</div>
		</form> -->
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
			password2:''
		}
	},
	methods: {
		signup() {
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
	}
}
</script>

<style scoped>
<<<<<<< HEAD
/* .register-partnership {
	background-color: #4286B7;
=======
.register-partnership {
>>>>>>> frontend
	min-height:100vh;
	margin-top: 0;
	padding-top: 50px;
	top: 0;
	text-align: left;
} */

.join-user-part{
	min-height: 100vh;
	background: #F4BE0B;
	padding-top: 10%;
}
.join-user-paid{
	min-height: 100vh;
	background: #fff;
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