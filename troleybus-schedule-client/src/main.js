/* eslint-disable no-new,semi */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ScheduleTable from '@/components/ScheduleTable'
import ScheduleButtons from '@/components/ScheduleButtons'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.component('schedule-table', ScheduleTable);
Vue.component('buttons-service', ScheduleButtons);

fontawesome.library.add(brands, faCoffee)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
