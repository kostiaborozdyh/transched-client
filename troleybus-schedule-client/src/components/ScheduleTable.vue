<template>
  <div>
    <b-tabs>
      <b-tab title="1: Санаторій Україна - Аврора" active>
        <b-table responsive :items="items"></b-table>
        <label>
          <gmap-autocomplete
            @place_changed="setPlace">
          </gmap-autocomplete>
          <button @click="addMarker">Add</button>
        </label>
        <br/>

  <br>
  <gmap-map
    :center="center"
    :zoom="12"
    style="width:100%;  height: 400px;"
  >
    <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
        </gmap-map>
      </b-tab>
      <b-tab title="1A: Вулиця Пацаєва - Санаторій Україна">
      </b-tab>
    </b-tabs>
    <!--TODO: remove it after using items2 for table-->
    <div> {{items}}</div>
  </div>
</template>

<script>
  import TroleybusSchedulesService from '@/services/TroleybusSchedulesService'
  export default {
    data () {
      return {
        // default to Montreal to keep it simple
        // change this to whatever makes sense
        center: { lat: 45.508, lng: -73.587 },
        markers: [],
        places: [],
        currentPlace: null,
        items: []
      }
    },
    mounted () {
      this.geolocate()
      this.getTroleybusSchedules()
    },
    methods: {
      setPlace (place) {
        this.currentPlace = place
      },
      addMarker () {
        if (this.currentPlace) {
          const marker = {
            lat: this.currentPlace.geometry.location.lat(),
            lng: this.currentPlace.geometry.location.lng()
          }
          this.markers.push({ position: marker })
          this.places.push(this.currentPlace)
          this.center = marker
          this.currentPlace = null
        }
      },
      geolocate: function () {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,

            async getTroleybusSchedules () {
              const response = await TroleybusSchedulesService.fetchTroleybusSchedules()
              this.items = response.data
            }
          }
        })
      }
    }
  }
</script>

<style>
  .nav {
    margin-top: 30px;
  }
</style>
