<template>
  <div 
    class="absolute top-[-10px] right-[-10px] w-[20px] h-[20px] flex items-center justify-center bg-[#16bcdc] text-[12px] rounded-full text-white"
    :style="{'background-color': color}"
  >
    {{ text }}
    <slot></slot>
  </div>
</template>

<script>
export default {
    props: ['text', 'color']
}
</script>

<style>

</style>