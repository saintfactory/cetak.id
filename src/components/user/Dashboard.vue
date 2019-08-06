<template>
  <div class="dashboard-user" id="wrapper">
    <div id="side">
      <div class="sidebar-logo">
        <img src="../../assets/img/logo-putih.png" class="logo" alt="Logo Cetak.id">
      </div>
      
      <div class="sidebar-menu pt-5" id="sidebarMenu">
        <router-link class="menu-list" to="/dashboard-user/id/profil" tag="li" exact="router-link-exact-active">
          <i class="fas fa-user"></i>Profil
        </router-link>

        <router-link class="menu-list" to="/dashboard-user/id/notifikasi" tag="li" exact="router-link-exact-active">
          <i class="fas fa-bell"></i>Notifikasi
        </router-link>

        <router-link class="menu-list" to="/dashboard-user/id/vendors" tag="li" exact="router-link-exact-active">
          <i class="fas fa-print"></i>Cetak Pesanan
        </router-link>

        <router-link class="menu-list" to="/dashboard-user/id/histori" tag="li" exact="router-link-exact-active">
          <i class="fas fa-history"></i>Histori Pesanan
        </router-link>
      </div>
    </div>

    <div id="content" class="p-4">
      <nav class="dt w-100 p-3 px-5">
        <div class="dtc v-mid w-75 tr">
            <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="User">
              <i class="fas fa-user"></i> 
              {{user}}
            </a>
            <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns pointer" @click="logout" title="Logout">
              <i class="fas fa-sign-out-alt"></i>
              Logout
            </a>
        </div>
      </nav>

      <div class="row mt-4 mb-5">
        <div class="col-sm-5">
          <input type="text" v-model="search" placeholder="Cari tempat cetak dokumen favoritmu" id="input-search" class="br3 pa2 w-80 mh4"/>
        </div>
        <div class="col-sm-7">
          <i class="fas fa-map-marker-alt"></i>
          <input type="text" placeholder="Yogyakarta" id="input-search-location" class="pa2 w-70" />
        </div>
      </div>
      
      <div id="content-main" class="mt-4 p-5 w-100">
        <div class="w-100">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
import { mapState } from 'vuex';

const url = 'http://127.0.0.1:8000/api/product-list/'

export default {
  name: 'DashboardUser',  
  data() {
    return {
      user: 'Hilman Luthfi',
      search: null
    }
  },

  methods: {
    logout(user){
      this.$store.commit('auth/removeToken', user)
      this.$router.push({name: 'login'})
      this.$store.commit('auth/setAuthUser',
        { 
          authUser: null, 
          isAuthenticated: false
        }
      )
    },
  },
}
</script>

<style scoped>
  #side {
    min-width: 15%;
    min-height: 100vh;
    background-color: #125788;
    position: fixed;
    float: left;
    z-index: 1;
  }

  #content {
    min-width: 85%;
    min-height: 100vh;
    background-color: #f5f5f5;
    float: right;
  }

  #content-main {
    min-height: 90vh;
    background-color: #ffffff;
  }

  #toggler {
    background-color: #ffffff;
  }

  .sidebar-logo {
    max-height: 50px;
    margin-top: 30px;
    margin-bottom: 26px;
  }

  .menu-list {
    color: #ffffff;
    background-color: #125788;
    list-style-type: none;
    text-decoration: none;
    line-height: 20px;
    position: relative;
    padding: 10px;
    text-align: left;
  }

  .menu-list i {
    color: #ffffff;
  }

  .router-link-exact-active{
    background-color:rgba(223, 223, 223, 0.4);
    color: #C7E87C; 
    z-index: 10;
  }

  .menu-list i{
    color: #fff;
    margin-right: 10px;
  }

  .menu-list:hover{
    background:rgba(223, 223, 223, 0.4) !important;
    cursor: pointer;
    color: #C7E87C; 
  }

  #input-search {
    border: 1px solid #4286B7;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
  }

  #input-search-location {
    border: 0px none;
    border-bottom: 1px solid #4286B7;
    background-color: transparent;
  }

  input[type="text"]:focus {
    outline: none;
    border: 1px solid #aaa;
  }

  .fa-map-marker-alt {
    color: red;
  }

  .fa-sign-out-alt {
    color: red;
  }

  .fa-user {
    color: #4286B7;
  }

  @media (min-width: 576px) { 

   }  
</style>
