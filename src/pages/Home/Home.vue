<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <HomeMainSlidershow />
    <HomeHotProducts />
    <HomePopularCategories />
    <HomeTopDealsVue />
    <HomeBannerRow />
    <HomeBrands />
    <HomeRecommendedForYou />
    <HomeBlogSlider />
  </div>
</template>

<script>
import HomeMainSlidershow from './HomeMainSlidershow.vue';
import HomeHotProducts from './HomeHotProducts.vue';
import HomePopularCategories from './HomePopularCategories.vue';
import HomeTopDealsVue from './HomeTopDeals.vue';
import HomeBannerRow from './HomeBannerRow.vue';
import HomeBrands from './HomeBrands.vue'
import HomeRecommendedForYou from './HomeRecommendedForYou.vue';
import HomeBlogSlider from './HomeBlogSlider.vue';

export default {
  components: {
    HomeMainSlidershow,
    HomeHotProducts,
    HomePopularCategories,
    HomeTopDealsVue,
    HomeBannerRow,
    HomeBrands,
    HomeRecommendedForYou,
    HomeBlogSlider
  }
}
</script>

<style>

</style>