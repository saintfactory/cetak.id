<template>
  <div class="row">
    <div class="left-side col-lg-5 col-md-5 col-sm-12 col-12">
      <img src="../assets/img/logo-putih.png" alt="Logo Cetakk" class="img-fluid mt-5 pt-3 d-block logo">
      <p class="font-italic text-center mt-5 p-3">Isi formulir berikut untuk memberi tahu detail dokumen yang akan dicetak Vendor</p>
      >>>
      <img src="../assets/img/undraw_drag_5i9w.svg" alt="Cetakk.id" class="img-left"> 
    </div>
    <div class="right-side col-lg-7 col-md-7 col-sm-12 col-12">
      
      <form class="text-left mt-4 mt-5 pt-3">
        <!-- <div class="form-group row ml-4">
          <label for="name" class="col-sm-2 col-form-label">Nama</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="name" placeholder="Nama" v-model="name" required>
          </div>
        </div>
        <div class="form-group row ml-4">
          <label for="paper_type" class="col-sm-2 col-form-label">Ukuran Kertas</label>
          <div class="col-sm-8">
            <select class="custom-select" id="paper_type" v-model="paper_type" required>
              <option selected>-Pilih ukuran kertas-</option>
              <option value="A">A4</option>
              <option value="F">F4</option>
            </select>
          </div>
        </div>
        <div class="form-group row ml-4">
          <label for="delivery" class="col-sm-2 col-form-label">Jasa Antar</label>
          <div class="col-sm-10" id="delivery">
            <div class="custom-control custom-radio">
              <input type="radio" id="customRadio1" name="delivery" v-model="delivery" value="D" required>
              <label class="custom-control-label pl-2" for="customRadio1">Ya</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio" id="customRadio2" name="delivery" v-model="delivery" value="TD" required>
              <label class="custom-control-label pl-2" for="customRadio2">Tidak</label>
            </div>
          </div>
        </div>
        <div class="form-group row ml-4">
          <label for="color" class="col-sm-2 col-form-label">Warna</label>
          <div class="col-sm-10" id="color">
            <div class="custom-control custom-radio">
              <input type="radio" id="customRadio1" name="color" v-model="color" value="B" required>
              <label class="custom-control-label pl-2" for="customRadio1">Ya</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio" id="customRadio2" name="color" v-model="color" value="NB" required>
              <label class="custom-control-label pl-2" for="customRadio2">Tidak</label>
            </div>
          </div>
        </div>
        <div class="form-group row ml-4">
          <label for="jilid" class="col-sm-2 col-form-label">Jilid</label>
          <div class="col-sm-10" id="jilid">
            <div class="custom-control custom-radio">
              <input type="radio" id="customRadio1" name="jilid" v-model="types" value="J" required>
              <label class="custom-control-label pl-2" for="customRadio1">Ya</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio" id="customRadio2" name="jilid" v-model="types" value="TJ" required>
              <label class="custom-control-label pl-2" for="customRadio2">Tidak</label>
            </div>
          </div>
        </div>
        <div class="form-group row ml-4">
          <label for="keterangan" class="col-sm-2 col-form-label">Keterangan tambahan</label>
          <div class="col-sm-8">
            <textarea class="form-control" id="keterangan" cols="30" rows="5" v-model="note" />
          </div>
        </div> -->
        <div class="form-group row ml-4">
          <label for="upload" class="col-sm-2 col-form-label">Upload dokumen</label>
          <div class="col-sm-8">
            <div class="custom-file">
              <input type="file" id="file" name="file" ref="file" class="custom-file-input" @change="handleDocument()">
              <label class="custom-file-label" for="file">Choose file</label>
            </div>
          </div>
        </div>
        <div class="form-group row pr-5 float-right">
          <button type="button" class="btn btn-info mr-5" @click="uploadDocument()">Submit</button>
        </div>
      </form>
    </div>  
  </div>
</template>

<script>
/*eslint no-console: ["error", {"allow": ["log", "debug", "dir"]}]*/
import Axios from 'axios'
import JQuery from 'jquery'
// Axios.defaults.headers.post['crossdomain'] = true

export default {
  name: 'Order',
  data() {
    return {
      name: '',
      paper_type: '',
      types: '',
      delivery: '',
      color: '',
      note: '',
      file: ''
    }
  },
  
  mounted(){
    let $ = JQuery
    $(".custom-file-input").on("change", function() {
      var fileName = $(this).val().split("\\").pop();
      $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    })
  },

  methods: {
    async orderNow() {
      const payload = {
        name: this.name,
        paper_type: this.paper_type,
        delivery: this.delivery,
        color: this.color,
        types: this.types,
        note: this.note
      }
      await Axios.post(this.$store.state.order.endpoints.order, payload, {
        headers: {
          'Access-control-Allow-Origin': true,
          'content-type': 'application/json'  
        },
        mode: 'cors',
      })
      .then(response => {
        console.log(response.status)
        console.log(response.data)
        console.log('Success')
        alert('Terima kasih sudah order, tunggu konfirmasi selanjutnya ya!')
        this.$router.push({path: '/'})
      })
      .catch(error => {
        console.log(error)
        console.log('Error')
      })
    },

    async uploadDocument(){ 
      let formData = new FormData()
      formData.append('file', this.file)
      await Axios.post(this.$store.state.order.endpoints.doc, formData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then(response => {
          console.log(response.status)
          console.log('Success!')
          alert('Terima kasih sudah order, tunggu konfirmasi selanjutnya ya!')
          //this.$router.push({path: '/'})
        })
        .catch(error => {
          console.log(error)
          console.log('Failed!')
        })
    },

    handleDocument(){
      this.file = this.$refs.file.files[0]
    }
  },
}

</script>

<style>
  * {
    overflow: hidden;
  }
  .left-side {
    background-color: #F4BE0B;
    height: 100vh;
  }

  .right-side {
    height: 100vh;
  }

  .logo {
    width: 30%;
    margin: 0 auto;
  }

  .img-left {
    margin-top: 10%;
  }

</style>