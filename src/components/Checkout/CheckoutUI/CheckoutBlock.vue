<template>
  <div class="w-full h-auto pt-4">
    <h2 
      class="text-[white] text-[25px] pb-1"
      :style="{'font-size': textSize}"
    >{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
const TextSize = {
    xl: '25px',
    md: '20px',
    sm: '16px',
}

export default {
    props: ['title', 'size'],
    computed: {
        textSize () {
            return this.size ? TextSize[this.size] : TextSize.xl
        }
    }
}
</script>

<style>

</style>