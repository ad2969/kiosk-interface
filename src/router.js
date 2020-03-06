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
      component: Landing,
      props: { title: '' }
    },
    {
      path: '/tutorial',
      name: '1',
      component: Tutorial,
      props: { title: 'Interactive Tutorial' }
    },
    {
      path: '/practice',
      name: '2',
      component: Practice,
      props: { title: 'Practice' }
    },
    {
      path: '/assessment',
      name: '3',
      component: Assessment,
      props: { title: 'Assessment' }
    },
    {
      path: '/assessment/interactive',
      name: '3',
      component: Interactive,
      props: { title: '' }
    },
    {
      path: '/assessment/results',
      name: '3',
      component: Results,
      props: { title: 'Assessment Results' }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
