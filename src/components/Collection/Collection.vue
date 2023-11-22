<template>
  <div class="flex gap-[30px] pb-[60px]">
    <CollectionSidebar />
    <div class="w-full h-auto text-[15px] bg-white">
      <div class="w-full h-auto rounded-md overflow-hidden mb-[20px]">
        <img class="w-full" src="https://cdn.shopify.com/s/files/1/0606/6867/4281/collections/cate_1_1080x.jpg?v=1637826003" alt="">
      </div>
      <CollectionHeader @emitLayout="setLayout" :layout="layout" />
      <CollectionGrid v-if="layout == 'GRID'" :products="products" />
      <CollectionList v-if="layout == 'LIST'" :products="products" />
    </div>
  </div>
</template>

<script>
import CollectionSidebar from './CollectionSidebar.vue';
import CollectionHeader from './CollectionHeader.vue';
import CollectionGrid from './CollectionGrid.vue';
import CollectionList from './CollectionList.vue';
import products from '@/data/products';

const layout = {
  GRID: 'GRID',
  LIST: 'LIST',
}

export default {
  data () {
    return {
      products,
      layout: layout.GRID
    }
  },

  components: { 
    CollectionSidebar,
    CollectionHeader,
    CollectionGrid,
    CollectionList
  },

  methods: {
    setLayout (value) {
      this.layout = value
    }
  },

  computed: {
    products () {
      const products = this.$store.state.products.products
      return products
    },
    route () {
      return this.$route
    }
  },

  watch: {
    route : {
      handler () {
        console.log('change')
        const query = this.$route.query
        this.$store.dispatch('fetchProducts', query)
      },
      deep: true
    }
  },

  mounted () {
      this.$store.dispatch('fetchProducts', this.$route.query)
      console.log(this.$store.state.products.products)
  }
}
</script>

<style scoped>
</style>