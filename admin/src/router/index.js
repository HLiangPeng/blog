import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/write',
  },
  // {
  //   path: 'homeMain',
  //   name: 'HomeMain',
  //   component: () => import('../components/HomeMain/index.vue'),
    // children: [{
    //   path: '/write',
    //   name: 'MainWrite',
    //   component: () => import('../components/MainWrite/index.vue')
    // }]
  // },
  {
    path: '/write',
    name: 'MainWrite',
    component: () => import('../components/MainWrite/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
