import Vue from 'vue'
import Router from 'vue-router'
import TsSchedule from '@/components/TsSchedule'
import TsStops from '@/components/TsStops'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/admin/schedule'
    },
    {
      path: '/admin/schedule',
      name: 'TsSchedule',
      component: TsSchedule
    },
    {
      path: '/admin/stops',
      name: 'TsStops',
      component: TsStops
    }
  ]
})
