import Vue from 'vue'
import Router from 'vue-router'
import ScheduleMain from '@/components/Schedule/Schedule'
import Stops from '@/components/Stops/Stops'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/admin/schedule'
    },
    {
      path: '/admin/schedule',
      name: 'Schedule',
      component: ScheduleMain
    },
    {
      path: '/admin/stops',
      name: 'Stops',
      component: Stops
    }
  ]
})
