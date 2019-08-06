<template>
<div class="dashboard-partnership">
  <div class="mw-100 center">
    
    <div class="bars row fixed-top" >
      <div class="col-md-12">
        <div class="fl">
        <img src="../../assets/img/logo-putih.png" alt="" class="imgg tc">
        </div>

        <div class="fr f7">
          <span class="username">Nama Partnership</span>
                
          <!-- <div class="btn-group ml2">
            <button id="menuss" class="f6 btn btn-sm" data-toggle="dropdown">
            <i class="white fas fa-bars"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button class="f7 dropdown-item">Terima Orderan</button>
              <button class="f7 dropdown-item">Pengaturan</button>
              <button class="f7 dropdown-item">Logout</button>
            </div>
          </div> -->
        </div>
            
      </div>
    </div>
      
    <div class="container" id="side" >      
      <div class="row">
        <ul class="fl w-100 pl0" id="menus">
        <router-link class="tl pv1 pl3 f7 menu-list" tag="li" to="/dashboard-partnership/id/profil" >
          <i class="f6 fas fa-user"></i>Profil
        </router-link>

        <router-link class="tl pv1 pl3 f7 menu-list" tag="li" to="/dashboard-partnership/id/monitoring">
          <i class="f6 fas fa-envelope"></i>Monitoring
        </router-link>

        <router-link class="tl pv1 pl3 f7 menu-list" tag="li" to="/dashboard-partnership/id/etalase">
          <i class="f6 fas fa-file-alt"></i>Etalase
        </router-link>
        </ul>  
      </div>
      <hr>
      <div class="row">
        <ul class="fl w-100 pl0" id="menus">
        <router-link class="tl pv1 pl3 f7 menu-list" tag="li" to="/" >
          <i class="f6 fas fa-cog"></i>Pengaturan
        </router-link>

        <router-link class="tl pv1 pl3 f7 menu-list" tag="li" to="/">
          <i class="f6 fas fa-unlock"></i>Status
        </router-link>

        <router-link class="tl pv1 pl3 f7 menu-list" tag="li" to="/">
          <i class="f6 fas fa-sign-out-alt"></i>Logout
        </router-link>
        </ul>  
      </div>

      <hr>
    </div>

    <div class="fl" id="content" >
      <div class="row" id="content-main">           
        <div class=" pa3 col-md-12" id="content-load">
          <router-view></router-view>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
</script>

<style scoped>
.bars{
  background-color: rgb(35, 84, 152);
  box-shadow: 2px 2px 10px rgba(26, 99, 152, 0.408);
  color: #fff
}
.username{
  line-height: 55px;
  padding-right: 20px
}
#side {
  background-color: rgb(245, 245, 245);
  position: fixed;
  height: 100vh;
  padding-top: 4.5rem;
  width: 15%;
}
.router-link-exact-active{
  background-color:rgb(230, 230, 230);
  z-index: 10;
  font-weight: 600;
  color: #fff
}
.imgg{
  max-height: 40px;
  margin: 10px;
  margin-left: 20px;
}
.menu-list {
    list-style-type: none;
    text-decoration: none;
    color: rgb(22, 22, 22);
    line-height: 20px;
    padding: 10px;
    padding-left:20px 
}
.menu-list i{
  color: rgb(61, 61, 61);
  width: 20px;
  margin-right: 15px;
}
.menu-list:hover{
  background-color:rgb(235, 235, 235) !important;
  cursor: pointer
}

#content {
  float: right;
  width: 85%;
  padding: 2rem;
  padding-bottom: 2rem;
}
#content-main {
  min-height: 92vh;
  padding-top: 1.5vh;
}
.fa-sort-down, .fa-bell {
  color: #4286b7;
}
#menuss{
  border-radius: 50%;
  width: 30px;
  height: 30px;
}
#menuss:hover{
  background-color: #4286b7;
  color: #fff
}

</style>

