<template>
  <div id="profil">
    <div class="w-100">
      <h6 class="font-weight-bold">Data Pengguna</h6>
      <hr>
    </div>

    <div class="w-100">
      <form id="profil-form">
        <div class="mb-4">
          <label for="nama">Nama</label>
          <input type="text" name="nama" v-model="nama" />
          <span class="text-danger" v-if="validationErrors.name" v-text="validationErrors.nama"></span>
        </div>
        <div class="mb-4">
          <label for="email">Email</label>
          <input type="email" name="email" v-model="email" />
          <span class="text-danger" v-if="validationErrors.email" v-text="validationErrors.email"></span>
        </div>
        <div class="mb-4">
          <label for="no_telp">No. Telepon</label>
          <input type="text" name="no_telp" v-model="no_telp" />
          <span class="text-danger" v-if="validationErrors.no_telp" v-text="validationErrors.no_telp"></span>
        </div>
        <div class="mb-2">
          <label for="pekerjaan">Pekerjaan</label>
          <input type="radio" class="radio checked" name="mahasiswa" v-model="mahasiswa" />
          <label for="mahasiswa" class="d-inline ml-2">Mahasiswa</label>
          <span class="text-danger" v-if="validationErrors.mahasiswa" v-text="validationErrors.mahasiswa"></span>
        </div>
        <div class="mb-2">
          <input type="radio" class="radio" name="pegawai" v-model="pegawai" />
          <label for="pegawai" class="d-inline ml-2">Pegawai</label>
          <span class="text-danger" v-if="validationErrors.pegawai" v-text="validationErrors.pegawai"></span>
        </div>
        <div class="mb-4">
          <input type="radio" class="radio" name="lainnya" v-model="lainnya" />
          <label for="lainnya" class="d-inline ml-2">Lainnya</label>
          <span class="text-danger" v-if="validationErrors.lainnya" v-text="validationErrors.lainnya"></span>
        </div>
        <div class="mb-4">
          <p class="font-weight-bold">Kata Sandi (Biarkan jika tidak ingin mengganti)</p>
          <label for="password">Kata Sandi Sebelumnya</label>
          <input type="password" name="pasword" v-model="password" />
          <span class="text-danger" v-if="validationErrors.password" v-text="validationErrors.password1"></span>
        </div>
        <div class="mb-4">
          <label for="password1">Kata Sandi Baru</label>
          <input type="password" name="password1" v-model="password1"/>
          <span class="text-danger" v-if="validationErrors.password1" v-text="validationErrors.password1"></span>
        </div>
        <div class="mb-4">
          <label for="password2">Konfirmasi Kata Sandi</label>
          <input type="password" name="password2" v-model="password2"/>
          <span class="text-danger" v-if="validationErrors.password2" v-text="validationErrors.password2"></span>
        </div>
        <div class="mb-4">
          <input @click="submitProfil()" type="button" value="Simpan Perubahan" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import axios from 'axios'
export default {
  name: 'Profil',
  data(){
    return {
      nama: '',
      email: '',
      no_telp: '',
      pegawai: '',
      mahasiswa: '',
      lainnya: '',
      password: '',
      password1: '',
      password2: '',
      validationErrors: {
        nama: '',
        email: '',
        no_telp: '',
        pegawai: '',
        mahasiswa: '',
        lainnya: '',
        password: '',
        password1: '',
        password2: '',
      }
    }
  },

  methods: {
    submitProfil() {
      if(this.validateForm) {
        const payload = {
          nama: this.nama,
          email: this.email,
          no_telp: this.no_telp,
          pegawai: this.pegawai,
          mahasiswa: this.mahasiswa,
          lainnya: this.lainnya,
          password: this.password,
          password1: this.password1,
          password2: this.password2,
        }
      }
    },

    validateForm(formId = 'profil-form', errorObjectName = 'validationErrors'){
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
#profil {
  text-align: left;
}

label {
  display: block;
  font-weight: 600; 
}

input[type="text"],
input[type="email"],
input[type="password"] {
  border: none;
  border-bottom: 1px solid #aaa;
  outline: none;
  display: block;
  width: 100%;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  border-bottom: 1px solid #000;
}

input[type="button"] {
  background-color: #1F99F1;
  color: #fff;
  border-radius: 40px;
  border: none;
  padding: 10px 15px 10px 15px; 
}

input[type="button"]:hover {
  background-color: #aaa;
}
</style>
