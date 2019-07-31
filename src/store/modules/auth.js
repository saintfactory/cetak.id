/*eslint no-console: ["error", {"allow": ["log", "debug", "dir"]}]*/
/* eslint-disable */
import Vue from 'vue'
import Axios from 'axios'
import 'es6-promise/auto'

// In order that Axios work nice with Django CSRF
Axios.defaults.xsrfCookieName = 'csrftoken'
Axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const state = {
  authUser: {},
  users: [],
  isAuthenticated: false,
  jwt: localStorage.getItem('token'),
  endpoints: {
    obtainJWT: 'http://127.0.0.1:8000/api/auth/obtain_token/',
    refreshJWT: 'http://127.0.0.1:8000/api/auth/refresh_token/',
    baseUrl: 'http://127.0.0.1:8000/api/auth/',
    register: 'http://127.0.0.1:8000/signup/'
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
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}