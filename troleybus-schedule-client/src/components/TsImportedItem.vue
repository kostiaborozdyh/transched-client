<template>
  <div class="row">
      <div class="col-2">{{item.version}}</div>
      <div class="col-4">
        <font-awesome-icon :icon="['fas', 'file-excel']" class="text-success"/>
        <span>{{item.filename}}</span>
      </div>
      <div class="col-3">
        <span><b-badge pill variant="secondary">{{item.routes_count}}</b-badge></span>
        <span>маршрутів</span>
      </div>
      <div class="col-3 text-right">
        <b-badge v-bind:variant="">{{item.state}}</b-badge>
        <a href="#">
          <font-awesome-icon :icon="['fas', 'trash']" class="text-danger"/>
        </a>
        <a href="#" v-show="item.state == 'draft'">
          <font-awesome-icon :icon="['fas', 'save']" class="text-success"/>
        </a>
      </div>
    </div>
</template>
<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  export default {
    props: ['item'],
    components: {
      FontAwesomeIcon
    },
    computed: {
      statusBadgeVariantType: function () {
        var budgeType;
        if (this.item.state = 'draft') {
          budgeType = 'primary'
        } else if (this.item.state = 'active') {
          budgeType = 'success'
        } else {
          budgeType = 'secondary'
        }
        return budgeType;
      }
    }
  }
</script>
