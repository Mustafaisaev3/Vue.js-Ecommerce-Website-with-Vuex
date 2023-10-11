<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <HomeMainSlidershow />
    <!-- <HomeHotProducts /> -->
    <HomePopularCategories />
    <!-- <HomeTopDealsVue /> -->
    <!-- <HomeBannerRow /> -->
    <!-- <HomeBrands /> -->
    <HomeRecommendedForYou />
    <div v-for="item in pageLayout.top" :key="item" >
      <HomeHotProducts v-if="item.type == modulesTypes.SLIDER" :data="item"/>
      <HomeTopDealsVue v-else-if="item.type == modulesTypes.DOUBLE_SLIDER" :data="item"/>
      <HomeBlogSlider v-else-if="item.type == modulesTypes.BLOG_SLIDER" :data="item"/>
      <HomeBannerRow v-else-if="item.type == modulesTypes.TRIPLE_BANNER" :data="item"/>
      <HomeBrands v-else-if="item.type == modulesTypes.BRANDS_BANNER" :data="item"/>
    </div>
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
import pagesTypes from '@/types/pagesTypes';
import modulesTypes from '@/types/modulesTypes';
import { pagesLayoutApi } from '@/services/api/pagesLayoutApi';

export default {
  data () {
    return {
      pageLayout: undefined,
      modulesTypes
    }
  },

  components: {
    HomeMainSlidershow,
    HomeHotProducts,
    HomePopularCategories,
    HomeTopDealsVue,
    HomeBannerRow,
    HomeBrands,
    HomeRecommendedForYou,
    HomeBlogSlider
  },

  async beforeCreate () {
    const layout = await pagesLayoutApi.fetchPageLayout(pagesTypes.HOME)
    this.$data.pageLayout = layout
  }

}
</script>

<style>

</style>