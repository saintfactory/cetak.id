<template>
    <div class="home w-100">
        <Header />
        <div class="dt w-100">
            <div class="hero cover v-mid dtc w-100">
                <h2 class="white">Cetak Dokumen Kamu dengan Mudah dan Cepat di Mana Saja</h2>
                <p class="i white">Cetak.ID - Printing Apps Pertama di Indonesia </p>
                <img class="db center mv4" src="../assets/img/undraw_in_sync_xwsa.png" alt="Cetak dokumen mudah dengan cetak.id"/>
                <a v-on:click="getStarted" class="hero--button f6 dib bg-animate grow hover-white hover-bg-green no-underline pv3 ph4 br-pill ba bw1" href="#feature">Cetak Sekarang</a>
            </div>
        </div>
        <h3 class="center mv4 fw1 f2">Bagaimana Caranya?</h3>
        <div class="flex justify-around w-100" id="feature">
            <div class="w-25">
                <img src="../assets/img/undraw_uploading_go67.png" alt="Upload Dokumen di Cetak.id">
                <p class="f5 black">Upload</p>
                <p class="f6 black lh-copy">Buat akun Cetak.ID, lalu <br>
                upload dokumen kamu dan <br>
                lakukan proses pembayaran
                </p>
            </div>
            <div class="w-25">
                <img src="../assets/img/undraw_printing_invoices_5r4r.png" alt="Upload Dokumen di Cetak.id">
                <p class="f5 black">Cetak</p>
                <p class="f6 black lh-copy">Dokumen kamu akan di cetak <br> 
                sesuai dengan tempat print pilihan kamu
                </p>
            </div>
            <div class="w-25">
                <img src="../assets/img/undraw_navigation_lytx.png" alt="Upload Dokumen di Cetak.id">
                <p class="f5 black">Ambil</p>
                <p class="f6 black lh-copy">
                    {{ content }}
                </p>
            </div>
        </div>
        <div class="feature2">
            <h1 class="feature2--title pt5">110.000+ Dokumen</h1>
            <p class="white">Sudah berhasil dicetak</p>
            <p class="white lh-copy">Ratusan ribu pengguna semakin mudah dan cepat<br>
                mencetak dokumen setelah menggunakan Cetak.ID
            </p>
            <a 
                v-on:click="getStarted" 
                class="hero--button f6 dib bg-animate grow hover-white hover-bg-green no-underline pv3 ph4 mv4 br-pill ba bw1" 
                href="#feature"
            >
                Cetak Sekarang
            </a>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
    name: 'Home',
    data() {
        return {
            content: 'Ambil hasil cetak langsung di tempat pilihan kamu'
        }
    },
    components: {
        Header,
        Footer
    },
    methods: {
        getStarted: function(){
            // alert("Welcome to Cetak.id! " + Date());
            document.getElementsByClassName("hero--button").scrollspy({target: ".home", offset: 100});
        }
    }
}
</script>

<style scoped>
    .hero--button {
        color: #C7E87C;
    }
</style>