<template>
  <b-navbar toggleable="md" variant="danger" type="dark" >
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">Розклад руху транспорту</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="schedule">
          <font-awesome-icon :icon="['far', 'calendar']"/>
          Розклад руху
        </b-nav-item>
        <b-nav-item to="stops">
          <font-awesome-icon :icon="['fas', 'bus']"/>
          Маршрути
        </b-nav-item>
        <b-nav-item to="stops">
          <font-awesome-icon :icon="['fas', 'map-marker']"/>
          Зупинки
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

  export default {
    name: 'NavigationMenu',
    components: {
      FontAwesomeIcon
    }
  }
</script>

<style scoped>

</style>
