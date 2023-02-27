<template>
  <div class="container">
    <Breadcrumbs />
    <Collection />
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue'
import Collection from '@/components/Collection/Collection.vue';
export default {
  components: { 
    Breadcrumbs,
    Collection
  },

}
</script>

<style>

</style>