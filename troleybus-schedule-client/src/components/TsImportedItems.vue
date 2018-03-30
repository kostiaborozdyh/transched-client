<template>
  <div class="row p-4">
    <div class="col-6">
      <div class="row justify-content-end mb-3">
        <div class="col-3">
          <b-button variant="primary">Імпортувати файл</b-button>
        </div>
      </div>
        <div class="col-2">2018-03-17</div>
        <div class="col-4">
          <font-awesome-icon :icon="['fas', 'file-excel']" class="text-success"/>
          <span>{{item.filename}}</span>
        </div>
        <div class="col-3">
          <span><b-badge pill variant="secondary">{{item.routes_count}}</b-badge></span>
          <span>маршрутів</span>
        </div>
        <div class="col-3 text-right">
          <a href="#">
            <font-awesome-icon :icon="['fas', 'trash']" class="text-danger"/>
          </a>
          <a href="#">
            <font-awesome-icon :icon="['fas', 'save']" class="text-success"/>
          </a>
        </div>
      </div>
    </div>
    <div>{{items}}</div>
</template>
<script>

  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import ImportsInfoService from '@/services/ImportsInfoSercice'
  import status from '@/components/status'
  export default {
    data () {
      return {
        items: []
      }
    },
    components: {
      FontAwesomeIcon
    },
    mounted () {
      this.getImportsInfo()
    },
    methods: {
      async getImportsInfo () {
        const response = await ImportsInfoService.fetchImportsInfo()
        this.items = response.data
      }
    }
  }
</script>
<style>
</style>
