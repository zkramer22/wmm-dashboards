import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Profile from '../views/Profile'
import SixshooterArtist from '../components/SixshooterArtist'
import SixshooterLabel from '../components/SixshooterLabel'

import { authGuard } from '../auth/authGuard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: authGuard
  },
  {
    path: '/profile/sixshooter-artist',
    name: 'sixshooter-artist',
    component: SixshooterArtist,
    beforeEnter: authGuard
  },
  {
    path: '/profile/sixshooter-label',
    name: 'sixshooter-label',
    component: SixshooterLabel,
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
