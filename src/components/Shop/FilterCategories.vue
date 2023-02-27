<template>
  <Filter :title="'Product Categories'">
    <ul class="w-full h-auto">
        <FilterCategoriesItem v-for="category in categories" :key="category.id" :category="category" />
    </ul>
  </Filter>
</template>

<script>
import Filter from '@/components/Common/Filter/Filter.vue';
import FilterCategoriesItem from '../Common/Filter/FilterCategoriesItem.vue';
import categories from '@/data/categories';

export default {
    data () {
        return {
            categories
        }
    },
    components: {
        Filter,
        FilterCategoriesItem,
    },

}
</script>

<style>

</style>