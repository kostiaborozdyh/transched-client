<template>
  <div>
    <div class="row" v-for="item in items" :key="item.id">
      <div class="col-2">2018-03-17</div>
      <div class="col-4">
        <font-awesome-icon :icon="['fas', 'file-excel']" class="text-success"/>
        <span>{{item.filename}}</span>
      </div>
      <div class="col-3">
        <span><b-badge pill variant="secondary">{{item.routes_count}}</b-badge></span>
        <span>маршрутів</span>
      </div>
      <status />
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
</template>
<script>
  export default{}
</script>
