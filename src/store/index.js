/*eslint no-console: ["error", {"allow": ["log", "debug", "dir"]}]*/

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import auth from './modules/auth'
import order from './modules/order'

Vue.use(Vuex)

// Make Axios play nice with Django CSRF
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default new Vuex.Store({
  modules: {
    auth,
    order
  }
})


