<template>
  <div class="collection-sidebar w-[400px] h-auto hidden lg:block">
    <FilterCategories @set_category="(category) => setCategory(category)"/>
    <div v-for="option in options" :key="option._id">
      <FilterByColors 
        v-if="option.title === 'Color'" 
        :title="option.title" 
        :options="option.values" 
        @set_value="(color) => setColor(color)"
      />
      <FilterRadioButtons 
        v-if="option.title === 'Size'" 
        :title="option.title" 
        :options="option.values"
        @set_value="(value) => setSize(value)"
      />
      <FilterRadioButtons 
        v-if="option.title === 'Width'" 
        :title="option.title" 
        :options="option.values"
        @set_value="(value) => setWidth(value)"
      />
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
      setSize (size) {
        this.filter.size = size
      },
      setWidth (width) {
        this.filter.width = width
      },
    },

    watch: {
      filter: {
        handler () {
          console.log(this.filter)
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