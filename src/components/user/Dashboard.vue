<template>
  <div class="dashboard-user">
    <nav class="dt w-100 border-box pa3 ph5-ns">
      <a class="dtc v-mid mid-gray link dim w-25" href="/" title="Home">
        <img src="../../assets/img/logo.png" class="logo" alt="Logo Cetak.id">
      </a>
      <div class="dtc v-mid w-75 tr">
        <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="User">{{user}}</a>
        <button class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" @click="logout" title="Logout">Logout</button>
      </div>
    </nav>
    <div class="dt w-100">
      <input type="text" v-model="search" placeholder="Cari tempat cetak dokumen favoritmu" class="dtc w-50-ns w-100 br3 input"/>
      <input id="search-location" type="text" class="dtc w-40-ns w-100 ml3" />
    </div>
    <div class="flex pa2 justify-between ph5" >
      <div class="fl w-50 w-25-m w-20-l pa2 " v-for="board in boards" :key="board.id">
        <a href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music" class="db link dim tc grow dashboard--card">
          <img src="../../assets/img/print1.png" alt="Profil Percetakan" class="w-100 db"/>
          <dl class="mt2 f6 lh-copy ph3">
            <dt class="clip">Title</dt>
            <dd class="ml0 black truncate w-100 tl">{{board.name}}</dd>
            <dt class="clip">Artist</dt>
            <dd class="ml0 gray truncate w-100 tl">{{board.description}}</dd>
          </dl>
        </a>
      </div>
    </div>   
  </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
import { mapGetters } from 'vuex'

const url = 'http://127.0.0.1:8000/api/board/'

export default {
  name: 'DashboardUser',  
  props: {
    board: Object
  },
  data() {
    return {
      user: 'Hilman Luthfi',
      boards: [],
      search: null
    }
  },
  mounted() {
    axios.get(url)
      .then(response => {
        this.boards = response.data
        this.$store.commit('setAuthUser')
        this.$store.getters('isLoggedIn')
        console.log(response.status)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    logout(user){
      this.$store.commit('removeToken', user)
      this.$router.push({name: 'login'})
    }
  }
}
</script>