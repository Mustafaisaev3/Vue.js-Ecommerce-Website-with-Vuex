<template>
  <div class="w-full h-auto flex items-center justify-between p-4 border border-b-[0px] border-[#ebebeb]">
    <div>Showing 1–12 of 18 results</div>
    <div class="flex items-center gap-4">
        <span class="cursor-pointer"><IconGrid class="text-[#cfcfcf] text-[20px]" /></span>
        <span class="cursor-pointer"><IconList class="text-[#cfcfcf] text-[20px]" /></span>
    </div>
    <div class="w-[200px] border border-[#ececec] p-1 px-2">Sort By</div>
  </div>
</template>

<script>
import IconGrid from '~icons/mdi/dots-grid'
import IconList from '~icons/mdi/format-list-bulleted'

export default {
    components: {
        IconGrid,
        IconList
    }
}
</script>

<style>

</style>