<template>
  <div class="register-user pt4 relative">
    <h2 class="f2 white">Buat Akunmu disini</h2>
    <span class="i white">Silahkan isi data tempat dengan benar</span>
    <form class="md-layout white tl" @submit="registerUser" method="post" action="/">
      <div class="dt w-100">
        <div class="dtc ph3 w-50">
          <div class="db">
            <div class="ma3 di">
              <input 
                v-model="gender" 
                value="pria"
                type="radio"
                class=""
              />
              <label for="pria">Pria</label>
            </div>
            <div class="ma3 di">
              <input 
                v-model="gender" 
                value="wanita"
                type="radio"
                class=""
              />
              <label for="pria">Wanita</label>
            </div>
            <!-- <small class="i">{{ errorGender }}</small> -->
          </div>
          <div class="ma3">
            <label
              class="db fw4 lh-copy f6"
              for="nama"
            >
              Nama Lengkap
            </label>
            <input 
              v-model="nama"
              type="text"
              class="pa2 input-reset ba bg-transparent w-100 measure white"
            />
            <div v-if="errors.length">
              <small class="i red" v-for="error in errors" :key="error.id">{{error}}</small>  
            </div> 
          </div>
          <div class="ma3">
            <label
              for="email"
              class="db fw4 lh-copy f6"
            >
              Email
            </label>
            <input 
              v-model="email" 
              type="email"
              class="pa2 input-reset ba bg-transparent w-100 measure white"
            />
            <div v-if="errors.length">
              <small class="i red" v-for="error in errors" :key="error.id">{{error}}</small>  
            </div> 
          </div>
          <div class="ma3">
            <label
              for="telp"
              class="db fw4 lh-copy f6"
            >
              No. Telepon
            </label>
            <input 
              v-model="telp" 
              type="text"
              class="pa2 input-reset ba bg-transparent w-100 measure white"
            />
            <div v-if="errors.length">
              <small class="i red" v-for="error in errors" :key="error.id">{{error}}</small>  
            </div> 
          </div>
          <div class="fl">
            <div class="ma3">
              <input 
                type="radio"
                v-model="job" 
                value="pegawai"
              />
              <label for="pegawai">Pegawai</label>
            </div>
            <div class="ma3">
              <input
                type="radio" 
                v-model="job" 
                value="mahasiswa"
              />
              <label for="mahasiswa">Mahasiswa</label>
            </div>  
            <div class="ma3">
              <input 
                type="radio"
                v-model="job" 
                value="lainnya"
              />
              <input 
                value="Lainnya" 
                type="text"
                class="pa1 ba bg-transparent white"
              />
            </div>
          </div>
        </div>
        <div class="dtc ph3 w-50">
          <div class="ma3">
            <label
              class="db fw4 lh-copy f6"
              for="password"
            >
              Kata Sandi
            </label>
            <input 
              v-model="password" 
              class="pa2 input-reset ba bg-transparent w-100 measure white"
              type="password"
            />
            <div v-if="errors.length">
              <small class="i red" v-for="error in errors" :key="error.id">{{error}}</small>  
            </div> 
          </div>
          <div class="ma3">
            <label
              class="db fw4 lh-copy f6"
              for="passwordConfirm"
            >
              Konfirmasi Kata Sandi
            </label>
            <input 
              v-model="passwordConfirm" 
              class="pa2 input-reset ba bg-transparent w-100 measure white"
              type="password"
            />
            <div v-if="errors.length">
              <small class="i red" v-for="error in errors" :key="error.id">{{error}}</small>  
            </div> 
          </div>
          <input
            class="f6 dib bg-animate hover-bg-green hover-white no-underline pv2 ph4 br-pill ba bw1"
            type="submit"
            value="Daftar Sekarang"
          />
        </div>   
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'RegisterUser',
  data: () => ({
    errors: [],
    // errorGender: null,
    // errorName: null,
    // errorEmail:null,
    // errorJob:null,
    // errorPassword: null,
    // errorPasswordConfirm: null,
    nama: null,
    password: null,
    passwordConfirm: null,
    gender: false,
    email: null,
    telp: null,
    job: false
  }),
  methods: {
    registerUser:function(e){
      if(this.nama && this.password == this.passwordConfirm && this.gender && this.email && this.job && this.telp){
        return true
      } else {
        this.errors = [];
        if(!this.nama){
          this.errors.push("Nama tidak boleh kosong!")
        }
        if(!this.password){
          this.errors.push("Password harus diisi!")
        }
        if(this.passwordConfirm != this.password){
          this.errors.push("Password tidak sama!")
        }
        e.preventDefault();
      }
    }
  }
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

.input {
  display: flex;
}

</style>
