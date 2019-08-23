<template>
  <div id="profil">
    <div class="w-100">
      <h6 class="font-weight-bold">Data Pengguna</h6>
      <hr>
    </div>

    <div class="w-100">
      <form action="">
        <div class="mb-4">
          <label for="nama">Nama</label>
          <input type="text" name="nama" />
        </div>
        <div class="mb-4">
          <label for="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div class="mb-4">
          <label for="no_telp">No. Telepon</label>
          <input type="text" name="no_telp" />
        </div>
        <div class="mb-2">
          <label for="pekerjaan">Pekerjaan</label>
          <input type="radio" class="radio checked" name="mahasiswa" />
          <label for="mahasiswa" class="d-inline ml-2">Mahasiswa</label>
        </div>
        <div class="mb-2">
          <input type="radio" class="radio" name="pegawai" />
          <label for="pegawai" class="d-inline ml-2">Pegawai</label>
        </div>
        <div class="mb-4">
          <input type="radio" class="radio" name="lainnya" />
          <label for="lainnya" class="d-inline ml-2">Lainnya</label>
        </div>
        <div class="mb-4">
          <p class="font-weight-bold">Kata Sandi (Biarkan jika tidak ingin mengganti)</p>
          <label for="password_before">Kata Sandi Sebelumnya</label>
          <input type="password" name="pasword_before" />
        </div>
        <div class="mb-4">
          <label for="password_new">Kata Sandi Baru</label>
          <input type="password" name="pasword_new" />
        </div>
        <div class="mb-4">
          <label for="password_confirm">Konfirmasi Kata Sandi</label>
          <input type="password" name="pasword_confirm" />
        </div>
        <div class="mb-4">
          <button>Simpan Perubahan</button>
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

    }
  },
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

button {
  background-color: #1F99F1;
  color: #fff;
  border-radius: 40px;
  border: none;
  padding: 10px 15px 10px 15px; 
}

button:hover {
  background-color: #aaa;
}
</style>
