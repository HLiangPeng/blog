import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import api from './utils/api'
import utils from './utils/utils.js'
Vue.prototype.$api = api;
Vue.prototype.$utils = utils;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
