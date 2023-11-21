<template>
  <div class="w-full mb-[10px]">
    <select 
        class="p-[14px] rounded-md" 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        :class="{'error': error}"
    >
        <option v-for="country in countries" :value="country.value" :key="country.value">
        {{ country.label }}
        </option>
    </select>
    <span v-if="error" class="text-[red] text-[13px]">{{ error }}</span>
  </div>
</template>

<script>
export default {
    props: ['countries', 'modelValue', 'error'],
    methods: {
        onSelect (e) {
            console.log(e.target)
        }
    }
}
</script>

<style>
    select {
        background: #fff;
        border: 1px solid #e5e5e5;
        padding: 0 15px;
        outline: 0;
        font-weight: 400;
        font-size: 16px;
        width: 100%;
        line-height: 50px;
        height: 50px;
        border-radius: 5px;
        color: rgb(39, 39, 39);
    }

    select.error {
        border-color: red;
    }
</style>