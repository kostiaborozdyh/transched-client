import Api from '@/services/Api'

export default {
  fetchTroleybusSchedules () {
    return Api().get('troleybus_schedules')
  }
}
