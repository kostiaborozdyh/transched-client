<template>
  <div class="row p-4">
    <div class="col-6">
      <div class="row justify-content-end mb-3">
        <div class="col-3">
          <b-button variant="primary">Імпортувати файл</b-button>
        </div>
      </div>
      <imported-item v-for="item in items" v-bind:key="item.id" v-bind:item="item"></imported-item>
    </div>
  </div>
</template>
<script>
  import TsImportedItem from '@/components/TsImportedItem'
  import ImportsInfoService from '@/services/ImportsInfoSercice'
  export default {
    data () {
      return {
        items: []
      }
    },
    components: {
      'imported-item': TsImportedItem
    },
    mounted () {
      this.getImportsInfo()
    },
    methods: {
      async getImportsInfo () {
        const response = await ImportsInfoService.fetchImportsInfo()
        this.items = response.data
      }
    }
  }
</script>
<style>
</style>
