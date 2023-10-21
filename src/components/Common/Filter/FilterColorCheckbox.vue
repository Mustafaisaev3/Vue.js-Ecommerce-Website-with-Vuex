<template>
    <div class="w-auto h-auto">
      <label :for="value">
          <input type="radio" :id="value" :name="title" class="hidden">
          <div class="flex items-center gap-2 ">
              <span class="checkbox_span w-5 h-5 rounded-full" :style="{'background-color': color}"></span>
          </div>
      </label>
    </div>
</template>
  
<script>
    export default {
        props: ['title', 'color']
    }
</script>

<style scoped>
    .checkbox_span {
        position: relative;
    }
    input:checked + div .checkbox_span::before {
        content: "\2713";
        color: #fff;
        font-size: 8px;
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
    }
</style>