<template>
  <Filter :title="'Filter By Color'">
    <div class="flex flex-wrap gap-4">
        <FilterColorCheckbox :color="'red'" />
        <FilterColorCheckbox :color="'#222222'" />
        <FilterColorCheckbox :color="'#c5c5c5'" />
        <FilterColorCheckbox :color="'red'" />
        <FilterColorCheckbox :color="'#222222'" />
        <FilterColorCheckbox :color="'#c5c5c5'" />
        <FilterColorCheckbox :color="'red'" />
        <FilterColorCheckbox :color="'#222222'" />
        <FilterColorCheckbox :color="'#c5c5c5'" />
        <FilterColorCheckbox :color="'red'" />
        <FilterColorCheckbox :color="'#222222'" />
        <FilterColorCheckbox :color="'#c5c5c5'" />
        <FilterColorCheckbox :color="'red'" />
        <FilterColorCheckbox :color="'#222222'" />

    </div>
  </Filter>
</template>

<script>
import Filter from '../Common/Filter/Filter.vue'
import FilterColorCheckbox from '../Common/Filter/FilterColorCheckbox.vue'

export default {
    components: {
        Filter,
        FilterColorCheckbox
    }
}
</script>

<style>

</style>