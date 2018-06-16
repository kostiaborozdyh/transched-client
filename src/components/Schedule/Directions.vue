<template>
  <div>
    <template v-for="item in items">
      <schedule-stops :stops="item.stops" :key="item.id"></schedule-stops>
    </template>
  </div>
</template>

<script>
  import ScheduleStops from './Stops'
  export default {
    name: 'Directions',
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
