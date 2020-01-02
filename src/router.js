import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/components/Landing'
import Tutorial from '@/components/Tutorial'
import Practice from '@/components/Practice'
import Assessment from '@/components/Assessment'
import Interactive from '@/components/Interactive'
import Results from '@/components/Results'

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
      name: '1 Interactive Tutorial',
      component: Tutorial
    },
    {
      path: '/practice',
      name: '2 Practice',
      component: Practice
    },
    {
      path: '/assessment',
      name: '3 Assessment',
      component: Assessment
    },
    {
      path: '/assessment/interactive',
      name: '3',
      component: Interactive
    },
    {
      path: '/assessment/results',
      name: '3 Assessment Results',
      component: Results
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
