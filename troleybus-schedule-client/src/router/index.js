import Vue from 'vue'
import Router from 'vue-router'
import TsAdmin from '@/components/TsAdmin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TsAdmin',
      component: TsAdmin
    }
  ]
})
