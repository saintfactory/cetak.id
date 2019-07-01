/*eslint no-console: ["error", {"allow": ["log"]}]*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'tachyons'
import routes from './routes'
import './styles.css'
import store from '@/store'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// Vue.use(VueMaterial)
Vue.config.productionTip = false
Vue.use(VueRouter)
//Vue.prototype.$store = store

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
