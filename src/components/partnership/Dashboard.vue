<template>
  <div class="dashboard-partnership">
    <div class="mw-100 center">
      <div class="cf ">
        
        <div class="fl" id="side">
            <div class="col-md-12">
            <img src="../../assets/img/logo-putih.png" alt="" class="imgg tc">
              </div>
              <ul class="fl w-100 pl0 mt0" id="menus">
                <router-link class="tl pv1 pl3 f7 menu-list" tag="li" to="/dashboard-partnership/id/profil" exact="router-link-exact-active">
                  <i class="fas fa-user"></i>Profil
                </router-link>

                <router-link class="tl pv1 pl3 f7 menu-list" tag="li" to="/dashboard-partnership/id/produk" exact="router-link-exact-active">
                  <i class="fas fa-paper-plane"></i>Produk
                </router-link>

                <router-link class="tl pv1 pl3 f7 menu-list" tag="li" to="/dashboard-partnership/id/pesanan" exact="router-link-exact-active">
                  <i class="fas fa-envelope"></i>Pesanan
                </router-link>

                <router-link class="tl pv1 pl3 f7 menu-list" tag="li" to="/dashboard-partnership/id/dicetak" exact="router-link-exact-active">
                  <i class="fas fa-print"></i>Monitoring Pesanan
                </router-link>

              </ul>
        </div>

        <div class="fl pv5 pa4" id="content">
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
  background-color: #125788;
  position: fixed;
  height: 100vh;
  width: 15%;
}
.router-link-exact-active{
  background-color:rgba(223, 223, 223, 0.4);
  z-index: 10;
}
.imgg{
  max-height: 50px;
  margin-top: 30px;
  margin-bottom: 26px;
}

.menu-list {
    list-style-type: none;
    text-decoration: none;
    color: #fff;
    line-height: 20px;
    position: relative;
    padding: 10px;
}
.menu-list i{
  color: #fff;
  margin-right: 10px;
}
.menu-list:hover{
background:rgba(223, 223, 223, 0.4) !important;
cursor: pointer
}
#content {
  background-color: #f5f5f5;
  float: right;
  min-height: 90vh;
  width: 85%;
  padding-bottom: 2rem;
}
#content-main {
  min-height: 90vh;
}
.fa-sort-down, .fa-bell {
  color: #4286b7;
}
</style>

