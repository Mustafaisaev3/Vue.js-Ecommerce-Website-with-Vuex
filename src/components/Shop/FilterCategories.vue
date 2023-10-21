<template>
  <Filter :title="'Product Categories'">
    <ul class="w-full h-auto">
        <FilterCategoriesItem v-for="category in categories" :key="category.id" :category="category" @click="() => setCategory(category)"/>
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
            category: undefined
        }
    },

    components: {
        Filter,
        FilterCategoriesItem,
    },

    methods: {
        setCategory (category) {
            this.category = category
        }
    },

    computed: {
        categories () {
            const categories = this.$store.getters.categories.filter((category) => !category.parent)
            return categories
        }
    },

    watch: {
        category () {
            this.$emit('set_category', this.category._id)
        }
    },

    mounted () {
        this.$store.dispatch('fetchCategories')
    }

}
</script>

<style>

</style>