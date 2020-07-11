import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainWrite',
    component: () => import('../components/MainWrite/index.vue')
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  {
    // path: 'homeMain',
    // name: 'HomeMain',
    // component: () => import('../components/HomeMain/index.vue'),
    // children: [{
    //   path: '/write',
    //   name: 'MainWrite',
    //   component: () => import('../components/MainWrite/index.vue')
    // }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
