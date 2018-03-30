<template>
  <div class="row p-4">
    <div class="col-6">
      <div class="row justify-content-end mb-3">
        <div class="col-3">
          <b-button variant="primary">Імпортувати файл</b-button>
        </div>
      </div>
    </div>
  </div>
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
