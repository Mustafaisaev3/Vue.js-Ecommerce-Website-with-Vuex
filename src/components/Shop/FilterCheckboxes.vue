<template>
    <Filter :title="title">
      <div class="flex gap-3 flex-wrap">
          <FilterCheckbox v-for="option in options" :key="option._id" :value="option.value"/> 
      </div>
    </Filter>
  </template>
  
  <script>
  import Filter from '../Common/Filter/Filter.vue'
  import FilterCheckbox from '../Common/Filter/FilterCheckbox.vue';
  
  export default {
    props: ['title', 'options'],
    components: {
      Filter,
      FilterCheckbox
    }
  }
  </script>
  
  <style>
  
  </style>