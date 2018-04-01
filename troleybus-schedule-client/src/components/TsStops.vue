<template>
    <div class="p-4">
      <ts-imported-items-info></ts-imported-items-info>
      <navigation-menu></navigation-menu>
    </div>
</template>

<script>
  import NavigationMenu from './NavigationMenu'
  import TsImportedItemsInfo from './TsImportedItemsInfo'
  export default {
    name: 'TsStops',
    components: {TsImportedItemsInfo, NavigationMenu}
  }
</script>

<style scoped>

</style>
