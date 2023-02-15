<template>
  <div class="w-auto md:w-[1000px] md:h-auto grid grid-cols-1 lg:grid-cols-2  overflow-hidden">
    <div class="w-full h-[500px]">
        <Swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="80"
            autoplay
            pagination
            class="h-full"
        >
            <SwiperSlide v-for="image,index in data.images" :key="index">
                <!-- <ProductCard :product="product" /> -->
                <!-- <img :src="data.images[0]" alt="data.title" class="h-full object-cover"> -->
                <img :src="image" alt="data.title" class="h-full object-cover">
            </SwiperSlide>
        </Swiper>
    </div>
    <div class="py-[30px] px-[20px] flex flex-col ">
        <div class="flex-1">
            <h1 class="text-[24px] text-[#0068c9] font-semibold pb-[20px]">{{ data.title }}</h1>
            <div class="price text-[24px] text-[#222222] font-bold pb-[20px] mb-[30px] border-b-[1px] border-[#e3e3e3]">
                <div class="text-[13px] text-[#cc1414]">Discount: $27.00 (29%)</div>
                ${{ data.price }}
            </div>
            <div class="text-[14px] text-[#666] mb-[30px]">
                Designed by Hans J. Wegner in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique Chinese armchairs....View more
            </div>
        </div>
        <div class="w-full h-auto">
            <button class="bg-[#16bcdc] text-white w-full py-4 rounded-md flex items-center justify-center ">Add to Cart</button>
        </div>
    </div>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Autoplay, Pagination  } from 'swiper';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
    props: ['data'],

    data () {
        return {
            modules: [ Autoplay, Pagination ],
        }
    },
    
    components: {
        Swiper,
        SwiperSlide,
    }
}
</script>

<style>

</style>