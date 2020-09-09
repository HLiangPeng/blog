import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '/',
      name: 'News',
      component: () => import('../components/MainMid/news.vue')
    }, {
      path: '/code',
      name: 'Code',
      component: () => import('../components/MainMid/code.vue')
    }, {
      path: '/live',
      name: 'Live',
      component: () => import('../components/MainMid/live.vue')
    },{
      path: '/detail',
      name: 'detail',
      component: () => import('../components/MainMid/detail.vue')
    }]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
