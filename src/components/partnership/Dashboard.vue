<template>
  <div class="dashboard-partnership">
    <div class="mw-100 center">
      <div class="cf ">
        
        <div class="fl" id="side">
            <img src="../../assets/img/logo-putih.png" alt="" class="imgg tc pa3 pv4">
              <ul class="fl w-100 pl0 mt0" id="menus">
                <router-link class="tl h2 pv1 pl3 f7 menu-list" tag="li" to="/dashboard-partnership/id/profil">
                  <i class="fas fa-user"></i>Profil
                </router-link>

                <router-link class="tl h2 pv1 pl3 f7 menu-list" tag="li" to="/dashboard-partnership/id/produk">
                  <i class="fas fa-paper-plane"></i>Produk
                </router-link>

                <router-link class="tl h2 pv1 pl3 f7 menu-list" tag="li" to="/dashboard-partnership/id/pesanan">
                  <i class="fas fa-envelope"></i>Pesanan
                </router-link>

                <router-link class="tl h2 pv1 pl3 f7 menu-list" tag="li" to="/dashboard-partnership/id/dicetak">
                  <i class="fas fa-print"></i>Monitoring Pesanan
                </router-link>

              </ul>
        </div>

        <div class="fl pv5 pa3" id="content">
          <div class="flex flex-column">
            <div class="w-100-ns pa1 mb2">
              <span class="fr f7-ns">
                <a class="ph2" href><i class="fas fa-bell"></i></a>
                partnership name
                <a class="ph2" href>
                  <i class="fas fa-sort-down"></i>
                </a>
              </span>
            </div>

            <div class="pv3 pa3 bg-white w-100 mt2" id="content-main">
              <div class="w-100-ns ">
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
#side {
  background-color: #4286b7;
  position: fixed;
  height: 100vh;
  width: 15%;
}
.imgg{
  max-height: 35px;
}
.menu-list {
    list-style-type: none;
    text-decoration: none;
    color: #fff;
    line-height: 20px;
}
.menu-list i{
  color: #fff;
  margin-right: 10px;
}
.menu-list:hover{
background:rgba(223, 223, 223, 0.4) !important;
}
#content {
  background-color: #eef6f7;
  float: right;
  min-height: 90vh;
  width: 85%;
  padding-bottom: 1rem;
}
#content-main {
  min-height: 90vh;
}
.fa-sort-down, .fa-bell {
  color: #4286b7;
}
</style>

