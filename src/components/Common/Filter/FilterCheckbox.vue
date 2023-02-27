<template>
  <div class="w-auto h-auto">
    <label :for="value" class="hover:text-[#16BCDC]">
        <input type="checkbox" :id="value" :name="value" class="hidden">
        <div class="flex items-center gap-2 ">
            <span class="checkbox_span w-4 h-4 rounded-full border border-[#cfcfcf]"></span>
            <span class="checkbox_text">{{ value }}</span>
        </div>
    </label>
  </div>
</template>

<script>
export default {
    props: ['value']

}
</script>

<style scoped>
input:checked + div .checkbox_span {
    background: #16BCDC;
    border-color: #16BCDC;
}
</style>