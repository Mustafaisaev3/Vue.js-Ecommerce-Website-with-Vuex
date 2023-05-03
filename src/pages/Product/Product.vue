<template>
  <div class="container ">
    <Breadcrumbs />
    <div v-if="product">
      <ProductMainInfo :product="product" />
      <ProductAdditionalInformation :product="product" />
      <!-- <ProductRelatedProducts /> -->
      <ProductSlider :title="'Related Products'" />
      <ProductSlider :title="'Viewed Products'" />
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue';
import ProductMainInfo from './ProductMainInfo.vue';
import ProductAdditionalInformation from './ProductAdditionalInformation.vue';
import ProductSlider from '@/components/Product/ProductSlider.vue'
import { ProductApi } from '@/services/api/productsApi';

export default {
  data() {
    return {
    }
  },
  components: {
    Breadcrumbs,
    ProductMainInfo,
    ProductAdditionalInformation,
    ProductSlider
  },

  computed: {
    product() {
      console.log(this.$store)
      return this.$store.getters.product
    }
  },

  beforeMount () {
    this.$store.dispatch('fetchProduct', this.$route.params.id)
    console.log(this.$route.params)
  }
}
</script>

<style>

</style>