import Vue from 'vue'
import VueRouter from 'vue-router'
import Slide1 from '../pages/Slide1'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'HOME',
    component: Slide1
  },
  {
    path: '/sites',
    name: 'SITES',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../pages/Slide2')
  },
  {
    path: '/about',
    name: 'ABOUT',
    component: () => import('../pages/Slide3')
  },
  {
    path: '/contact',
    name: 'CONTACT',
    component: () => import('../pages/Slide4')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../pages/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
