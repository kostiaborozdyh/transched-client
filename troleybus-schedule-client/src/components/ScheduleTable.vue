<template>
  <div>
    <b-tabs>
      <b-tab title="1: Санаторій Україна - Аврора" active>
        <b-table responsive :items="items"></b-table>
      </b-tab>
      <b-tab title="1A: Вулиця Пацаєва - Санаторій Україна">
      </b-tab>
    </b-tabs>
    <!--TODO: remove it after using items2 for table-->
    <div> {{items}} </div>
  </div>
</template>

<script>
import TroleybusSchedulesService from '@/services/TroleybusSchedulesService'

export default {
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.getTroleybusSchedules()
  },
  methods: {
    async getTroleybusSchedules () {
      const response = await TroleybusSchedulesService.fetchTroleybusSchedules();
      this.items = response.data
    }
  }
}
</script>

<style>
  .nav {
    margin-top: 30px;
  }
</style>
