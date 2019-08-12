<template>
	<div class="register-partnership">
		<h2 class="f2 white tc">Daftarkan Percetakanmu Disini</h2>
		<p class="i white tc">Silahkan isi data tempat dengan benar</p>
		<form @submit="signup" class="white">
			<div class="pa2">
				<label for="username" class="db fw4 lh-copy f6">Username</label>
				<input type="text" v-model="username" name="username" class="pa2 input-reset ba bg-transparent w-100 measure white">
			</div>
			<div class="pa2">
				<label for="email" class="db fw4 lh-copy f6">Email</label>
				<input type="text" v-model="email" name="email" class="pa2 input-reset ba bg-transparent w-100 measure white">
			</div>
			<div class="pa2">
				<label for="password" class="db fw4 lh-copy f6">Password</label>
				<input type="password" v-model="password" name="password" class="pa2 input-reset ba bg-transparent w-100 measure white">
			</div>
			<!-- <div class="pa2">
				<label for="password2"  class="db fw4 lh-copy f6">Confirm Password</label>
				<input type="password" v-model="password2" name="password2" class="pa2 input-reset ba bg-transparent w-100 measure white">
			</div> -->
			<div class="pa2 mt3">
				<input
					class="f6 dib bg-animate hover-bg-green hover-white no-underline pv2 ph4 br-pill ba bw1"
					type="submit"
					value="Daftar Sekarang"
				/>
			</div>
		</form>
	</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
	name: 'RegisterPartnership',
	data: () => ({
		username: '',
		email:'',
		password:'',
	}),
	methods: {
		signup() {
			//TODO: User registration method
			axios.post('http://127.0.0.1:8000/account/register/', {
				username: this.username,
				email: this.email,
				password: this.password
			})
				.then(response => {
					this.info = response.data
					console.log(response.data)
					alert('Registrasi Berhasil!')
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
.register-partnership {
	background-color: #4286B7;
	min-height:100vh;
	margin-top: 0;
	padding-top: 20px;
	top: 0;
	text-align: left;
}

form {
	margin: 0 auto;
}
</style>