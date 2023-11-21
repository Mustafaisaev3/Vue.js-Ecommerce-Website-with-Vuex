<template>
  <Filter :title="title">
    <div class="flex gap-3 flex-wrap">
        <FilterRadio v-for="option in options" :key="option._id" :name="title" :value="option.value" @click="() => setValue(option.value)"/> 
    </div>
  </Filter>
</template>

<script>
import Filter from '../Common/Filter/Filter.vue'
import FilterRadio from '../Common/Filter/FilterRadio.vue';

export default {
  data () {
    return {
      value: undefined
    }
  },
  props: ['title', 'options'],
  components: {
    Filter,
    FilterRadio
  },
  methods: {
    setValue (value) {
      this.value = value
    }
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