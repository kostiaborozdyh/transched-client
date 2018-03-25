<template>
  <div>
    <b-tabs>
      <b-tab title="1: Санаторій Україна - Аврора" active>
        <div class="row">
          <div class="col-md-2">
            <table class="table table-1 table-striped">
              <thead>
                <tr>
                  <th scope="col">Зупинка</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items[0].stops[0].points"><td>{{item.title}}</td></tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-4">
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col" class="pad">
                    <button class="float-left btn-left">
                      <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path class="arrow" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/>
                      </svg>
                    </button></th>
                  <th scope="col" class="pad">
                    <button class="float-right btn-right">
                      <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path class="arrow" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/>
                      </svg>
                    </button>
                  </th>
                </tr>
                <tr class="directions">
                  <th scope="col">{{items[0].stops[0].direction}}</th>
                  <th scope="col">{{items[0].stops[1].direction}}</th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="time in items[0].stops[0].points">
                <td>{{time.time}}</td><td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </b-tab>
      <b-tab title="1A: Вулиця Пацаєва - Санаторій Україна">
      </b-tab>
    </b-tabs>
    <!-- <div> {{items}} </div> -->
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
      async getTroleybusSchedules() {
        const response = await TroleybusSchedulesService.fetchTroleybusSchedules()
        this.items = response.data
      }
    }
  }
</script>

<style>
.nav {
  margin-top: 30px;
}

.table-1 {
  margin-top: 52px;
  margin-right: 30px;
}

.btn-left, .btn-right {
  width: 100%;
  color: #fff;
  height: 100%;
  outline: none;
  border: 0;
  font-size: 20px;
  margin: 0;
  background: #0066cc;
  cursor: pointer;
}

.btn-left {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  text-align: left;
}

.btn-right {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: right;
}

.table .pad {
  margin: 0;
  padding: 0;
}

.directions {
  font-size: 14px;
}

.arrow {
  fill: #fff;
  height: 25px;
  padding-top: 2px;
  margin-bottom: -2px;
}

</style>
