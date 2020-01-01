import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/components/Landing'
import Tutorial from '@/components/Tutorial'
import Practice from '@/components/Practice'
import Assessment from '@/components/Assessment'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: '0',
      component: Landing
    },
    {
      path: '/tutorial',
      name: '1',
      component: Tutorial
    },
    {
      path: '/practice',
      name: '2',
      component: Practice
    },
    {
      path: '/assessment',
      name: '3',
      component: Assessment
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
