/*eslint no-console: ["error", {"allow": ["log", "debug", "dir"]}]*/

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import board from './modules/board'

Vue.use(Vuex)

// Make Axios play nice with Django CSRF
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default new Vuex.Store({
  state: {
    authUser: {},
    board:[],
    isAuthenticated: false,
    jwt: localStorage.getItem('token'),
    endpoints: {
      // TODO: Remove hardcoding of dev endpoints
      obtainJWT: 'http://127.0.0.1:8000/api/auth/obtain_token/',
      refreshJWT: 'http://127.0.0.1:8000/api/auth/refresh_token/',
      baseUrl: 'http://127.0.0.1:8000/api/auth/',
      signup: 'http://127.0.0.1:8000/signup/',
      board: 'http://127.0.0.1:8000/api/board/'
    }
  },
  mutations: {
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
    updateBoard: (state) => {
      axios.get(state.endpoints.board)
        .then(response => {
            state.boards = response.data
            // this.$store.commit('setAuthUser')
            // this.$store.getters('isLoggedIn')
            console.log(response.status)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
  },
  
  getters: {
    getUser: state => {
      return state.jwt
    },
    isLoggedIn: state => {
      return state.isAuthenticated === true
    }
  },

  actions: {
    fetchTokenActions: ({commit})=> {
      commit('updateToken', localStorage.getItem('token'))
    }
  },

  modules: {
    board
  }
})
