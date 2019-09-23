<template>
    <div class="based">
        <div class="header">
            <nav class="navbar navbar-expand-lg navbar-dark nav-content fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand"><router-link to="/home" class="nav-link">
                    <img src="../../assets/img/logokuning.png" height="40" alt="">
                    </router-link>
                    </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a><router-link to="/kebijakan" class="nav-link">Kebijakan</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a><router-link to="/cara" class="nav-link">Cara Cetak</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a><router-link to="/tentang" class="nav-link">Tentang Kami</router-link></a>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a><router-link to='/join' class="nav-link">Daftar</router-link></a>
                    </li>
                    <li class="nav-item" id="font-pbtn">
                        <a><router-link to='/login' class="nav-link btn btn-block btn-outline-primary" id="font-pbtn">Masuk</router-link></a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>

        <div class="content">
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Header'
}
</script>


