<template>
  <div class="w-full h-auto mb-[20px]">
    <label v-if="label">{{ label }} <span class="text-[red]">*</span></label>
    <input 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        :class="{'error': error}"
    />
    <span v-if="error" class="text-[red] text-[13px]">{{ error }}</span>
  </div>
</template>

<script>
export default {
    props: ['label', 'modelValue', 'error']
}
</script>

<style scoped>
    label {
        font-size: 14px;
        color: #666;
        font-weight: 400;
        line-height: 1;
        display: inline-block;
    }

    input {
        background: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 3px;
        padding: 0 15px;
        outline: 0;
        font-weight: 400;
        font-size: 14px;
        /* border: 2px solid #ddd; */
        width: 100%;
        margin-top: 10px;
        line-height: 50px;
        height: 50px;
        border-radius: 2px;
        color: #999;
    }

    input.error {
        border-color: red;
    }
</style>