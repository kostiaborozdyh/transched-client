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
                <th scope="col" class="pad"><button class="float-left btn-left"><i class="fas fa-arrow-left"></i></button></th>
                <th scope="col" class="pad"><button class="float-right btn-right"><i class="fas fa-arrow-right"></i></button></th>
              </tr>
              <tr class="directions">
                <th scope="col">{{items[0].stops[0].direction}}</th>
                <th scope="col">{{items[0].stops[1].direction}}</th>
              </tr>
          </thead>
          <tbody>
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
  data() {
    return {
      items: [],
    }
  },
  mounted() {
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
  margin-top: 30px;
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
  font-size: 15px;
}
  
</style>
