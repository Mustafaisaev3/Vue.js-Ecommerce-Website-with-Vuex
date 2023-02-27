<template>
    <Filter :title="'Filter By Size'">
      <div class="flex gap-3 flex-wrap">
          <FilterCheckbox :value="'5GB'"/>
          <FilterCheckbox :value="'10GB'" />
          <FilterCheckbox :value="'25GB'" />
          <FilterCheckbox :value="'125GB'"/>
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