import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    TOKEN: ''
  },
  getters: {
    getToken: (state) => {
      return state.TOKEN
    }
  },
  mutations: {
    setToken(state, reason) {
      state.TOKEN = reason
    },
  },
  actions: {},
  modules: {}
})
