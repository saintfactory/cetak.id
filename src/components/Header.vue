<template>
	<div class="header">
		<nav class="navbar navbar-expand-lg fixed-top navbar-light p-4">
			<router-link to='/' class="flex items-center">
				<img src="../assets/img/logo.png" class="logo" alt="Logo Cetak.id"/>
			</router-link>

			<button class="navbar-toggler text-muted m-2" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			
			<div class="collapse navbar-collapse m-2" id="navbarTogglerDemo02">
				<router-link class="navbar-nav nav-link" to='/tentang-kami'>Tentang Kami</router-link>
				<router-link class="navbar-nav nav-link" to='/cara-print'>Cara Print</router-link>
				<router-link to='/login' class="navbar-nav nav-link f6 link hover-white dib black dim mr3 mr4-ns">Login</router-link>
				<router-link to='/join' class="navbar-nav nav-link header--button f6 dib bg-animate hover-bg-green hover-white no-underline pv2 ph4 br-pill ba bw1">Daftar</router-link>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
	.nav-link {
		font-size: 14px;
		color: #000;
	}

	.nav-link:hover {
		color: #fff;
	}
</style>

