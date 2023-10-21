<template>
    <Filter :title="title">
      <div class="flex gap-3 flex-wrap">
          <FilterRadio v-for="option in options" :key="option._id" :name="title" :value="option.value"/> 
      </div>
    </Filter>
  </template>
  
  <script>
  import Filter from '../Common/Filter/Filter.vue'
  import FilterRadio from '../Common/Filter/FilterRadio.vue';
  
  export default {
    props: ['title', 'options'],
    components: {
      Filter,
      FilterRadio
    }
  }
  </script>
  
  <style>
  
  </style>