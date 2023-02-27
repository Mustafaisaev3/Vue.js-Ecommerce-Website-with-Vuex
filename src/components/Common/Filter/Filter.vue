<template>
  <div class="w-full h-auto mb-[20px]">
    <div class="w-full h-auto mb-[30px] p-[27px] bg-white  border border-[#ebebeb] rounded-[3px]">
        <div class="header mb-[30px] pb-[12px] border-b border-[#ebebeb]">
            <h5 class="font-bold relative">{{ title }}</h5>
        </div>
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
.header > h5:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -13px;
    width: 60px;
    border-bottom: 2px solid #16BCDC;
}
</style>