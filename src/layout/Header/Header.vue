<template>
   <div class="w-[100%] h-auto min-h-[110px] bg-[#263c97]">
      <HeaderTopbar />
      <HeaderTop />
      <HeaderBottom />
   </div> 
</template>

<script>
import HeaderTopbar from './HeaderTopbar/HeaderTopbar.vue';
import HeaderTop from './HeaderTop/HeaderTop.vue';
import HeaderBottom from './HeaderBottom/HeaderBottom.vue';

export default {
   components : {
      HeaderTopbar,
      HeaderTop,
      HeaderBottom
   }
}
</script>

<style>
</style>