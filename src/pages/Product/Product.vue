<template>
  <div class="container ">
    <Breadcrumbs />
    <ProductMainInfo />
    <ProductAdditionalInformation />
    <!-- <ProductRelatedProducts /> -->
    <ProductSlider :title="'Related Products'" />
    <ProductSlider :title="'Viewed Products'" />
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue';
import ProductMainInfo from './ProductMainInfo.vue';
import ProductAdditionalInformation from './ProductAdditionalInformation.vue';
import ProductSlider from '@/components/Product/ProductSlider.vue'

export default {
  components: {
    Breadcrumbs,
    ProductMainInfo,
    ProductAdditionalInformation,
    ProductSlider
  }
}
</script>

<style>

</style>