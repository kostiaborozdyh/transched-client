<template>
  <div class="row mt-4">
    <div class="col-6">
      <div class="row mb-3">
        <div class="col-3">
          <b-button variant="outline-success">Імпортувати файл</b-button>
        </div>
      </div>
      <imported-item  v-for="item in items"   v-bind:key="item.id" v-bind:item="item"
                      v-bind:isSelected="selectedItemId === item.id"
                      v-on:click.native="selectItem(item.id) "  ></imported-item>
    </div>
  </div>
</template>
<script>
  import ImportedItem from '@/components/Schedule/ImportedItem'
  import ImportsInfoService from '@/services/ImportsInfoSercice'
  export default {
    name: 'TsImportedItemsInfo',
    data () {
      return {
        items: [],
        selectedItemId: ''
      }
    },
    components: {
      'imported-item': ImportedItem
    },
    mounted () {
      this.getImportsInfo()
    },
    methods: {
      selectItem: function (id) {
        this.selectedItemId = id
      },
      async getImportsInfo () {
        const response = await ImportsInfoService.fetchImportsInfo()
        this.items = response.data
      }
    }
  }
</script>
<style>
</style>
