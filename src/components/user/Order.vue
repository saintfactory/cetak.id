<template>
	<div>
		<nav class="dt w-100 border-box pa3 ph5-ns">
		<a class="dtc v-mid mid-gray link dim w-25" href="/" title="Home">
			<img src="../../assets/img/logo.png" class="logo" alt="Logo Cetak.id">
		</a>
		<div class="dtc v-mid w-75 tr">
			<a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="User">
				<i class="fas fa-user"></i> 
				{{user}}
			</a>
			<a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" @click="logout" title="Logout">
				<i class="fas fa-sign-out-alt"></i>
				Logout
			</a>
		</div>
		</nav>

		<div class="mw9 center ph3-ns">
			<div class="cf ph2-ns">
				<div class="fl w-100 w-50-ns pa2">
					<input type="text" v-model="search" placeholder="Cari tempat cetak dokumen favoritmu" id="input-search" class="br3 pa2 w-80"/>
				</div>
				<div class="fr w-100 w-50-ns pa2">
					<i class="fas fa-map-marker-alt"></i>
					<input type="text" placeholder="Yogyakarta" id="input-search-location" class="pa2 w-70" />
				</div>
			</div>
		</div>

		<div class="mw9 center ph3-ns mt5-ns">
			<div class="cf ph2-ns">
				<div class="fl w-100 w-40-ns pa2 mh4 tl">
					<img src="../../assets/img/print1.png" alt="Profil Percetakan" class="w-90"/>

					<div>
						<p class="f4 b ttu mv4">detail pemesanan</p>	
						<div class="pv2">
							<label for="rangkap" class="f6 db lh-copy">Rangkap</label>
							<input type="number" name="rangkap" id="rangkap" />		
						</div>	
						<div class="pv2">
							<label for="halaman" class="f6 db lh-copy">Halaman</label>
							<input type="number" name="halaman" id="halaman" />		
						</div>
						<div class="pv2">
							<label for="jenis-kertas" class="f6 db lh-copy">Jenis Kertas</label>
							<select name="jenis-kertas" id="jenis-kertas">
								<option value="a4">A4</option>
								<option value="a3">A3</option>
								<option value="a2">A2</option>
							</select>
						</div>
						<div class="pv2">
							<label for="jenis-print" class="f6 db lh-copy">Jenis Print</label>
							<select name="jenis-print" id="jenis-print">
								<option value="hitam-putih">Hitam Putih</option>
								<option value="berwarna">Berwarna</option>
							</select>
						</div>
						<div class="pv2">
							<label for="finishing" class="f6 db lh-copy">Finishing</label>
							<select name="finishing" id="finishing">
								<option value="jilid">Jilid</option>
								<option value="hard-cover">Hard Cover</option>
							</select>
						</div>
						<div class="pv2">
							<label for="warna-cover" class="f6 db lh-copy">Warna Cover</label>
							<select name="warna-cover" id="warna-cover">
								<option value="putih">Putih</option>
								<option value="biru">Biru</option>
								<option value="kuning">Kuning</option>
								<option value="merah">Merah</option>
								<option value=hijau>Hijau</option>
							</select>
						</div>
					</div>
				</div>

				<div class="fl w-100 w-50-ns ph2">
					<h4 class="f2 tl">{{ name }}</h4>
					<p class="lh-copy tl">{{ location }}</p>
					<p class="b f4 mv3 pt3 tl">Upload dokumenmu disini</p>
          <div>
            <div id="file-box">
              <input id="input-file" placeholder="Tambahkan File" class="db mv3" type="file" name="file" />
              <p id="label-file">Lepaskan Filemu disini</p>
            </div>
          </div>
					<input id="input-message" name="message" class="db mv4" type="text" />
          <p class="label-message">Tambahkan Pesan</p>  
					<p class="f4 b ttu tl">pembayaran</p>
					<div class="flex justify-arround mb4">
						<div class="w-25 pa3 mr2 tl">
							<input type="radio" name="DANA" id="dana">
							<label for="DANA"> DANA</label>
						</div>
						<div class="w-25 pa3 mr2 tl">
							<input type="radio" name="Go-pay" id="gopay">
							<label for="Go-pay"> GO-Pay</label>
						</div>
						<div class="w-25 pa3 mr2 tl">
							<input type="radio" name="Tunai" id="tunai">
							<label for="tunai"> Tunai</label>
						</div>
					</div>

					<p class="f4 b ttu tl">total harga</p>
					<p class="f4 b tl">Rp {{ total }}</p>
					<hr>
					<input type="button" value="Cetak Sekarang" class="f6 grow no-underline br-pill ph4 pv3 mv2 b white" />
				</div>
			</div>
		</div>

		
	</div>
</template>

<script>
export default {
	name: 'Order',
	data() {
		return {
			user: 'Hilman Luthfi',
			name: 'Acadia Print',
			location: 'Jl. Kaliurang km 9,3, Gandok, Yogyakarta',
			total: '15.000,00'
		}
	}
}
</script>

<style scoped>
	#input-search {
    border: 1px solid #4286B7;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
  }

	#input-file {
		box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1);
		min-width: 600px;
		min-height: 350px;
    overflow: hidden;
    position: absolute;
    z-index: 1;
    display: inline;
    opacity: 0;
	}

	#input-message {
		border: 0.5px solid #a8a8a8;
		box-sizing: border-box;
    position: absolute;
		box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1);
		min-width: 100%;
		min-height: 170px;
    z-index: -1;

	}

  #input-search-location {
    border: 0px none;
    border-bottom: 2px solid #4286B7;
  }

  #label-file {
    text-align: center;
    display: inline-block;
    opacity: 0.3;
    padding: 20%;
  }

  #label-message {
    text-align: center;
    display: inline-block;
    opacity: 0.3;
    padding: 20%;
    
  }

  #file-box {
    font-size: 28px;
    border: 0.5px solid #a8a8a8;
		box-sizing: border-box;
		box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1);
		min-width: 100%;
		min-height: 350px;
		z-index: -1;
  }

	input[type=button] {
    background-color: #4286B7;
    border: none;
		float: right;
		margin-bottom: 50px;
	}

	input[type=number] {
		width: 20%;
	}

	select {
		width: 100%;
	}
	
  .fa-map-marker-alt {
    color: red;
  }

  .fa-sign-out-alt {
    color: red;
  }

  .fa-user {
    color: #4286B7;
  }  
</style>
