<template>
  <div class="dashboard-user">
    <nav class="dt w-100 border-box pa3 ph5-ns">
      <a class="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
        <img src="../img/Logo.png" class="dib w3 h2 br-100" alt="Logo Cetak.id">
      </a>
      <div class="dtc v-mid w-75 tr">
        <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="About">Services</a>
        <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">Blog</a>
        <a class="link dim dark-gray f6 f5-ns dib" href="#" title="Contact">Join Us</a>
      </div>
    </nav>
    <div class="cf pa2" v-for="item in items" :key="item">
      <div class="fl w-50 w-25-m w-20-l pa2">
        <a href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music" class="db link dim tc">
          <img :src="item.img" :alt="item.alt" class="w-100 db outline black-10"/>
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
const items = [
    {
      id: 1,
      name: 'Acadia',
      location: 'Jakal Km 13,5',
      img: 'http://is4.mzstatic.com/image/thumb/Music49/v4/e9/4c/2d/e94c2d5f-bdb0-c565-4cc2-f9dfcf7f0b87/source/400x40000bb.png',
      alt: 'Print Profile'
    },
    {
      id: 2,
      name: 'Graphico',
      location: 'Jakal Km 14 UII',
      img: 'http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png',
      alt: 'Print Profile'
    },
    {
      id: 3,
      name: 'Print Media',
      location: 'Jakal Km 14 UII',
      img: 'http://is1.mzstatic.com/image/thumb/Music71/v4/c8/2d/b1/c82db1cd-9dc5-d7cb-2a34-735cf47bb809/source/400x40000bb.png',
      alt: 'Print Profile'
    }
  ]
export default {
  name: 'DashboardUser',  
  props: {
    item: Object
  },
  data() {
    items
  }
}
</script>