<template>
  <div class="container ">
    <Breadcrumbs />
    <ProductMainInfo />
    <ProductAdditionalInformation />
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue';
import ProductMainInfo from './ProductMainInfo.vue';
import ProductAdditionalInformation from './ProductAdditionalInformation.vue';

export default {
  components: {
    Breadcrumbs,
    ProductMainInfo,
    ProductAdditionalInformation
  }
}
</script>

<style>

</style>