<template>
    <div class="flex pa2 justify-between ph5">
        <div class="fl w-50 w-25-m w-20-l pa2 " v-for="board in boards" :key="board.id">
            <router-link to="/dashboard-user/id/order" class="db link dim tc grow dashboard--card">
            <img src="../../assets/img/print1.png" alt="Profil Percetakan" class="w-100 db"/>
            <dl class="mt2 f6 lh-copy ph3">
                <dt class="clip">Title</dt>
                <dd class="ml0 black truncate w-100 tl">{{board.name}}</dd>
                <dt class="clip">Artist</dt>
                <dd class="ml0 gray truncate w-100 tl">{{board.description}}</dd>
            </dl>
            </router-link>
        </div>
    </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
import { mapState, Store } from 'vuex'
const url = 'http://127.0.0.1:8000/api/board/'
export default {
    name: 'ListVendor',
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
        this.$store.commit('auth/setAuthUser')
        this.$store.getters('auth/isLoggedIn')
        console.log(response.status)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    // this.$store.commit('updateBoard')
  },
}
</script>