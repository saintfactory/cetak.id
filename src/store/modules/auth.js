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
  jwt: localStorage.getItem('token'),
  endpoints: {
    obtainJWT: 'http://127.0.0.1:8000/api/auth/obtain_token/',
    refreshJWT: 'http://127.0.0.1:8000/api/auth/refresh_token/',
    baseUrl: 'http://127.0.0.1:8000/api/auth/'
  }
}

const mutations = {
  setAuthUser: (state, {
    authUser,
    isAuthenticated
  }) => {
    Vue.set(state, 'authUser', authUser)
    Vue.set(state, 'isAuthenticated', isAuthenticated)
  },
  updateToken: (state, newToken) => {
    // TODO: For security purposes, take localStorage out of the project.
    localStorage.setItem('token', newToken);
    state.jwt = newToken;
  },
  removeToken: (state) => {
    // TODO: For security purposes, take localStorage out of the project.
    localStorage.removeItem('token');
    state.jwt = null;
  }
}

const actions = {
  loginAction: () => {
    const payload = {
      username: this.username,
      password: this.password
    }
    Axios.post(this.state.endpoints.obtainJWT, payload)
      .then((response) => {
        this.$store.commit('updateToken', response.data.token)
        // get and set auth user
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}