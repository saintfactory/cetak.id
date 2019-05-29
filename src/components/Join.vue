<template>
    <div class="join">
        <Header />
        <div class="dt center">
            <h2 class="tc f3 title lh-copy pt6">Bergabung dengan Cetak.id <br> sekarang</h2>
            <img class="dtc" src="../assets/img/undraw_ethereum_desire_wy1b.png" alt="Join Cetak.id" />
            <router-link to="/register-partnership" ><input type="submit" class="f6 link dim  br2 ph4 pv3 mb3 dib button-partnership dtc mh2 mv4" value="DAFTAR SEBAGAI PARTNERSHIP" href="#0" /></router-link>
            <router-link to="/register-user"><input type="submit" class="f6 link dim br2 ph4 pv3 mb3 dib button-user dtc mh2 mv4" value="DAFTAR SEBAGAI PENGGUNA" href="#0" /></router-link>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue'
export default {
    name: 'Join',
    components: {
        Header
    }
}
</script>

<style scoped>
    .title{
        color: #4286B7;
    }

    .button-partnership {
        color: #4286B7;
        background-color: #C7E87C;
        border: #4286B7;
    }

    .button-user {
        color: #C7E87C;
        background-color: #4286B7;
        border: #C7E87C;
    }
</style>
