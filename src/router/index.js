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
      url: 'https://10ay.online.tableau.com/t/westcottmultimedia/views/SixShooterDashboards/Story1?:embed=y&:display_count=n&:showAppBanner=false&:origin=viz_share_link&:showVizHome=n:embed=yes:toolbar=no',
      width: '1100',
      height: '100%'
    },
    beforeEnter: authGuard
  },
  {
    path: '/profile/eone-artist',
    name: 'eone-artist',
    component: TableauEmbed,
    props: {
      url: 'https://10ay.online.tableau.com/t/westcottmultimedia/views/eOneDashboardOverview/Dr_DreDashboard?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link:embed=yes:toolbar=no',
      width: '100%',
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
    path: '/profile/eone-label',
    name: 'eone-label',
    component: TableauEmbed,
    props: {
      url: 'https://10ay.online.tableau.com/t/westcottmultimedia/views/eOneDashboardOverview/eOneDashboard?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link:embed=yes:toolbar=no',
      width: '100%',
      height: '100%'
    },
    beforeEnter: authGuard
  },
  {
    path: '/profile/sixshooter-adtracker',
    name: 'sixshooter-adtracker',
    component: TableauEmbed,
    props: {
      url: 'https://10ay.online.tableau.com/t/westcottmultimedia/views/SixShooterDashboards/AdTrackerDashboard?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link:embed=yes:toolbar=no',
      width: '100%',
      height: '100%'
    },
    beforeEnter: authGuard
  },
  {
    path: '/profile/eone-adtracker',
    name: 'eone-adtracker',
    component: AirtableEmbed,
    props: {
      url: 'https://airtable.com/embed/shrHmzcVrRftIvq5T?backgroundColor=cyanLight&viewControls=on',
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
    path: '/profile/eone-roster',
    name: 'eone-roster',
    component: AirtableEmbed,
    props: {
      url: 'https://airtable.com/embed/shrUTYI8oNz4yisRa?backgroundColor=blueLight&viewControls=on',
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
      modalUrl: 'https://airtable.com/embed/shrPSgAxpxKALXTFq?backgroundColor=redLight',
      width: '100%',
      height: '100%'
    },
    beforeEnter: authGuard
  },
  {
    path: '/profile/eone-ad-content',
    name: 'eone-ad-content',
    component: AirtableEmbed,
    props: {
      url: 'https://airtable.com/embed/shrdn3Fzdzc3iStb7?backgroundColor=redLight&viewControls=on',
      // modalUrl: 'https://airtable.com/embed/shrPSgAxpxKALXTFq?backgroundColor=redLight',
      width: '100%',
      height: '100%'
    },
    beforeEnter: authGuard
  },
  {
    path: '/profile/sixshooter-marketing-actions',
    name: 'sixshooter-marketing-actions',
    component: AirtableEmbed,
    props: {
      url: 'https://airtable.com/embed/shrSWdwflvYhL3Wk1?backgroundColor=greenLight&viewControls=on',
      modalUrl: 'https://airtable.com/embed/shr6gPiD9eUrhyrKV?backgroundColor=greenLight',
      width: '100%',
      height: '100%'
    },
    beforeEnter: authGuard
  },
  {
    path: '/profile/eone-marketing-actions',
    name: 'eone-marketing-actions',
    component: AirtableEmbed,
    props: {
      url: 'https://airtable.com/embed/shrHmzcVrRftIvq5T?backgroundColor=cyanLight&viewControls=on',
      // modalUrl: 'https://airtable.com/embed/shr6gPiD9eUrhyrKV?backgroundColor=greenLight',
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
      modalUrl: 'https://airtable.com/embed/shruFMgpWcgelwQ3B?backgroundColor=yellowLight',
      width: '100%',
      height: '100%'
    },
    beforeEnter: authGuard
  },
  {
    path: '/profile/eone-bugs',
    name: 'eone-bugs',
    component: AirtableEmbed,
    props: {
      url: 'https://airtable.com/embed/shrPMTYElgDsw3fZG?backgroundColor=yellowLight&viewControls=on',
      // modalUrl: 'https://airtable.com/embed/shruFMgpWcgelwQ3B?backgroundColor=yellowLight',
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
      url: 'https://airtable.com/embed/shrCqCSnPqo8R5JBU?backgroundColor=pinkLight&viewControls=on',
      width: '100%',
      height: '100%'
    },
    beforeEnter: authGuard
  },
  {
    path: '/profile/eone-sys-prefs',
    name: 'eone-sys-prefs',
    component: AirtableEmbed,
    props: {
      url: 'https://airtable.com/embed/shrGBv1mjFLK7kvxs?backgroundColor=pinkLight&viewControls=on',
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
