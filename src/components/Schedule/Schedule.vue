<template>
  <div>
    <navigation-menu></navigation-menu>
    <imported-items-info />
    <schedule-table/>
  </div>
</template>

<script>
  import ImportedItemsInfo from '@/components/Schedule/ImportedItemsInfo'
  import NavigationMenu from '@/components/NavigationMenu'

  export default {
    name: 'ScheduleMain',
    components: {
      NavigationMenu,
      'imported-items-info': ImportedItemsInfo
    }
  }
</script>
<style scoped>
</style>
