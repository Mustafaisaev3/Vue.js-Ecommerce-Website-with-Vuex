<template>
  <div class="container my-[70px]">
    <div class="w-full h-auto">
        <SectionTitle :title="'From The Blog'" />
        <div class="carousel h-auto flex gap-2">
            <Swiper
                :modules="modules"
                :breakpoints="breakpoints"
                :space-between="20"
                navigation
                autoplay
            >
                <SwiperSlide v-for="blog in blog_posts" :key="blog.id" class=" pb-5">
                    <div class="card w-full h-auto relative p-0 overflow-hidden hover:shadow-lg">
                        <div class="w-full h-[200px] overflow-hidden">
                            <img :src="blog.images[0]" alt="blog_image" class="object-cover w-full">
                        </div>
                        <div class="w-full p-[20px] flex flex-col gap-2 ">
                            <h2 class="text-left font-semibold">{{ blog.title }}</h2>
                            <div class="w-full text-sm text-left">
                                <div class="text-[#4f4f4f]">POST BY <span class="text-[#16bcdc]">{{ blog.author }}</span></div>
                                <div class="text-[#4f4f4f]">{{ blog.date }}</div>
                            </div>
                            <div class="text-sm text-left text-[#4f4f4f] border-b-[1px] border-[#d2d2d2] pb-[20px]">{{ blog.text }}</div>
                        </div>
                        <div class="w-full h-auto px-[20px] pb-[20px] text-left ">
                            <a href="#" class="text-[#4f4f4f] hover:text-[#16bcdc] transition-all">Read More</a>
                        </div>

                        <!-- Badge -->
                        <div class="absolute top-0 left-0 p-[20px]">
                            <BadgeBlue :text="'CAMERAS'" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';
import BadgeBlue from '@/components/Badge/BadgeBlue.vue'
import {BlogSliderBreakpoints} from '@/utils/swiperBreakpoints';
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
            modules: [Navigation, Autoplay ],
            blog_posts: blog
        }
    },

    computed: {
        breakpoints () {
            return BlogSliderBreakpoints
        }
    },

    components: {
        BadgeBlue,
        SectionTitle,
        Swiper, 
        SwiperSlide,
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