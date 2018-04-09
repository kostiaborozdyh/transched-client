<template>
  <div>
    <b-table striped small hover :per-page="10" :items="stops" :fields="fields" :current-page="currentStopsPage"></b-table>
    <b-pagination size="sm" :total-rows="stopsLength" :per-page="10" v-model="currentStopsPage"></b-pagination>
  </div>
</template>

<script>
  export default {
    name: 'ScheduleStops',
    props: {
      stops: Array,
      required: true
    },
    data () {
      return {
        fields: [
          {
            key: 'stop.title',
            label: 'Зупинка'
          },
          {
            key: 'time',
            label: 'Час'
          }
        ],
        currentStopsPage: 1
      }
    },
    computed: {
      stopsLength: function () {
        return this.stops ? this.stops.length : 0
      }
    }
  }
</script>

<style scoped>

</style>
