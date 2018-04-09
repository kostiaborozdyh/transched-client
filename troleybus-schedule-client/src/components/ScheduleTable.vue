<template>
  <div>
    <b-tabs>
      <b-tab v-for="schedule in schedules" :key="schedule.id" :title="schedule.title">
        <div class="row">
          <div class="col-3">
            <schedule-directions :items="schedule.directions"></schedule-directions>
          </div>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
  import TroleybusSchedulesService from '@/services/TroleybusSchedulesService'
  import ScheduleDirections from './ScheduleDirections'

  export default {
    components: {ScheduleDirections: ScheduleDirections},
    data () {
      return {
        schedules: []
      }
    },
    mounted () {
      this.getTroleybusSchedules()
    },
    methods: {
      async getTroleybusSchedules () {
        const response = await TroleybusSchedulesService.fetchSchedules()
        this.schedules = response.data
      }
    }
  }
</script>

<style>
  .nav {
    margin-top: 30px;
  }
</style>
