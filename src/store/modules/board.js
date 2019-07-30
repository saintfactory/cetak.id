/* eslint-disable */ 
import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        boards: []
    },
    mutations: {
        updateBoard: (state) => {
            axios.get('http://127.0.0.1:8000/api/board')
            .then(response => {
                state.boards = response.data
                this.$store.commit('setAuthUser')
                this.$store.getters('isLoggedIn')
                console.log(response.status)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
})