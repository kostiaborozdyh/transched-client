<template>
  <div class="row">
    <div class="col-2">{{item.version}}</div>
    <div class="col-8">
      <span class="pr-1">
        <font-awesome-icon :icon="['fas', 'file-excel']" class="text-success"/>
        <span>{{item.filename}}</span>
      </span>
      <span class="pr-1">
        <span><b-badge pill variant="secondary">{{item.routes_count}}</b-badge></span>
        <span>маршрутів</span>
      </span>
      <span class="pr-1">
        <b-badge v-bind:variant="statusBadgeVariantType">{{item.state}}</b-badge>
      </span>
      <span class="pl-4 text-right">
        <a href="#" class="pr-2">
          <font-awesome-icon :icon="['fas', 'trash']" class="text-danger"/>
        </a>
        <a href="#" v-show="item.state == 'draft'">
          <font-awesome-icon :icon="['fas', 'save']" class="text-success"/>
        </a>
      </span>
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
        const BADGE_TYPES = {
          draft: 'primary',
          active: 'success',
          past: 'secondary'
        }
        return BADGE_TYPES[this.item.state]
      }
    }
  }
</script>
<style>
</style>
