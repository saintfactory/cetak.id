import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'tachyons'
import routes from './routes'
import './styles.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(VueMaterial)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
