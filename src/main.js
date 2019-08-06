import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'tachyons'
import routes from './routes'
import './styles.css'
import store from '@/store'
import 'bootstrap'

Vue.config.productionTip = false
Vue.use(VueRouter)

import '@/assets/fonts/all.css';

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if(to.fullPath === '/dashboard-user/id/vendors') {
    if(!store.state.auth.jwt) {
      next('/login')
    }
  }
  if(to.fullPath === '/login') {
    if(store.state.auth.jwt) {
      next('/dashboard-user/id/vendors')
    }
  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')