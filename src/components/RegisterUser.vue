<template>
    <div class="register-user pt4 relative">
        <h2 class="f2 white">Buat Akunmu disini</h2>
        <span class="i white">Silahkan isi data tempat dengan benar</span>
        <form class="md-layout white">
            <div class="dt w-100">
                <div class="dtc ph3 w-50">
                    <md-field>
                        <label>Nama Lengkap</label>
                        <md-input v-model="nama"></md-input>
                    </md-field>
                </div>
                <div class="dtc ph3 w-50">
                    <md-field>
                        <label>Password</label>
                        <md-input v-model="password"></md-input>
                    </md-field>
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
      password: null
    })
}
</script>

<style scoped>
.register-user {
    background-color: #4286B7;
    height: 900px;
} 

form {
    margin: 0 auto;
    padding: 2%;
}
</style>
