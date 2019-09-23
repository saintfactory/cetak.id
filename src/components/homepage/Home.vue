<template>
	<div class="container-fluid">
		<!-- <Header /> -->
		<div class="hero cover row justify-content-md-center">
			<div class="hero-part col-md-6 text-left">
				<h1 class="font-hero white mb-3">Cetak dokumen kamu sekarang
				<br> cepat, mudah, dan dimana saja</h1>
				<p class="font-secondary font-weight-normal">Dikejar <span class="font-weight-bold">Deadline</span>? Tenang, ada <span class="font-weight-bold">Cetak.Id</span></p>
				<a v-on:click="getStarted" class="btn-based btn btn-warning">
					<router-link to='/join' class="btn-based btn">Cetak Sekarang</router-link></a>
			</div>
			<div class="hero-paid col-md-6">
			</div>
		</div>

		<div class="usefull row justify-content-md-center">
			<div class="col-md-12 cara" style="">
				<h3 class="center font-title mt-5">Bagaimana Caranya?</h3>
			</div>

			<div class="row justify-content-md-center batch">
				<div class="col-sm-4  ">
					<div class="col-md-12">
						<img class="gmbr" src="../../assets/img/batch1.png" alt="Upload Dokumen di Cetak.id">
					</div>
					<div class="col-md-12">
						<h5 class="text center font-subhero">UPLOAD</h5>
					</div>
					<div class="col-md-12">
						<p class="font-primary black lh-copy">Daftar akun lalu pilih tempat cetak <br> yang kamu mau kemudian upload file
						</p>
					</div>
				</div>

				<div class="col-sm-4  ">
					<div class="col-md-12">
						<img class="gmbr" src="../../assets/img/batch2.png" alt="Upload Dokumen di Cetak.id">
					</div>
					<div class="col-md-12">
						<h5 class="text center font-subhero">CETAK</h5>
					</div>
					<div class="col-md-12">
						<p class="font-primary black lh-copy">Dokumen akan dicetak <br> sesuai dengan tempat permintaan
						</p>
					</div>
				</div>

				<div class="col-sm-4  ">
					<div class="col-md-12">
						<img class="gmbr" src="../../assets/img/batch3.png" alt="Upload Dokumen di Cetak.id">
					</div>
					<div class="col-md-12">
						<h5 class="text center font-subhero">AMBIL</h5>
					</div>
					<div class="col-md-12 text-center">
						<p class="font-primary black lh-copy">Ambil hasil cetak dokumen <br> di tempat pilihan sekaligus bayar
						</p>
					</div>
				</div>

			</div>
		</div>

		<div class="cover row justify-content-md-center footer">
			<div class="col-sm-12 part-foot">
				<h1 class="font-hero yellow mb-3">1000+ Dokumen</h1>
				<h2 class="font-subhero white mb-3">Sudah berhasil dicetak</h2>
				<p class="font-primary white mb-4 font-italic">Ribuan pengguna semakin mudah dan cepat<br>
						mencetak dokumen setelah menggunakan Cetak.ID
				</p>
				<a v-on:click="getStarted" class="btn-based btn btn-warning" href="#feature">
					<router-link to='/join' class="btn-based btn">Cetak Sekarang</router-link></a>
			</div>
		</div>
		
		<div class="cover row justify-content-md-center super-foot text-left pl-5 pt-4">
			<div class="col-md-4">
				<img src="../../assets/img/logo-putih.png" height="40" alt="">
				<p class="white font-primary">Copyright Cetak.Id 2019</p>
			</div>

			<div class="col-md-8">
				<table class="table table-sm table-borderless">
					<thead class="font-primary text-light font-weight-bold">
						<th>Navigasi</th>
						<th>Sosial Media</th>
						<th>Info & Kontak</th>
					</thead>
					<tbody>
						<tr>
							<td><a><router-link to='/tentang-kami' class="white font-smaller">Tentang Kami</router-link></a></td>
							<td><a><router-link to='/tentang-kami' class="white font-smaller">Facebook</router-link></a></td>
							<td><a><router-link to='/tentang-kami' class="white font-smaller">+62 895 6169 52598</router-link></a></td>
						</tr>
						<tr>
							<td><a><router-link to='/tentang-kami' class="white font-smaller">Kebijakan</router-link></a></td>
							<td><a><router-link to='/tentang-kami' class="white font-smaller">Instagram</router-link></a></td>
							<td><a><router-link to='/tentang-kami' class="white font-smaller">+62 838 6967 9347</router-link></a></td>
						</tr>
						<tr>
							<td><a><router-link to='/tentang-kami' class="white font-smaller">Cara Cetak</router-link></a></td>
							<td><a><router-link to='/tentang-kami' class="white font-smaller">Linked In</router-link></a></td>
							<td><a><router-link to='/tentang-kami' class="white font-smaller">cetak.info@gmail.com</router-link></a></td>
						</tr>
					</tbody>
				</table>
			</div>

		</div>

	</div>
</template>

<script>
// import Header from './Header.vue'

export default {
	name: 'Home',
	data() {
		return {
			content: 'Ambil hasil cetak langsung di tempat pilihan kamu'
		}
	},
	components: {
		// Header
	},
	methods: {
		getStarted: function(){
			document.getElementsByClassName("hero--button").scrollspy({target: ".home", offset: 100});
		}
	},
}
</script>

<style scoped>
.btn-based{
    border-radius: 25px;
    color: white;
	text-decoration: none;
}
.btn-based:hover{
    color: #0065C2 !important;
    text-decoration: none;
}
.btn-second{
    border-radius: 5px;
    height: 50px;
    width: 300px;
    margin: 30px;
    color: white;
    text-decoration: none;
    font-weight: 700
}
.btn-primary{
    background-color: #0065C2 !important
}
.btn-primary:hover{
    background-color: rgb(8, 85, 157) !important
}
.hero {
    background:url('../../assets/img/bghome.png') no-repeat center;
    min-height: 950px;
    background-color: rgba(255, 255, 255, 0.816);
    padding-top: 200px
}
.hero-part{
    padding: 100px;
}
.hero-paid{
    background: url('../../assets/img/home-paid.png') no-repeat;
}
section{
    margin-top: 10vh
}
.home-image{
    min-width: 70%
}

.hero--button {
    color: #C7E87C;
}

.gmbr{
	min-height: 290px;
	max-height: 290px;
	margin-bottom: 40px;
}

.gmbr:hover{
	transition: transform .5s !important;
	transform: scale(1.1) !important
}
</style>