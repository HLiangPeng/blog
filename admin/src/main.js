import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import api from './utils/api'
import utils from './utils/utils.js'
Vue.prototype.$api = api;
Vue.prototype.$utils = utils;
console.log(process.env.VUE_APP_BASE_API)
Vue.config.productionTip = false

Vue.use(mavonEditor)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
