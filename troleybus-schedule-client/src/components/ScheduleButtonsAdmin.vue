<template>
  <div>
    <div class="container-fluid">
      <div class="first"><h5><input name="number" type="radio" value="number">2018-03-17 &nbsp;&nbsp;&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'file-excel']" class="text-success"/> Файл_розкладу_20_02_2018.xlsx &nbsp;&nbsp;&nbsp;&nbsp;<b-badge pill variant="secondary">15</b-badge> маршрутів  <b-badge variant="primary">Чорновий</b-badge>&nbsp;&nbsp; <a href="#"><font-awesome-icon :icon="['fas', 'trash']" class="text-danger"/></a>&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'save']" class="text-success"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b-button variant="primary">Імпортувати файл</b-button></h5></div>

      <div class="second"><h5><input name="number" type="radio" value="number"> 2018-03-11  &nbsp;&nbsp;&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'file-excel']" class="text-success"/> Файл_розкладу_10_02_2018.xlsx &nbsp;&nbsp;&nbsp;&nbsp;<b-badge pill variant="secondary">15</b-badge> маршрутів <b-badge variant="success">Діючий</b-badge>&nbsp;&nbsp; <a><font-awesome-icon :icon="['fas', 'trash']" class="text-danger" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" size="40"></h5></div>

      <div class="third"><h5><input name="number" type="radio" value="number" > 2018-02-10 &nbsp;&nbsp;&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'file-excel']" class="text-success"/> Файл_розкладу_10_01_2018.xlsx &nbsp;&nbsp;&nbsp;&nbsp;<b-badge pill variant="secondary">15</b-badge> маршрутів <b-badge variant="secondary">Минулий</b-badge>&nbsp;&nbsp;<font-awesome-icon :icon="['fas', 'trash']" class="text-danger" /> </h5></div>
    </div>
  </div>
</template>
<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  export default {

    components: {
      FontAwesomeIcon
    }
  }
</script>
<style>
  .first{
   padding-left: 10px;
  }
  .second{
    padding-left: 10px;
  }
  .third{
    padding-left: 10px;
  }
</style>
