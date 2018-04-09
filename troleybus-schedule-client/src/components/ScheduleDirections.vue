<template>
  <div>
    <b-button-toolbar justify>
      <b-button-group>
        <b-btn class="mx-1">&lsaquo;</b-btn>
        <div class="text-primary">{{direction.title}}</div>
        <b-btn class="mx-1">&rsaquo;</b-btn>
      </b-button-group>
    </b-button-toolbar>
    <schedule-stops :stops="direction.stops"></schedule-stops>
  </div>
</template>

<script>
  import ScheduleStops from './ScheduleStops'
  export default {
    name: 'ScheduleDirections',
    components: {ScheduleStops},
    data () {
      return {
        direction: {}
      }
    },
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    mounted () {
      this.direction = this.items[0]
    }
  }
</script>

<style scoped>

</style>
