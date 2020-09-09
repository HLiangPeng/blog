import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    routerName: '写博客', // 路由名字
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
    changeRouter(state, name) {
      state.routerName = name
    }
  },
  actions: {},
  modules: {}
})
