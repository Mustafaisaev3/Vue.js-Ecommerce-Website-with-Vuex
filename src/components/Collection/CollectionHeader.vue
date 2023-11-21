<template>
  <div class="w-full h-auto flex items-center justify-between p-4 border border-b-[0px] border-[#ebebeb]">
    <div class="flex items-center gap-4 ">
      <div class="bg-[#222222] hover:bg-[#03b3db] transition-all duration-300 cursor-pointer rounded-sm p-1 px-5 text-white lg:hidden" @click="openFilter">Filter</div>
      <span class="hidden md:inline-block">Showing 1–12 of 18 results</span>
    </div>
    <div class="items-center gap-4 hidden md:flex">

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
import { UIActionsType } from '@/store/modules/ui'
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
      },
      openFilter () {
        this.$store.commit(UIActionsType.OPEN_DRAWER, {
            view: 'FILTER_VIEW',
            data: 'FILTER'
        })
      },
    }

}
</script>

<style scoped>
.active {
  /* background: rgb(176, 176, 176); */
  border: 1px solid #cfcfcf;
}
</style>