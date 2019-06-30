<template>
  <div class="dashboard-user">
    <nav class="dt w-100 border-box pa3 ph5-ns">
      <a class="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
        <img src="../img/Logo.png" class="logo" alt="Logo Cetak.id">
      </a>
      <div class="dtc v-mid w-75 tr">
        <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="User">{{user}}</a>
        <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Logout">Logout</a>
      </div>
    </nav>
    <div class="flex pa2 justify-between" >
      <div class="fl w-50 w-25-m w-20-l pa2" v-for="item in items" :key="item.id">
        <a href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music" class="db link dim tc">
          <img :src="item.img" :alt="item.alt" class="w-100 db"/>
          <dl class="mt2 f6 lh-copy">
            <dt class="clip">Title</dt>
            <dd class="ml0 black truncate w-100">{{item.name}}</dd>
            <dt class="clip">Artist</dt>
            <dd class="ml0 gray truncate w-100">{{item.location}}</dd>
          </dl>
        </a>
      </div>
    </div>   
  </div>
</template>

<script>
import print1 from '../img/print1.png'
import print2 from '../img/print2.png'
import print3 from '../img/print3.png'
import print4 from '../img/print4.png'

const items = [
    {
      id: 1,
      name: 'Acadia',
      location: 'Jakal Km 13,5',
      img: print1,
      alt: 'Print Profile'
    },
    {
      id: 2,
      name: 'Graphico',
      location: 'Jakal Km 14 UII',
      img: print2,
      alt: 'Print Profile'
    },
    {
      id: 3,
      name: 'Print Media',
      location: 'Jakal Km 14 UII',
      img: print3,
      alt: 'Print Profile'
    },
    {
      id: 4,
      name: 'Sprint FCPY',
      location: 'Jakal Km 14 UII',
      img: print4,
      alt: 'Print Profile'
    }
  ]
export default {
  name: 'DashboardUser',  
  props: {
    item: Object,
  },
  data() {
    return {
      items,
      user: 'Hilman Luthfi'
    }
  },
}
</script>