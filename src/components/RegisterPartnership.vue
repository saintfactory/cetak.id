<template>
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
				<label for="username" class="db fw4 lh-copy f6">Username</label>
				<input type="text" v-model="username" name="username" class="pa2 input-reset ba bg-transparent w-100 measure white">
			</div>
			<div class="pa2">
				<label for="email" class="db fw4 lh-copy f6">Email</label>
				<input type="text" v-model="email" name="email" class="pa2 input-reset ba bg-transparent w-100 measure white">
			</div>
			<div class="pa2">
				<label for="password1" class="db fw4 lh-copy f6">Password</label>
				<input type="password" v-model="password1" name="password1" class="pa2 input-reset ba bg-transparent w-100 measure white">
			</div>
			<div class="pa2">
				<label for="password2"  class="db fw4 lh-copy f6">Confirm Password</label>
				<input type="password" v-model="password2" name="password2" class="pa2 input-reset ba bg-transparent w-100 measure white">
			</div>
			<div class="pa2 mt3">
				<input
					class="f6 dib bg-animate hover-bg-green hover-white no-underline pv2 ph4 br-pill ba bw1"
					type="submit"
					value="Daftar Sekarang"
				/>
			</div>
		</form> -->
	</div>
</template>

<script>
export default {
	
	name: 'RegisterPartnership',
	data: () => ({
		username: '',
		email:'',
		password1:'',
		password2:''
	}),
	methods: {
		signup() {
			//TODO: User registration method
		}
	}
}
</script>

<style scoped>
/* .register-partnership {
	background-color: #4286B7;
	min-height:100vh;
	margin-top: 0;
	padding-top: 20px;
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
</style>