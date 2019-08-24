<template>
	<div>
		<div class="row">
      <div class="col-sm-5">
        <img :src="product.image" alt="Profil Percetakan" class="w-75"/>
        <div class="text-left mt-4 pt-4 ml-5">
          <p class="text-uppercase font-weight-bold">detail print</p>	
          <div class="py-2">
            <label for="rangkap">Rangkap</label>
            <input type="number" class="d-block w-25" name="rangkap" id="rangkap" v-model="rangkap" />		
          </div>	
          <div class="py-2">
            <label for="halaman">Halaman</label>
            <input type="number" class="d-block w-25" name="halaman" id="halaman" v-model="halaman" />		
          </div>
          <div class="py-2">
            <label for="jenis-kertas" class="d-block">Jenis Kertas</label>
            <select class="w-25" name="jenis-kertas" id="jenis-kertas" v-model="jenisKertas">
              <option value="a4">A4</option>
              <option value="a3">A3</option>
              <option value="a2">A2</option>
            </select>
          </div>
          <div class="py-2">
            <label for="jenis-print" class="d-block">Jenis Print</label>
            <select class="w-50" name="jenis-print" id="jenis-print" v-model="jenisPrint">
              <option value="hitam-putih">Hitam Putih</option>
              <option value="berwarna">Berwarna</option>
            </select>
          </div>
          <div class="py-2">
            <label for="finishing" class="d-block">Finishing</label>
            <select class="w-50" name="finishing" id="finishing" v-model="finishing">
              <option value="jilid">Jilid</option>
              <option value="hard-cover">Hard Cover</option>
            </select>
          </div>
          <div class="py-2">
            <label for="warna-cover" class="d-block">Warna Cover</label>
            <select class="w-50" name="warna-cover" id="warna-cover" v-model="warnaCover">
              <option value="putih">Putih</option>
              <option value="biru">Biru</option>
              <option value="kuning">Kuning</option>
              <option value="merah">Merah</option>
              <option value=hijau>Hijau</option>
            </select>
          </div>
        </div>
      </div>

      <div class="col-sm-7 text-left">
        <h4 class="f2 tl">{{ product.title }}</h4>
        <p class="lh-copy">{{ product.description }}</p>
        <p class="text-left font-weight-bold">Upload dokumenmu disini</p>
        <p class="text-left small">Usahakan di save as PDF terlebih dahulu untuk menghindari perubahan format yang disebabkan perbedaan versi software.</p>
        <div>
          <!-- <p id="label-file">Lepaskan Filemu disini<br><br>atau </p> -->
          <input id="input-file" placeholder="Lepaskan Filemu disini" ref="file" type="file" @change="chooseFile()" name="file" />
        </div>
        <textarea id="input-message" name="message" class="d-block my-4" type="text" placeholder="Tambahkan Pesan" v-model="pesan"/>
        <p class="f4 font-weight-bold text-uppercase text-left">chcekout</p>
        <p class="text-uppercase text-left">total harga</p>
        <p class="text-left font-weight-bold">Rp {{ product.price }}</p>
        <hr>
        <input type="button" @click="orderNow" value="Cetak Sekarang" class="f6 grow no-underline br-pill ph4 pv3 mv2 b white" />
      </div>
		</div>
	</div>
</template>

<script>
/*eslint no-console: ["error", {"allow": ["log", "debug", "dir"]}]*/
import Axios from 'axios'
const doc = 'http://127.0.0.1:8000/document/'
const url = 'http://127.0.0.1:8000/api/product-list/'

export default {
	name: 'VendorDetail',
	props: ['id'],
	data() {
		return {
			user: 'Hilman Luthfi',
			name: 'Acadia Print',
			location: 'Jl. Kaliurang km 9,3, Gandok, Yogyakarta',
			rangkap: '',
			halaman: '',
			pesan: '',
			jenisKertas: '',
			jenisPrint: '',
			finishing: '',
			warnaCover: '',
      product: [],
      file: ''
		}
	},
	
	created() {
		Axios.get(url + this.$route.params.id)
			.then(response => {
				this.product = response.data
				console.log(response.status)
				console.log(response.data)
			})
			.catch(error => {
				console.log(error)
			})
	},

	methods: {
		orderNow() {
      let formData = new FormData()
      formData.append('file', this.file)
      Axios.post(doc, formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          console.log(response.status)
          console.log('Success!')
          this.product = response.data
          this.$router.push({name: 'completed'})
        })
        .catch(error => {
          console.log(error)
          console.log('Failed!')
        })
		},

    chooseFile() {
      this.file = this.$refs.file.files[0]
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

	#input-message {
		border: 0.5px solid #a8a8a8;
		box-sizing: border-box;
    padding: 3%;
		box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1);
		min-width: 600px;
		min-height: 170px;
		z-index: -1;
	}

  #input-search-location {
    border: 0px none;
    border-bottom: 2px solid #4286B7;
  }

  #input-file {
		box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1);
		min-width: 600px;
		min-height: 300px;
    position: relative;
    display: block;
    border: 0.5px solid #a8a8a8;
    box-sizing: border-box;
    background-color: #fff;
    overflow: hidden;
    padding: 20%;
    padding-left: 30%;
	}

  #label-file {
    text-align: center;
    display: inline;
    opacity: 0.3;
    z-index: 1;
  }

  #label-message {
    text-align: center;
    display: inline-block;
    opacity: 0.3;
    padding: 20%;
    font-size: 28px;
    z-index: 1;
  }

	#input-message::placeholder {
    text-align: left;
    display: inline-block;
    opacity: 0.8;
    font-size: 14px;
		z-index: 1;
	}

  .small {
    font-size: 10px;
  }

	input[type="text"]:focus {
    outline: none;
    border: 1px solid #aaa;
  }

	input[type=button] {
    background-color: #4286B7;
    border: 3px solid #C7E87C;
		float: right;
		margin-bottom: 50px;
		outline: none;
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