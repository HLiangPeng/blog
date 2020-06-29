import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '/news',
      name: 'News',
      component: () => import('../components/MainMid/news.vue')
    },{
      path: '/code',
      name: 'Code',
      component: () => import('../components/MainMid/code.vue')
    }]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
