<template>
  <div class="container my-[50px]"> 
    <SectionTitle :title="data.name" :url="'/about'" />
    <div class="carousel">
        <Swiper
            :modules="modules"

            :space-between="30"
            :breakpoints="breakpoints"
            navigation
            autoplay
        >
            <SwiperSlide v-for="product in data.items" :key="product.id">
                <div class="card w-full h-auto sm:h-auto md:h-[400px] lg:h-[300px] flex flex-col items-center sm:flex-col md:flex-row lg:flex-row gap-4 relative">
                    <div class="w-[350px] h-full flex items-center overflow-hidden">
                        <img :src="product.images[0]" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="w-full h-full flex flex-col items-center sm:items-center md:items-start lg:items-start justify-center gap-4 md:pr-[50px] lg:pr-[50px]">
                        <h4 class="text-[14px] text-[#0068c9] font-semibold">
                            <a href="#">{{ product.title }}</a>
                        </h4>
                        <p class="text-left text-[14px]">Designed by Hans J. Wegner in 1949 as one of the first models created especially for Carl Hansen & Son,...</p>
                        <div class="w-full h-auto">
                            <div class="w-full h-[8px] bg-slate-300 rounded-md overflow-hidden">
                                <div class="w-[70%] h-full bg-[#f22]"></div>
                            </div>
                            <div class="flex items-center justify-between text-sm pt-2">
                                <div>Sold:85</div>
                                <div>Available:15</div>
                            </div>
                        </div>
                        <span class="inline-block text-[#0d0d0d] text-[20px] font-semibold pt-2">${{ product.price }}</span>
                        <div class="w-full h-auto flex items-center rounded-b-[20px]">
                            <div class="w-full h-[50px] flex items-center justify-center rounded-[30px] text-white bg-[#16bcdc] cursor-pointer">Add to Card</div>
                        </div>
                    </div>
                    <!-- Badges Block -->
                    <div class="absolute top-0 left-0 p-[20px] flex flex-col gap-2">
                        <BadgeGreen :text="'50%'" />
                        <BadgeRedVue :text="'HOT'"/>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';
import BadgeGreen from '@/components/Badge/BadgeGreen.vue';
import BadgeRedVue from '@/components/Badge/BadgeRed.vue';
import { TwoColumnSliderBreakpoints } from '@/utils/swiperBreakpoints';
import products from '@/data/products';
// import Swiper core and required modules
import { Navigation, Autoplay  } from 'swiper';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


export default {
    data(){
        return{
            modules: [Navigation, Autoplay ],
            products
        }
    },
    
    props: ['data'],

    components: {
        SectionTitle,
        Swiper, 
        SwiperSlide,
        BadgeGreen,
        BadgeRedVue
    },

    computed: {
        breakpoints () {
            return TwoColumnSliderBreakpoints
        }   
    },

    methods: {
        
    }
}
</script>

<style>
.carousel:hover .swiper-button-prev,
.carousel:hover .swiper-button-next{
    display: flex;
}
.swiper-button-prev, .swiper-button-next{
    display: none;
    color: white;
    font-size: 10px;
    background-color: rgba(128, 128, 128, 0.56);
    padding: 25px;
    border-radius: 100%;
    transition: 0.5s;
}

.swiper-button-prev:hover, .swiper-button-next:hover{
    color: black;
    font-size: 10px;
    background-color: #0068c9;
    padding: 25px;
    border-radius: 100%;
}
.swiper-button-prev::after, .swiper-button-next::after{
    font-size: 10px;
}

.swiper-slide {
    width: auto;
}
</style>