<template>
  <div>
    <div class="buttons">
      <b-button variant="primary">Додати файл</b-button>
    </div>
    <div class="text">
      <font-awesome-icon :icon="icon"  />Розклад руху тролейбусів.xlsx
    </div>
    <div class="button1">
      <b-button disabled variant="success">Імпортувати</b-button>
      <b-button disabled variant="danger">Видалити</b-button>
    </div>
         <div class="progress">
        <b-progress :value="value" class="w-25"></b-progress>
      </div>
    <div class="alert">
      <b-alert variant="success" show dismissible  >Файл заїмпортовано вдало. 300 нових записів для 15 маршрутів додано.</b-alert>
    </div>
  </div>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faFile } from '@fortawesome/fontawesome-free-solid'
export default {
  name: 'FAExample',

  computed: {
    icon () {
      return faFile
    }
  },
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
  .alert { visibility: hidden; }
  .b:hover + .alert {
    visibility: visible;
  }
  .buttons{
    padding-top:10px;
  }
  .button1{
    margin-lefit:10px;
    margin-down:10px;
  }
  .text { visibility: hidden; }
  .b:hover + .text {
    visibility: visible;
  }
  .progress{ visibility: hidden; }
  .b:hover + .text {
    visibility: visible;

  }
</style>
