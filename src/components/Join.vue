<template>
<div class="container-fluid">
    <Header />
        <div class="row justify-content-md-center join-part">
            <div class="col-md-12 mb-2">
                <h2 class="font-hero text-light">AYO BERGABUNG DENGAN CETAK.ID</h2>
            </div>

            <div class="col-md-12">
                <p><img src="../assets/img/join.png" alt="Join Cetak.id"/></p>
            </div>
            
            <div class="col-md-12">
                <router-link to="/register-partnership" ><input type="submit" class="btn btn-warning btn-second" value="DAFTAR SEBAGAI PARTNERSHIP" href="#0" /></router-link>
                <router-link to="/register-user"><input type="submit" class="btn btn-warning btn-second" value="DAFTAR SEBAGAI PENGGUNA" href="#0" /></router-link>
            </div>
        </div>

        <div class="row justify-content-md-center join-paid">
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
    .join-part{
        min-height: 80vh;
        background: url('../assets/img/rect.png') no-repeat center; 
        background-size: cover;
        background-color: #0E75D3;
        padding-top: 120px;
    }
    .join-paid{
        min-height: 20vh;
        background-color: #0E75D3;
    }
</style>
