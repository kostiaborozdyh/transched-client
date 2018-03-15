import Api from '@/services/Api'

export default {
  fetchButtonsService () {
    return Api().get('ButtonService')
  }
}
