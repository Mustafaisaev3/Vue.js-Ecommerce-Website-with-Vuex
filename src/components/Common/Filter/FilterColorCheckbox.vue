<template>
    <div class="w-auto h-auto">
      <label :for="value">
          <input type="checkbox" :id="value" :name="value" class="hidden">
          <div class="flex items-center gap-2 ">
              <span class="checkbox_span w-5 h-5 rounded-full" :style="{'background-color': color}"></span>
              <!-- <span class="checkbox_text">{{ value }}</span> -->
          </div>
      </label>
    </div>
  </template>
  
  <script>
  export default {
      props: ['color']
  
  }
  </script>
  
  <style scoped>
  input:checked + div .checkbox_span {
      /* background: #16BCDC;
      border-color: #16BCDC; */
  }
  </style>