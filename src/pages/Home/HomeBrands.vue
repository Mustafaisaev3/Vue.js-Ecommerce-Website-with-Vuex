<template>
  <div class="my-[70px] bg-[#0068c9]">
    <div class="container w-full h-auto flex items-center py-4 gap-2">
        <Swiper
            :modules="modules"
            :breakpoints="breakpoints"
            :space-between="20"
            navigation
            autoplay
        >
            <SwiperSlide v-for="brand in data.items" :key="brand._id" class="h-full">
                <div class="rounded-lg overflow-hidden h-full w-full">
                    <img :src="brand.image" :alt="brand.image" class="w-full h-full">
                </div>
            </SwiperSlide>
        </Swiper>
        <!-- <div class="rounded-lg overflow-hidden">
            <img :src="require('@/assets/images/brands/brand_1.avif')" alt="">
        </div>
        <div class="rounded-lg overflow-hidden">
            <img :src="require('@/assets/images/brands/brand_2.avif')" alt="">
        </div>
        <div class="rounded-lg overflow-hidden">
            <img :src="require('@/assets/images/brands/brand_3.webp')" alt="">
        </div>
        <div class="rounded-lg overflow-hidden">
            <img :src="require('@/assets/images/brands/brand_4.webp')" alt="">
        </div>
        <div class="rounded-lg overflow-hidden">
            <img :src="require('@/assets/images/brands/brand_5.avif')" alt="">
        </div>
        <div class="rounded-lg overflow-hidden">
            <img :src="require('@/assets/images/brands/brand_6.avif')" alt="">
        </div>
        <div class="rounded-lg overflow-hidden">
            <img :src="require('@/assets/images/brands/brand_1.avif')" alt="">
        </div>
        <div class="rounded-lg overflow-hidden">
            <img :src="require('@/assets/images/brands/brand_2.avif')" alt="">
        </div> -->
    </div>
  </div>
</template>

<script>
import { BransSliderBreakpoints } from '@/utils/swiperBreakpoints';
import blog from '@/data/blog';
// import Swiper core and required modules
import { Navigation, Autoplay  } from 'swiper';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
    data () {
        return {
            breakpoints: BransSliderBreakpoints
        }
    },
    // computed: {
    //     breakpoints () {
    //         return BransSliderBreakpoints
    //     }
    // },

    props: ['data'],

    components: {
        Swiper, 
        SwiperSlide,
    }
}
</script>

<style>

</style>