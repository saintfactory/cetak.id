<template>
    <div class="flex pa2 justify-between ph5">
        <div class="fl w-50 w-25-m w-20-l pa2 " v-for="product in products || product in filter" :key="product.id">
            <router-link :to="{ name: 'vendor-detail', params: { id: product.id }}" class="db link dim tc grow dashboard--card">
            <!-- <router-link to="'/dashboard-user/id/vendor-detail/' + { params: {id: product.id}} + '/'" class="db link dim tc grow dashboard--card">   -->
            <img src="../../assets/img/print1.png" alt="Profil Percetakan" class="w-100 db"/>
            <dl class="mt2 f6 lh-copy ph3">
                <dt class="clip">Title</dt>
                <dd class="ml0 black truncate w-100 tl">{{product.name}}</dd>
                <dt class="clip">Artist</dt>
                <dd class="ml0 gray truncate w-100 tl">{{product.description}}</dd>
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
  name: 'Vendors',

  data() {
    return {
      user: 'Hilman Luthfi',
      products: [],
      search: null
    }
  },

  mounted() {
    axios.get(url)
      .then(response => {
        this.products = response.data
        console.log(response.status)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  computed: {
    filter(){
      return this.product.filter(products => {
        return product.name.toLowerCase().includes(this.search.toLowerCase)
      })
    }
  }
}
</script>

<style scoped>
  div:focus {
    outline: none;
  }
</style>
