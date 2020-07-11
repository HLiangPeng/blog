import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routerName: '写博客', // 路由名字
  },
  mutations: {
    changeRouter(state, name) {
      state.routerName = name
    }
  },
  actions: {},
  modules: {}
})
