<template>
    <div class="header">
        <header class="flex fixed justify-between bb b--white-10 w-100">
            <div class="flex-grow pa3 flex items-center">
                <a class="f6 link hover-white dib black dim mr3 mr4-ns" href="#0">Tentang Kami</a>
                <a class="f6 link hover-white dib black dim mr3 mr4-ns" href="#">Cara Print</a>
            </div>
            <router-link to='/' class="flex items-center">
                <img src="../assets/img/logo.png" class="logo" alt="Logo Cetak.id"/>
            </router-link>
            <div class="flex-grow pa3 flex items-center">
                <router-link to='/login' class="f6 link hover-white dib black dim mr3 mr4-ns">Login</router-link>
                <router-link to='/join' class="header--button f6 dib bg-animate hover-bg-green hover-white no-underline pv2 ph4 br-pill ba bw1">Daftar</router-link>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>


