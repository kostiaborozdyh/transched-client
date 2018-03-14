import Vue from 'vue'
import Router from 'vue-router'
import TroleybusScheduleMain from '@/components/TroleybusScheduleMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TroleybusScheduleMain',
      component: TroleybusScheduleMain
    }
  ]
})
