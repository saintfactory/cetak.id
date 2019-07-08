/*eslint no-console: ["error", {"allow": ["log", "debug", "dir"]}]*/
import Vue from 'vue'
import Axios from 'axios'
//import jwt_decode from 'jwt-decode'
import 'es6-promise/auto'

// In order that Axios work nice with Django CSRF
Axios.defaults.xsrfCookieName = 'csrftoken'
Axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const state = {
  authUser: {},
  isAuthenticated: false,
  jwt: localStorage.getItem('t'),
  endpoints: {
    obtainJWT: 'http://127.0.0.1:8000/api/auth/obtain_token/',
    refreshJWT: 'http://127.0.0.1:8000/api/auth/refresh_token/',
    baseUrl: 'http://127.0.0.1:8000/api/auth/',
    register: 'http://127.0.0.1:8000/signup/'
  }
}

const mutations = {
  setAuthUser(state, {
    authUser,
    isAuthenticated
  }){
    Vue.set(state, 'authUser', authUser)
    Vue.set(state, 'isAuthenticated', isAuthenticated)
  },
  updateToken(state, newToken){
    localStorage.setItem('t', newToken)
    state.jwt = newToken
  },
  removeToken(state){
    localStorage.removeItem('t')
    state.jwt = null
  }
}

// const actions = {
//   obtainToken(email, password){
//     const payload = {
//       email: email,
//       password: password
//     }

//     Axios.post(this.state.endpoints.obtainJWT, payload)
//       .then((response) => {
//         this.commit('updateToken', response.data.token)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   },
//   refreshToken(){
//     const payload = {
//       token: this.state.jwt
//     }

//     Axios.post(this.state.endpoints.refreshJWT, payload)
//       .then((response) => {
//         this.commit('updateToken', response.data.token)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   },
//   inspectToken(){
//     const token = this.state.jwt
//     if(token){
//       const decoded = jwt_decode(token)
//       const exp = decoded.exp
//       const orig_iat = decoded.orig_iat

//       if(exp - (Date.now()/1000) < 1800 && (Date.now()/1000) - orig_iat < 628200){
//         this.dispatch('refreshToken')
//       } else if (exp - (Date.now()/1000) < 1800){
//         //Do nothing, don't refresh
//       } else {
//         //user re-login
//       }
//     }
//   }
// }

export default {
  namespaced: true,
  state,
  mutations,
  //actions
}