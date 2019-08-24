import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'tachyons'
import routes from './routes'
import './styles.css'
import store from '@/store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
  dsn: 'https://e6d1fecf04d242e1b4bb5ba787d0c8b4@sentry.io/1534815',
  integrations: [new Integrations.Vue({Vue, attachProps: true, logErrors: true})],
});

//Sentry.captureException(new Error("Something broke"));

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if(to.fullPath === '/dashboard-user/id/profil') {
    if(!store.state.auth.jwt) {
      next('/login')
    }
  }
  if(to.fullPath === '/login') {
    if(store.state.auth.jwt) {
      next('/dashboard-user/id/profil')
    }
  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.config.performance = true

const isDev = process.env.NODE_ENV !== "production"
Vue.config.performance = isDev