<template>
  <div>
    <div class="container-fluid">
      <div class="col col-sm-12 col-m-12 col-lg-12"><h5><input name="number" type="radio" value="number"> 2018-03-17  <font-awesome-icon :icon="['fas', 'file-excel']" class="text-success"/> Файл_розкладу_20_02_2018.xlsx  <b-badge pill variant="secondary">15</b-badge> маршрутів  <b-badge variant="primary">Чорновий</b-badge>  <a href="#"><font-awesome-icon :icon="['fas', 'trash']" class="text-danger"/></a>   <a href="#"><font-awesome-icon :icon="['fas', 'save']" class="text-success"/></a>     </h5></div>
      <div class="button">
        <b-button variant="primary">Імпортувати файл</b-button>
      </div>
      <div class="col col-sm-12 col-m-12 col-lg-12"><h5><input name="number" type="radio" value="number"> 2018-03-11  <font-awesome-icon :icon="['fas', 'file-excel']" class="text-success"/> Файл_розкладу_10_02_2018.xlsx  <b-badge pill variant="secondary">15</b-badge> маршрутів <b-badge variant="success">Діючий</b-badge>    <a href="#"><font-awesome-icon :icon="['fas', 'trash']" class="text-danger" /></a>    </h5></div>
      <div class="col-md-12">
      <div class="input">
        <b-form-input id="input-default" type="text" placeholder="C:/Documents and Settings"></b-form-input>
      </div>
        </div>
      <div class="col col-sm-12 col-m-12 col-lg-12"><h5><input name="number" type="radio" value="number" > 2018-02-10  <font-awesome-icon :icon="['fas', 'file-excel']" class="text-success"/> Файл_розкладу_10_01_2018.xlsx  <b-badge pill variant="secondary">15</b-badge> маршрутів <b-badge variant="secondary">Минулий</b-badge>     <a href="#">  <font-awesome-icon :icon="['fas', 'trash']" class="text-danger" /> </a></h5></div>
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
  .container-fluid {
    margin-left: 20px;
  }
  .button{
    margin-left: 920px;
  }
  .input{
    margin-left: 840px;
    margin-right: 280px;
  }
</style>
