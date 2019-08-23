<template>
  <div class="container-fluid">
    <div class="card-deck mt-3">
      <div class="card" id="card" v-for="product in products || product in filter" :key="product.id">
        <router-link :to="{ name: 'vendor-detail', params: { id: product.id }}" id="card-vendors">
          <img :src="product.image" alt="Profil Percetakan" class="w-100 db"/>
          <div class="card-body">
              <p class="card-title font-weight-bold">{{product.title}}</p>
              <p class="card-text">{{product.description}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
import { mapState, Store } from 'vuex'
const url = 'http://127.0.0.1:8000/api/product-list/'
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

  #card-vendors {
    border: 2px solid #C7E87C;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    padding: 10px;
    min-height: 300px;
    max-width: 200px;
    text-decoration: none;
    text-align: left;
    font-size: 12px;
    color: #000;
  }

  #card-vendors:hover {
    color: gray;
  }

  #card {
    border: 0px;
    outline: none;
    background-color: transparent;
  }
</style>
