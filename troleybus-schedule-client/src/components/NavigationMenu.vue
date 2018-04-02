<template>
  <b-nav pills>
    <b-nav-item to="schedule"><font-awesome-icon :icon="['far', 'calendar']" /> Розклад руху</b-nav-item>
    <b-nav-item to="stops"><font-awesome-icon :icon="['fas', 'map-marker']"/> Редагування зупиннок</b-nav-item>
  </b-nav>
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
