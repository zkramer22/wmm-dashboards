import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Profile from '../views/Profile'
import TableauEmbed from '../components/TableauEmbed'
import AirtableEmbed from '../components/AirtableEmbed'

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
    component: TableauEmbed,
    props: {
      url: 'https://10ay.online.tableau.com/t/westcottmultimedia/views/SixShooterDashboards/TDSArtistDashboardREORG?:embed=yes:toolbar=no',
      width: '1100',
      height: '100%'
    },
    beforeEnter: authGuard
  },
  {
    path: '/profile/sixshooter-label',
    name: 'sixshooter-label',
    component: TableauEmbed,
    props: {
      url: 'https://10ay.online.tableau.com/t/westcottmultimedia/views/SixShooterDashboards/SixshooterDashboard?:embed=yes:toolbar=no',
      width: '1100',
      height: '100%'
    },
    beforeEnter: authGuard
  },
  {
    path: '/profile/sixshooter-adtracker',
    name: 'sixshooter-adtracker',
    // component: AirtableEmbed,
    component: TableauEmbed,
    props: {
      // url: 'https://airtable.com/embed/shrhNxV4dk3Jn2MKI?backgroundColor=cyan&viewControls=on',
      url: 'https://10ay.online.tableau.com/t/westcottmultimedia/views/SixShooterDashboards/AdSpendfulltable?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link:embed=yes:toolbar=no',
      width: '100%',
      height: '100%'
    },
    beforeEnter: authGuard
  },
  {
    path: '/profile/sixshooter-roster',
    name: 'sixshooter-roster',
    component: AirtableEmbed,
    props: {
      url: 'https://airtable.com/embed/shrLMs4FmRILi0MtW?backgroundColor=blue&viewControls=on',
      width: '100%',
      height: '100%'
    },
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
