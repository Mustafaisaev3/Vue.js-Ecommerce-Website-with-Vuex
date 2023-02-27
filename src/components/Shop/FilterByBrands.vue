<template>
  <Filter :title="'Filter By Brands'">
    <div class="flex gap-3 flex-wrap">
        <FilterCheckbox :value="'Samsung'"/>
        <FilterCheckbox :value="'Apple'" />
        <FilterCheckbox :value="'Xiaomi'" />
        <FilterCheckbox :value="'Samsung'"/>
        <FilterCheckbox :value="'Apple'" />
        <FilterCheckbox :value="'Xiaomi'" />
    </div>
  </Filter>
</template>

<script>
import Filter from '../Common/Filter/Filter.vue'
import FilterCheckbox from '../Common/Filter/FilterCheckbox.vue';

export default {
    components: {
        Filter,
        FilterCheckbox
    }
}
</script>

<style>

</style>