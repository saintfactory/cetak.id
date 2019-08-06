<template>
<div class="mt3">
  <form action>
    <table class="w-100">
      <tr>
        <td>
          <span class="fl f6 b db mb2">Profil Tempat</span>
        </td>
      </tr>
      <tr>
        <label for="name" class="fl f7 lh-copy">Nama Tempat</label>
        <input
          id="name_partner"
          class="input-reset mb2 db w-100"
          type="text"
          aria-describedby="name-desc"
        />
      </tr>
      <tr>
        <label for="name" class="fl f7 lh-copy">Kota</label>
        <input
          id="city_partner"
          class="input-reset mb2 db w-100"
          type="text"
          aria-describedby="name-desc"
        />
      </tr>
      <tr>
        <label for="name" class="fl f7 lh-copy">Alamat</label>
        <input
          id="address_partner"
          class="input-reset mb2 db w-100"
          type="text"
          aria-describedby="name-desc"
        />
      </tr>
      <tr>
        <label for="name" class="fl f7 lh-copy mb1">Bentuk Badan Usaha</label>
      </tr>
      <tr>
        <input class="radio fl mr2 checked" name="partner_type" type="radio" />
        <label class="fl f7 lh-copy pointer">Personal</label>
      </tr>
      <tr>
        <input class="radio fl mr2" name="partner_type" type="radio" />
        <label class="fl f7 lh-copy pointer mb2">Company</label>
      </tr>
      <tr>
        <label for="name" class="fl f7 lh-copy mt2">No. Telepon</label>
        <input
          id="number_partner"
          class="input-reset mb2 db w-100"
          type="text"
          aria-describedby="name-desc"
        />
      </tr>
      <tr>
        <label for="name" class="fl f7 lh-copy">Email</label>
        <input
          id="email_partner"
          class="input-reset mb2 db w-100"
          type="email"
          aria-describedby="name-desc"
        />
      </tr>
      <br>
      <!-- ......... -->

      <tr>
        <td>
          <span class="mt3 fl f6 b db mb2">Profil Pemilik</span>
        </td>
      </tr>
      <tr>
        <label for="name" class="fl f7 lh-copy">Nama Pemilik</label>
        <input
          id="name_owner"
          class="input-reset mb2 db w-100"
          type="text"
          aria-describedby="name-desc"
        />
      </tr>
      <tr>
        <label for="name" class="fl f7 lh-copy">Kata Sandi Sebelumnya</label>
        <input
          id="name_owner"
          class="input-reset mb2 db w-100"
          type="password"
          aria-describedby="name-desc"
        />
      </tr>
      <tr>
        <label for="name" class="fl f7 lh-copy">Kata Sandi Baru</label>
        <input
          id="name_owner"
          class="input-reset mb2 db w-100"
          type="password"
          aria-describedby="name-desc"
        />
      </tr>
      <tr>
        <label for="name" class="fl f7 lh-copy">Konfirmasi Kata Sandi Baru</label>
        <input
          id="name_owner"
          class="input-reset mb2 db w-100"
          type="password"
          aria-describedby="name-desc"
        />
      </tr>

      <tr>
        <input
          class="mt2 fl pa2 b ph3 pv2 input-reset ba pointer f7"
          type="submit"
          value="Simpan Perubahan"
        />
      </tr>
    </table>
  </form>
  </div>
</template>

<script>
</script>

<style scoped>
label{
  font-weight: 500 !important;
}
input {
  border: none;
}
input[type="text"],
input[type="number"],
input[type="password"],
input[type="email"],
textarea {
  border: none;
  border-bottom: 1px solid #aaa;
  color: #333;
  font-size: 12px;
  background-color: transparent;
}
input[type="text"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
textarea:focus {
  border-bottom: 1px solid #000;
  outline: none;
}
input[type="radio"] {
  vertical-align: middle;
  min-height: 20px;
}
.radio {
  display: flex;
  flex-direction: row;
}

.align {
  padding: 0;
  vertical-align: top;
}
.identity-part {
  min-height: 15rem;
}
.fa-circle,
.memo {
  color: #888;
}

.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  z-index: -1;
}
.inputfile + label {
  color: white;
  background-color: #c7e87c;
  display: inline-block;
}

.inputfile:focus + label,
.inputfile + label:hover {
  background-color: #acc969;
}

.inputfile + label {
  cursor: pointer;
}
input[type="submit"] {
  min-height: 2rem;
  background-color: #4286b7;
  color: #eef6f7;
  font-weight: 400;
}
input[type="submit"]:hover {
  background-color: #2d6791;
}
</style>
