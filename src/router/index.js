import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Slide1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HOME',
    component: Home
  },
  {
    path: '/sites',
    name: 'SITES',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Slide2')
  },
  {
    path: '/about',
    name: 'ABOUT',
    component: () => import('../views/Slide3')
  },
  {
    path: '/contact',
    name: 'CONTACT',
    component: () => import('../views/Slide4')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
