<template>
  <div class="row">
    <div class="left-side col-lg-5 col-md-5 col-sm-12 col-12">
      <img src="../assets/img/logo-putih.png" alt="Logo Cetakk" class="img-fluid mt-5 pt-3 d-block logo">
      <p class="font-italic text-center mt-5 p-3">Isi formulir berikut untuk memberi tahu detail dokumen yang akan dicetak Vendor</p>
      >>>
      <img src="../assets/img/undraw_drag_5i9w.svg" alt="Cetakk.id" class="img-left"> 
    </div>
    <div class="right-side col-lg-7 col-md-7 col-sm-12 col-12">
      
      <form action="" class="text-left mt-4 mt-5 pt-3">
        <div class="form-group row ml-4">
          <label for="name" class="col-sm-2 col-form-label">Nama</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="name" placeholder="Nama" required>
          </div>
        </div>
        <div class="form-group row ml-4">
          <label for="ukuran" class="col-sm-2 col-form-label">Ukuran Kertas</label>
          <div class="col-sm-8">
            <select class="custom-select" id="ukuran" required>
              <option selected>-Pilih ukuran kertas-</option>
              <option value="a4">A4</option>
              <option value="f4">F4</option>
            </select>
          </div>
        </div>
        <div class="form-group row ml-4">
          <label for="jasa" class="col-sm-2 col-form-label">Jasa Antar</label>
          <div class="col-sm-10" id="jasa">
            <div class="custom-control custom-radio">
              <input type="radio" id="customRadio1" name="customRadio" required>
              <label class="custom-control-label pl-2" for="customRadio1">Ya</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio" id="customRadio2" name="customRadio" required>
              <label class="custom-control-label pl-2" for="customRadio2">Tidak</label>
            </div>
          </div>
        </div>
        <div class="form-group row ml-4">
          <label for="color" class="col-sm-2 col-form-label">Warna</label>
          <div class="col-sm-10" id="color">
            <div class="custom-control custom-radio">
              <input type="radio" id="customRadio1" name="customRadio" required>
              <label class="custom-control-label pl-2" for="customRadio1">Ya</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio" id="customRadio2" name="customRadio" required>
              <label class="custom-control-label pl-2" for="customRadio2">Tidak</label>
            </div>
          </div>
        </div>
        <div class="form-group row ml-4">
          <label for="jilid" class="col-sm-2 col-form-label">Jilid</label>
          <div class="col-sm-10" id="jilid">
            <div class="custom-control custom-radio">
              <input type="radio" id="customRadio1" name="customRadio" required>
              <label class="custom-control-label pl-2" for="customRadio1">Ya</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio" id="customRadio2" name="customRadio" required>
              <label class="custom-control-label pl-2" for="customRadio2">Tidak</label>
            </div>
          </div>
        </div>
        <div class="form-group row ml-4">
          <label for="keterangan" class="col-sm-2 col-form-label">Keterangan tambahan</label>
          <div class="col-sm-8">
            <textarea class="form-control" id="keterangan" cols="30" rows="5"></textarea>
          </div>
        </div>
        <div class="form-group row ml-4">
          <label for="upload" class="col-sm-2 col-form-label">Upload dokumen</label>
          <div class="col-sm-8">
            <div class="input-group">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">
                <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
              </div>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group row pr-5 float-right">
          <button class="btn btn-info mr-5" @click="orderNow">Submit</button>
        </div>
      </form>
    </div>  
  </div>
</template>

<script>
/*eslint no-console: ["error", {"allow": ["log", "debug", "dir"]}]*/
import Axios from 'axios'
const doc = 'http://127.0.0.1:8000/document/'

export default {
  name: 'Order',
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
  }
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