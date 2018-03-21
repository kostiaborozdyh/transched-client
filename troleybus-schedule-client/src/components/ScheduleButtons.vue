<template>
  <div>
    <div>
      <div>
        <b-button variant="primary">Додати файл</b-button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-auto">
        <font-awesome-icon :icon="['fas', 'file-excel']" class="text-success"/>
        Розклад руху тролейбусів.xlsx
      </div>
      <div class="col">
        <b-button disabled variant="success">Імпортувати</b-button>
        <b-button disabled variant="danger">Видалити</b-button>
      </div>
    </div>
    <div class="progress">
    <div class="row mt-3">
      <div class="col">
        <b-progress :value="value"></b-progress>
      </div>
    </div>
    </div>
    <div class="alert">
    <div class="row mt-3">
      <div class="col">
        <b-alert variant="success" show dismissible>Файл заїмпортовано вдало. 300 нових записів для 15 маршрутів додано.
        </b-alert>
      </div>
      </div>
    </div>
    </div>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

  export default {
    data () {
      return {
        max: 100,
        value: 75
      }
    },
    components: {
      FontAwesomeIcon
    }
  }
</script>
<style>
  .col-md-auto{ visibility: hidden; }
  .b:hover + .cold-mt-auto {
    visibility: visible;
  }
  .row-mt-3 { visibility: hidden; }
  .b:hover + .progress {
    visibility: visible;
  }
  .alert { visibility: hidden; }
  .b:hover + .alert {
    visibility: visible;
  }
</style>
