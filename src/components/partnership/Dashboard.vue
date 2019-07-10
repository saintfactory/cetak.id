<template>
  <div class="dashboard-partnership">
    <div class="mw9 center ph0-ns">
      <div class="cf ph0-ns">
        <div class="fl w-100 w-20-ns pa2" id="side">
            <img src="../../assets/img/logo.png" alt="">
        </div>
        <div class="fl w-100 w-80-ns pa3" id="content">
          <div class="flex flex-column">
            <div class="w-100-ns pa1 mb3">
              <span class="fr f7-ns">
                <a class="ph2" href><i class="fas fa-bell"></i></a>
                partnership name
                <a class="ph2" href>
                  <i class="fas fa-sort-down"></i>
                </a>
              </span>
            </div>

            <div class="bg-white w-100" id="content-main">
              <div class="w-100-ns ">
                <form action="">
                <table class="w-100">
                    <tr>
                        <td><span class="fl f6 b db mb2">Profile Tempat</span></td>
                    </tr>
                    <tr>
                        <label for="name" class="fl f7 lh-copy">Nama Tempat</label>
                        <input id="name_partner" class="input-reset mb2 db w-100" type="text" aria-describedby="name-desc"/>
                    </tr>
                    <tr>
                        <label for="name" class="fl f7 lh-copy">Kota</label>
                        <input id="city_partner" class="input-reset mb2 db w-100" type="text" aria-describedby="name-desc"/>
                    </tr>
                    <tr>
                        <label for="name" class="fl f7 lh-copy">Alamat</label>
                        <input id="address_partner" class="input-reset mb2 db w-100" type="text" aria-describedby="name-desc"/>
                    </tr>
                    <tr>
                        <label for="name" class="fl f7 lh-copy mb1"> Bentuk Badan Usaha</label>
                    </tr>
                    <tr>
                        <input class="fl ba b--black-20 mr2 checked" name="partner_type" type="radio"><label class="fl f7 lh-copy pointer mb0">Personal</label>
                    </tr>
                    <tr>
                        <input class="fl ba b--black-20 mr2" name="partner_type" type="radio"><label class="fl f7 lh-copy pointer mb2">Company</label>
                    </tr>
                    <tr>
                        <label for="name" class="fl f7 lh-copy">No. Telepon</label>
                        <input id="number_partner" class="input-reset mb2 db w-100" type="text" aria-describedby="name-desc"/>
                    </tr>
                    <tr>
                        <label for="name" class="fl f7 lh-copy">Email</label>
                        <input id="email_partner" class="input-reset mb2 db w-100" type="email" aria-describedby="name-desc"/>
                    </tr>

                    <!-- ......... -->

                    <tr>
                        <td><span class="mt3 fl f6 b db mb2">Profile Pemilik</span></td>
                    </tr>
                    <tr>
                        <label for="name" class="fl f7 lh-copy">Nama Pemilik</label>
                        <input id="name_owner" class="input-reset mb2 db w-100" type="text" aria-describedby="name-desc"/>
                    </tr>
                    <tr>
                        <label for="name" class="fl f7 lh-copy">Nomor Identitas Pemilik</label>
                        <input id="nik_owner" class="input-reset mb2 db w-100" type="text" aria-describedby="name-desc"/>
                    </tr>
                    <tr>
                        <label for="name" class="fl mb2 f7 lh-copy">Update Identitas Pemilik</label>
                    </tr>
                    <tr>
                      <div class="fl w-50 w-100-ns b--black-20 measure ba identity-part mb3">
                        <div class="fl w-60 w-60-ns measure identity-part">
                          <img class="mw5 mw-4-ns pa3 " src="../../assets/img/business-card.png" alt="">
                        </div>
                        <div class="fl w-40 w-40-ns measure identity-part">
                          <table class="pa3">
                            <tr>
                              <td class="align"><i class="f7 fas fa-circle"></i></td>
                              <td><span class="memo fl ph2 tl f7 lh-copy">Pilih file scan/foto kartu identitas KTP/Passport.</span> </td>
                            </tr>
                            <tr>
                              <td class="align"><i class="f7 fas fa-circle"></i></td>
                              <td><span class="memo fl ph2 tl f7 lh-copy">Foto identitas yang dilampirkan masih berlaku saat ini, harus jelas terbaca dan tidak blur.</span> </td>
                            </tr>
                            <tr>
                              <td class="align"><i class="f7 fas fa-circle"></i></td>
                              <td><span class="memo fl ph2 tl f7 lh-copy">Maksimal 3MB per file.</span> </td>
                            </tr>
                          </table>
                          <input type="file" name="file" id="file" class="inputfile" />
                          <label class="w-40 w-50-ns pa2 ml3 fl f5" for="file">Pilih file</label>
                          </div> 
                      </div>
                    </tr>
                    <tr>
                        <label for="name" class="fl f7 lh-copy">Kata Sandi Sebelumnya</label>
                        <input id="name_owner" class="input-reset mb2 db w-100" type="password" aria-describedby="name-desc"/>
                    </tr>
                    <tr>
                        <label for="name" class="fl f7 lh-copy">Kata Sandi Baru</label>
                        <input id="name_owner" class="input-reset mb2 db w-100" type="password" aria-describedby="name-desc"/>
                    </tr>
                    <tr>
                        <label for="name" class="fl f7 lh-copy">Konfirmasi Kata Sandi Baru</label>
                        <input id="name_owner" class="input-reset mb2 db w-100" type="password" aria-describedby="name-desc"/>
                    </tr>

                    <tr>
                        <input class="mt2 fl pa2 b ph3 pv2 input-reset ba grow pointer f6" type="submit" value="Simpan Perubahan">
                    </tr>
                </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardPartnership",
  props: {
    title: String
  },
  data() {
    return {
      authenticated: false,
      mockAccount: {
        email: "test",
        password: "123"
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "dashboard-partnership" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>

<style scoped>
#side {
  background-color: #4286b7;
  position: fixed;
  height: 100vh;
}
#content {
  background-color: #eef6f7;
  float: right;
  min-height: 100vh;
}
#content-main {
  padding: 10px;
  min-height: 80vh;
}
.fa-sort-down, .fa-bell {
  color: #4286b7;
}
input{
  border: none;
}
input[type="text"],input[type="number"],input[type="password"],input[type="email"], textarea {
      border: none;
      border-bottom: 1px solid #aaa;
      color: #333;
}
input[type="text"]:focus,input[type="number"]:focus,
input[type="email"]:focus,input[type="password"]:focus,textarea:focus {
  border-bottom: 1px solid #000;
  outline: none;
}
input[type="radio"] {
  max-height: 12px;
  vertical-align: middle;
  background-color: white;
}
input[type="submit"]{
  border-radius: 15px;
  min-height: 2.5rem;
  background-color: #4286B7;
  color: #eef6f7;
}
.align{
  padding: 0;
  vertical-align: top;
}
.identity-part{
  min-height: 18rem;
}
.fa-circle, .memo{
  color: #888;
}

.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
.inputfile + label {
    color: white;
    background-color: #C7E87C;
    display: inline-block;
    border-radius: 3px;
}

.inputfile:focus + label,
.inputfile + label:hover {
    background-color: red;
}

.inputfile + label {
	cursor: pointer; /* "hand" cursor */
}
.inputfile:focus + label {
	outline: 1px dotted #000;
	outline: -webkit-focus-ring-color auto 5px;
}
</style>
