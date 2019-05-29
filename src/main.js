import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'tachyons'
import routes from './routes'
import './styles.css'


Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
