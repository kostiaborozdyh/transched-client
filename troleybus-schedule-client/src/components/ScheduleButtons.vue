<template>
  <div>
<div class="file">
  <div style="color:green">
    <i class="far fa-file-excel fa-lg"> Розклад руху тролейбусів.xlsx</i>
  </div>
</div>
<div class="buttons">
  <b-button variant="success">Імпортувати</b-button>
  <b-button variant="danger">Видалити файл</b-button>
</div>
  </div>
</template>
<script>
import ButtonsService from '@/services/ButtonsService'

export default {
  data () {
    return {

      mounted () {
        this.getButtonsSchedules()
      },
      methods: {
        async getButtonsSchedules () {
          const response = await ButtonsService.fetchTroleybusSchedules()
          this.items2 = response.data
        }
      }
    }
  }
}

</script>
