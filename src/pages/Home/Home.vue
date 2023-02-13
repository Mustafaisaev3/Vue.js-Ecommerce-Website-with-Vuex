<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <HomeMainSlidershow />
    <HomeHotProducts />
    <HomePopularCategories />
    <HomeTopDealsVue />
  </div>
</template>

<script>
import HomeMainSlidershow from './HomeMainSlidershow.vue';
import HomeHotProducts from './HomeHotProducts.vue';
import HomePopularCategories from './HomePopularCategories.vue';
import HomeTopDealsVue from './HomeTopDeals.vue';

export default {
  components: {
    HomeMainSlidershow,
    HomeHotProducts,
    HomePopularCategories,
    HomeTopDealsVue
  }
}
</script>

<style>

</style>