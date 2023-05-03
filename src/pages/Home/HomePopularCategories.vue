<template>
  <div class="container mb-[25px]">
    <SectionTitle :title="'Popular Categories'" />
    <div class="w-full h-auto pb-5">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            <div v-for="categori in categories" :key="categori" class="popular-categori__item rounded-[20px] overflow-hidden relative">
                <a href="#">
                    <img :src="categori.image" alt="" class="transition-all w-full">
                    <div class="w-full h-full p-[20px] absolute top-0 left-0 flex flex-col justify-center">
                        <div class="text-[14px] text-[#fff]">{{ categori.title }}</div>
                        <div class="text-[12px] text-[#b0b0b0] pt-2">( 11  items  )</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'
import popularCategories from '@/data/popularCategories';
export default {
    data () {
        return {
            categories: popularCategories
        }
    },
    components: {
        SectionTitle
    }
}
</script>

<style>
    .popular-categori__item:hover img{
        transform: scale(1.2);
        transition-duration: 1.5s;
        transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1);
    }
</style>