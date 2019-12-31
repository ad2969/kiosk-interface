import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/components/Landing'
import Tutorial from '@/components/Tutorial'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/tutorial',
      name: 'Tutorial',
      component: Tutorial
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
