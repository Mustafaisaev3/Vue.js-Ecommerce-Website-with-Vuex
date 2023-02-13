<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <HomeMainSlidershow />
    <HomeHotProducts />
    <HomePopularCategories />
  </div>
</template>

<script>
import HomeMainSlidershow from './HomeMainSlidershow.vue';
import HomeHotProducts from './HomeHotProducts.vue';
import HomePopularCategories from './HomePopularCategories.vue';

export default {
  components: {
    HomeMainSlidershow,
    HomeHotProducts,
    HomePopularCategories
  }
}
</script>

<style>

</style>