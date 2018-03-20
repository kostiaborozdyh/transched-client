<template>
  <div>
<div class="menu">
  <p><input name="number" type="radio"  value="number" checked> 2018-03-17 &nbsp;&nbsp;&nbsp;&nbsp; <font-awesome-icon :icon="icon"  /> Файл_розкладу_20_02_2018.xlsx <b-badge pill variant="secondary">15</b-badge> маршрутів  <b-badge variant="primary">Чорновий</b-badge> <a><font-awesome-icon :icon="['fas', 'fa-Trash']" /></a></p>
  <p><input name="number" type="radio" value="number"> 2018-03-11  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font-awesome-icon :icon="icon"  /> Файл_розкладу_10_02_2018.xlsx <b-badge pill variant="secondary">15</b-badge> маршрутів <b-badge variant="success">Діючий</b-badge> <a><font-awesome-icon :icon="['fas', 'fa-Trash']" /></a></p>
  <p><input name="number" type="radio" value="number" > 2018-02-10 &nbsp;&nbsp;&nbsp;&nbsp; <font-awesome-icon :icon="icon"  /> Файл_розкладу_10_01_2018.xlsx <b-badge pill variant="secondary">15</b-badge> маршрутів <b-badge variant="secondary">Чорновий</b-badge> <a><font-awesome-icon :icon="['fas', 'fa-Trash']" /></a></p>
</div>
    </div>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faFileExcel } from '@fortawesome/fontawesome-free-solid'
export default {
  name: 'FAExample',

  computed: {
    icon () {
      return faFileExcel
    }
  },

  components: {
    FontAwesomeIcon
  }
}
</script>
