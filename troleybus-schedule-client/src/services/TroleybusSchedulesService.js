import Api from '@/services/Api'

export default {
  fetchSchedules () {
    return Api().get('/schedule/index')
  },
  fetchStops () {
    return Api().get('/stop/index')
  }
}
