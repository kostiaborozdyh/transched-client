/* eslint-disable no-new,semi */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@fortawesome/fontawesome'
import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-free-brands'
import '@fortawesome/fontawesome-free-regular'

import * as VueGoogleMaps from 'vue2-google-maps';

import ScheduleTable from '@/components/ScheduleTable'
import ScheduleButtonsAdmin from '@/components/ScheduleButtonsAdmin'
import GoogleMap from '@/components/ScheduleGoogleMap'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDt6awfDW_r_OrPC-yDD0T21s0-XyWXecY',
    libraries: 'places' // necessary for places input
  }
});

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.component('schedule-table', ScheduleTable)
Vue.component('admin-buttons', ScheduleButtonsAdmin)
Vue.component('google-map', GoogleMap)

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
