<template>
  <div class="flex gap-[30px] pb-[60px]">
    <CollectionSidebar />
    <div class="w-full h-[1000px]">
      <div class="w-full h-auto rounded-md overflow-hidden">
        <img class="w-full" src="https://cdn.shopify.com/s/files/1/0606/6867/4281/collections/cate_1_1080x.jpg?v=1637826003" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import CollectionSidebar from './CollectionSidebar.vue';

export default {
    components: { CollectionSidebar }
}
</script>

<style>

</style>