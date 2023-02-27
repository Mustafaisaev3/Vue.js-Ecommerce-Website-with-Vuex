<template>
  <div class="title-wrap mb-[25px] relative flex items-start justify-between text-left border-b-[1px] border-[#ebebeb]">
    <h3 v-color class="section-title w-auto text-[#222] text-[24px] pb-[15px] capitalize flex items-center justify-center border-b-[2px] border-[#16bcdc]">{{ title }}</h3>
    <div v-if="url" class="h-full flex items-center absolute right-0 top-0">
        <a :href="url" class="text-[#878c8e] flex items-center text-[14px] capitalize hover:text-[#16bcdc] transition-all">
            View All Products 
            <div class="pl-2">
                <i class="fa-solid fa-angle-right"></i>
            </div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    props: ['title', 'url' ]
}
</script>

<style>

</style>