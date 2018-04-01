<template>
  <div class="p-4">
    <imported-items-info />
    <navigation-menu></navigation-menu>
    <schedule-table/>
  </div>
</template>

<script>
  import TsImportedItemsInfo from '@/components/TsImportedItemsInfo'
  import NavigationMenu from './NavigationMenu'

  export default {
    name: 'TsSchedule',
    components: {
      NavigationMenu,
      'imported-items-info': TsImportedItemsInfo
    }
  }
</script>
<style scoped>
</style>
