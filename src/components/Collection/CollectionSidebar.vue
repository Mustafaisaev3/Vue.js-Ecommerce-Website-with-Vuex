<template>
  <div class="w-[400px] h-auto">
    <FilterCategories />
    <FilterByBrands />
    <FilterByColors />
    <FilterBySize />
  </div>
</template>

<script>
import FilterCategories from '../Shop/FilterCategories.vue';
import FilterByBrands from '../Shop/FilterByBrands.vue';
import FilterByColors from '../Shop/FilterByColors.vue';
import FilterBySize from '../Shop/FilterBySize.vue';


export default {
    components: {
      FilterCategories,
      FilterByBrands,
      FilterByColors,
      FilterBySize
    }
}
</script>

<style>

</style>