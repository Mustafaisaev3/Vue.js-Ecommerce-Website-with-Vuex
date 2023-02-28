<template>
  <div class="grid-container grid grid-cols-4">
    <ProductGridCard 
        v-for="product in products" 
        :key="product.id"
        :product="product"
    />
  </div>
</template>

<script>
import products from '@/data/products';
import ProductGridCard from '@/components/Product/ProductGridCard.vue'

export default {
    data () {
        return {
            products
        }
    },
    components: {
        ProductGridCard
    },
}
</script>

<style scoped>

.grid-container {
  border-top: 1px solid #ebebeb;
  border-left: 1px solid #ebebeb;
}
.item {
  border-bottom: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
}
</style>