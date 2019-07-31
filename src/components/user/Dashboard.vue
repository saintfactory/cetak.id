<template>
  <div class="dashboard-user">

    <nav class="dt w-100 border-box pa3 ph5-ns">
      <a class="dtc v-mid mid-gray link dim w-25" href="/" title="Home">
        <img src="../../assets/img/logo.png" class="logo" alt="Logo Cetak.id">
      </a>
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

    <div class="dt w-100 mv3">
      <div class="dtc w-50-ns w-100">
        <input type="text" v-model="search" placeholder="Cari tempat cetak dokumen favoritmu" id="input-search" class="br3 pa2 w-80 mh4"/>
      </div>
      <div class="dtc w-40-ns w-100 ml3">
        <i class="fas fa-map-marker-alt"></i>
        <input type="text" placeholder="Yogyakarta" id="input-search-location" class="pa2 w-70" />
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
import { mapState } from 'vuex';

const url = 'http://127.0.0.1:8000/api/board/'

export default {
  name: 'DashboardUser',  
  data() {
    return {
      user: 'Hilman Luthfi',
      search: null
    }
  },

  //computed: mapState('auth',['isAuthenticated']),

  created() {
    // if(!this.$store.state.isAuthenticated) {
    //   this.$router.replace({ name: "login" });
    // }
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
    }
    
  },
}
</script>

<style scoped>
  #input-search {
    border: 1px solid #4286B7;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
  }

  #input-search-location {
    border: 0px none;
    border-bottom: 2px solid #4286B7;
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
</style>
