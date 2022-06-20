import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Prefix from '../../config/prefix'
import Cs from './module/cs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  ...Cs
]

const router = new VueRouter({
  mode: 'history',
  base: Prefix,
  routes
})

export default router
