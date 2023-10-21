<template>
  <div class="w-[400px] h-auto">
    <FilterCategories @set_category="(category) => setCategory(category)"/>
    <div v-for="option in options" :key="option._id">
      <FilterByColors 
        v-if="option.title === 'Color'" 
        :title="option.title" 
        :options="option.values" 
        @set_value="(color) => setColor(color)"
      />
      <FilterRadioButtons v-else :title="option.title" :options="option.values"/>
    </div>
    <!-- <FilterByBrands />
    <FilterByColors />
    <FilterBySize />
    <div class="w-full h-[60px] p-10 bg-cyan-500 rounded-xl" @click="updateFilters">

    </div> -->
  </div>
</template>

<script>
import FilterCategories from '../Shop/FilterCategories.vue';
import FilterByBrands from '../Shop/FilterByBrands.vue';
import FilterByColors from '../Shop/FilterByColors.vue';
import FilterBySize from '../Shop/FilterBySize.vue';
import FilterCheckboxes from '../Shop/FilterCheckboxes.vue';
import FilterRadioButtons from '../Shop/FilterRadioButtons.vue';

export default {
    data () {
      return {
        filter: {}
      }
    },

    components: {
      FilterCategories,
      FilterByBrands,
      FilterByColors,
      FilterBySize,
      FilterCheckboxes,
      FilterRadioButtons
    },

    computed: {
      options () {
        const options = this.$store.state.options.options
        return options
      },
    },

    methods: {
      updateFilters () {
        this.filter.category = 'apple'
      },
      setCategory (category) {
        this.filter.category = category
      },
      setColor (color) {
        this.filter.color = color
      },
    },

    watch: {
      filter: {
        handler () {
          this.$router.push({query: { ...this.filter }})
        },
        deep: true
      }
    },

    beforeMount () {
      this.$store.dispatch('fetchOptions')
      console.log(this.$store.state.options)
    }
}
</script>

<style>

</style>