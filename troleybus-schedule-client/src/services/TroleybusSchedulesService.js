import Api from '@/services/Api'

export default {
  fetchTroleybusSchedules () {
    return Api().get('troleybusschedule/index')
  },
  fetchStops () {
    return Api().get('stop/index')
  }
}
