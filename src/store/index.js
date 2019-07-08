// import Vue from 'vue'
// import Vuex from 'vuex'
// import auth from './modules/auth'

// Vue.use(Vuex)

// export default new Vuex.Store({
//     modules: {
//         auth
//     }
// })
/* eslint-disable */ 
/*eslint no-console: ["error", {"allow": ["log", "debug", "dir"]}]*/
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
      baseUrl: 'http://127.0.0.1:8000/api/auth/',
      register: 'http://127.0.0.1:8000/signup/'
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
  actions: {
    login(){
      const payload = {
        username: this.username,
        password: this.password
      }
      axios.post(this.$state.endpoints.obtainJWT, payload)
        .then((response) => {
          this.commit('updateToken', response.data.token)
          // get and set auth user
          const base = {
            baseURL: this.state.endpoints.baseUrl,
            headers: {
              // Set your Authorization to 'JWT'
              Authorization: `JWT ${this.state.jwt}`,
              'Content-Type': 'application/json'
            },
            xhrFields: {
              withCredentials: true
            }
          }
          this.commit("setAuthUser",
            {authUser: response.data, isAuthenticated: true}
          )
          this.$router.push({name: 'dashboard-user'})
        })
        .catch((error) => {
          console.log(error);
          console.debug(error);
          console.dir(error);
          alert("The username or password is incorrect");
        })
    }
  }
})
