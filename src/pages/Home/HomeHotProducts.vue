<template>
  <div class="container mb-[25px]">
    <SectionTitle :title="data.title || data.name" :url="'/about'" />
    <div class="carousel h-[400px] flex gap-5" >
        <Swiper
            :modules="modules"
            :space-between="40"
            navigation
            autoplay
            :breakpoints="breakpoints"
        >
            <SwiperSlide v-for="product in products.items" :key="product._id">
                <ProductCard :product="product" />
            </SwiperSlide>
        </Swiper>
    </div>
  </div>
</template>


<script>
import SectionTitle from '@/components/SectionTitle.vue';
import ProductCard from '@/components/Product/ProductCard.vue'
import {NormalSliderBreakpoints} from '@/utils/swiperBreakpoints';
import products from '@/data/products';

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
    data(){
        return{
            showBtn: false,
            products: this.$props.data,
            modules: [Navigation, Autoplay ],
        }
    },  

    props: ['data'],

    components: {
        SectionTitle,
        ProductCard,
        Swiper, 
        SwiperSlide,
        
    },

    computed: {
        breakpoints () {
            return NormalSliderBreakpoints
        }
    },

    methods: {
        toggleShowBtn () {
            this.showBtn = !this.showBtn
        }
    },
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