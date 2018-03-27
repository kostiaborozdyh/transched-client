import Api from '@/services/Api'

export default {
  fetchImportsInfo () {
    return Api().get('/import/index')
  }
}
