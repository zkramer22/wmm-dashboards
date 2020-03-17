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
    component: TableauEmbed,
    props: {
      url: 'https://10ay.online.tableau.com/t/westcottmultimedia/views/SixShooterDashboards/AdvertisementTracker?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link:embed=yes:toolbar=no',
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
  },
  {
    path: '/profile/sixshooter-ad-content',
    name: 'sixshooter-ad-content',
    component: AirtableEmbed,
    props: {
      url: 'https://airtable.com/embed/shr8NXx6yt3ghXMG7?backgroundColor=red&viewControls=on',
      width: '100%',
      height: '100%'
    },
    beforeEnter: authGuard
  },
  {
    path: '/profile/sixshooter-bugs',
    name: 'sixshooter-bugs',
    component: AirtableEmbed,
    props: {
      url: 'https://airtable.com/embed/shrA1U3HS4S8JZDja?backgroundColor=yellow&viewControls=on',
      width: '100%',
      height: '100%'
    },
    beforeEnter: authGuard
  },
  {
    path: '/profile/sixshooter-sys-prefs',
    name: 'sixshooter-sys-prefs',
    component: AirtableEmbed,
    props: {
      url: 'https://airtable.com/embed/shrtyUIMNeaACPJiB?backgroundColor=yellow&viewControls=on',
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
