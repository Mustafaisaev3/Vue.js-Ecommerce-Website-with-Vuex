<template>
  <div class="w-full h-auto">
    <ProductListCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import products from '@/data/products';
import ProductListCard from '../Product/ProductListCard.vue';


export default {
    data () {
        return {
            showHoverBtns: false,
            // products
        }
    },
    props: ['products'],
    components: {
        ProductListCard,
    },
}
</script>

<style>

</style>