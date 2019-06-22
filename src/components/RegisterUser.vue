<template>
    <div class="register-user pt4 relative">
        <h2 class="f2 white">Buat Akunmu disini</h2>
        <span class="i white">Silahkan isi data tempat dengan benar</span>
        <form class="md-layout white">
            <div class="dt w-100">
                <div class="dtc ph3 w-50">
                    <div class="fl">
                        <md-radio v-model="gender" value="pria">Pria</md-radio>
                        <md-radio v-model="gender" value="wanita">Wanita</md-radio>
                    </div>
                    <md-field>
                        <label>Nama Lengkap</label>
                        <md-input v-model="nama"></md-input>
                    </md-field>
                    <md-field>
                        <label>Email</label>
                        <md-input v-model="email" type="email"></md-input>
                    </md-field>
                    <md-field>
                        <label>No. Telepon</label>
                        <md-input v-model="telp"></md-input>
                    </md-field>
                    <div class="fl">
                        <md-radio v-model="job" value="pegawai">Pegawai</md-radio>
                        <md-radio v-model="job" value="mahasiswa">Mahasiswa</md-radio>
                        <md-radio v-model="job" value="lainnya">Lainnya
                        <md-field>
                            <md-input value="Lainnya"></md-input>
                        </md-field>
                        </md-radio>
                    </div>
                </div>
                <div class="dtc ph3 w-50">
                    <md-field>
                        <label>Kata Sandi</label>
                        <md-input v-model="password"></md-input>
                    </md-field>
                    <md-field>
                        <label>Konfirmasi Kata Sandi</label>
                        <md-input v-model="passwordConfirm"></md-input>
                    </md-field>
                    <md-button class="f6 link hover-white dib black dim mr3 mr4-ns md-raised md-accent">Daftar Sekarang</md-button>
                </div>   
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: 'RegisterUser',
    data: () => ({
      nama: null,
      password: null,
      passwordConfirm: null,
      gender: false,
      email: null,
      telp: null,
      job: false
    })
}
</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(white, A200), // The primary color of your application
  accent: md-get-palette-color(blue, A200), // The accent or secondary color
  theme: dark
));

@import "~vue-material/dist/theme/all"; // Apply the theme

.register-user {
    background-color: #4286B7;
    height: 700px;
} 

form {
    margin: 0 auto;
    padding: 2%;
}

.md-radio {
    display: flex;
}

</style>
