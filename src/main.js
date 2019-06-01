/* eslint-disable */ 
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
import Axios from 'axios'
import VueAxios from 'vue-axios'
import jwt_decode from 'jwt-decode'
import { decode } from 'punycode';

Vue.use(VueMaterial)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Axios, VueAxios)

const router = new VueRouter({routes})

const store = new Vuex.Store({
  state: {
    jwt: localStorage.getItem('t'),
    endpoints: {
      obtainJWT: 'http://0.0.0.0:10000/auth/obtain_token',
      refreshJWT: 'http://0.0.0.0:10000/auth/refresh_token'
    }
  },
  mutations: {
    updateToken(state, newToken){
      localStorage.setItem('t', newToken)
      state.jwt = newToken
    },
    removeToken(state){
      localStorage.removeItem('t')
      state.jwt = null
    }
  },
  actions: {
    obtainToken(username, password){
      const payload = {
        username: username,
        password: password
      }

      Axios.post(this.state.endpoints.obtainJWT, payload)
        .then((response) => {
          this.commit('updateToken', response.data.token)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    refreshToken(){
      const payload = {
        token: this.state.jwt
      }

      Axios.post(this.state.endpoints.refreshJWT, payload)
        .then((response) => {
          this.commit('updateToken', response.data.token)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    inspectToken(){
      const token = this.state.jwt
      if(token){
        const decoded = jwt_decode(token)
        const exp = decoded.exp
        const orig_iat = decoded.orig_iat

        if(exp - (Date.now()/1000) < 1800 && (Date.now()/1000) - orig_iat < 628200){
          this.dispatch('refreshToken')
        } else if (exp - (Date.now()/1000) < 1800){
          //Do nothing, don't refresh
        } else {
          //user re-login
        }
      }
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
