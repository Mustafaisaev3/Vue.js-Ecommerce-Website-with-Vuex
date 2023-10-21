<template>
  <Filter :title="'Filter By Color'">
    <div class="flex flex-wrap gap-4">
      <FilterColorCheckbox 
        v-for="option in options" 
        :key="option._id" 
        :title="title" 
        :color="option.value" 
        @click="() => setValue(option.value)"
      />
    </div>
  </Filter>
</template>

<script>
import Filter from '../Common/Filter/Filter.vue'
import FilterColorCheckbox from '../Common/Filter/FilterColorCheckbox.vue'

export default {
  data () {
    return {
      value: undefined
    }
  },

  props: ['title', 'options'],

  methods: {
    setValue (value) {
      this.value = value
    }
  },

  components: {
    Filter,
    FilterColorCheckbox
  },

  watch: {
    value() {
      this.$emit('set_value', this.value)
    }
  }
}
</script>

<style>

</style>