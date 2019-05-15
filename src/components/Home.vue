<template>
    <div class="home w-100">
        <div class="dt w-100">
            <div class="hero cover v-mid dtc w-100">
                <h2 class="white">Cetak Dokumen Kamu dengan Mudah dan Cepat di Mana Saja</h2>
                <p class="i white">Cetak.ID - Printing Apps Pertama di Indonesia </p>
                <img class="db center mv4" src="../assets/img/undraw_in_sync_xwsa.png" alt="Cetak dokumen mudah dengan cetak.id"/>
                <a class="hero--button f6 dib bg-animate grow hover-white hover-bg-green no-underline pv3 ph4 br-pill ba bw1"  href="#0">Cetak Sekarang</a>
            </div>
        </div>
        <h3 class="center mv4 fw1 f2">Bagaimana Caranya?</h3>
        <div class="feature flex justify-around w-100">
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
                <p class="f6 black lh-copy">Ambil hasil cetak langsung <br>
                 di tempat pilihan kamu
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            post: null
        }
    }
}
</script>

<style scoped>
    .hero--button {
        color: #C7E87C;
    }
</style>