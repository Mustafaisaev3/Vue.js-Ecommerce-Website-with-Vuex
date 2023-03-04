<template>
  <div class="w-full h-auto flex items-center justify-between p-4 border border-b-[0px] border-[#ebebeb]">
    <div>Showing 1–12 of 18 results</div>
    <div class="flex items-center gap-4">

        <span class="rounded-sm cursor-pointer" 
          :class="{active: currentLayout == layoutTypes.GRID }" 
          @click="() => setLayout(layoutTypes.GRID)"
        >
          <IconGrid class="text-[#cfcfcf] text-[20px]" />
        </span>

        <span class=" rounded-sm cursor-pointer" 
          :class="{active: currentLayout == layoutTypes.LIST }" 
          @click="() => setLayout(layoutTypes.LIST)"
        >
          <IconList class="text-[#cfcfcf] text-[20px]" />
        </span>
    </div>
    <!-- <div class="w-[200px] border border-[#ececec] p-1 px-2">Sort By</div> -->
    <Dropdown class="w-[200px]" :options="options" @select="selectValue" />
  </div>
</template>

<script>
import IconGrid from '~icons/mdi/dots-grid'
import IconList from '~icons/mdi/format-list-bulleted'
import Dropdown from '../UI/Dropdown/Dropdown.vue'

const layout = {
  GRID: 'GRID',
  LIST: 'LIST',
}

let options = ['Best Selling', 'Price, low to high', 'Price, high to low']

export default {
    data () {
      return {
        currentLayout: layout.GRID,
        layoutTypes: layout,
        options
      }
    },
    components: {
        IconGrid,
        IconList,
        Dropdown
    },
    methods: {
      setLayout (type) {
        this.currentLayout = type
        this.$emit('emitLayout', this.currentLayout)
      },
      selectValue (value) {
        console.log(value)
      }
    }

}
</script>

<style scoped>
.active {
  /* background: rgb(176, 176, 176); */
  border: 1px solid #cfcfcf;
}
</style>