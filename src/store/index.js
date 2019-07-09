/*eslint no-console: ["error", {"allow": ["log", "debug", "dir"]}]*/
/* eslint-disable */ 
// import Vue from 'vue'
// import Vuex from 'vuex'
// import auth from './modules/auth'

// Vue.use(Vuex)

// export default new Vuex.Store({
//     modules: {
//         auth
//     }
// })

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// Make Axios play nice with Django CSRF
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default new Vuex.Store({
  state: {
    authUser: {},
    isAuthenticated: false,
    jwt: localStorage.getItem('token'),
    endpoints: {
      // TODO: Remove hardcoding of dev endpoints
      obtainJWT: 'http://127.0.0.1:8000/api/auth/obtain_token/',
      refreshJWT: 'http://127.0.0.1:8000/api/auth/refresh_token/',
      baseUrl: 'http://127.0.0.1:8000/api/auth/'
    }
  },

  actions: {
    loginAction(){
      // const payload = {
      //   username: this.username,
      //   password: this.password
      // }
      axios.post(this.state.endpoints.obtainJWT)
        .then((response) => {
          this.$store.commit('updateToken', response.data.token)
          // get and set auth user
          const base = {
            baseURL: this.$store.state.endpoints.baseUrl,
            headers: {
              // Set your Authorization to 'JWT'
              Authorization: `JWT ${this.$store.state.jwt}`,
              'Content-Type': 'application/json'
            },
            xhrFields: {
              withCredentials: true
            }
          }
          this.$store.commit("setAuthUser",
            {authUser: response.data, isAuthenticated: true}
          )
          this.$router.push({name: 'dashboard-user'})
        })
        .catch((error) => {
          console.log(error);
          console.debug(error);
          console.dir(error);
        })
    },
    logoutAction(){
      this.$store.commit('removeToken')
    }
  },

  mutations: {
    setAuthUser(state, {
      authUser,
      isAuthenticated
    }) {
      Vue.set(state, 'authUser', authUser)
      Vue.set(state, 'isAuthenticated', isAuthenticated)
    },
    updateToken(state, newToken) {
      // TODO: For security purposes, take localStorage out of the project.
      localStorage.setItem('token', newToken);
      state.jwt = newToken;
    },
    removeToken(state) {
      // TODO: For security purposes, take localStorage out of the project.
      localStorage.removeItem('token');
      state.jwt = null;
    }
  },

  getters: {
    getUser: state => {
      return state.authUser
    }
  }
})
