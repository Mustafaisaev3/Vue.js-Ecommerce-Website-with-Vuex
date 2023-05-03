<template>
  <div class="container h-[60px] border-t-[1px] border-[rgba(255,255,255,.15)] hidden sm:hidden md:flex lg:flex">
    <HeaderVerticalMenu />
    <HeaderNav />
    <div class="text-white text-right text-sm flex items-center">Spend $120 more and get free shipping!</div>
  </div>
</template>

<script>
import HeaderVerticalMenu from './HeaderVerticalMenu.vue';
import HeaderNav from './HeaderNav.vue';

export default {
    components: {
        HeaderVerticalMenu,
        HeaderNav
    }
}
</script>

<style>

</style>