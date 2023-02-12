<template>
  <section class="main-slidershow container w-full h-[400px] py-8 flex gap-8">
    <div class="w-[900px] h-auto rounded-[30px] overflow-hidden">
        <Carousel class="w-full h-full overflow-hidden relative" :items-to-show="1" :autoplay="3000">
            <Slide class="w-full h-full relative" v-for="slide in carouselSlides" :key="slide">
                <img class="w-full h-full object-cover " :src="slide.image" >
                <div class="w-full h-full flex flex-col items-start justify-between absolute top-0 left-0 p-[50px]">
                    <div>
                        <h3 class="w-[60%] text-white text-[40px] text-left leading-10">{{ slide.title }}</h3>
                        <p class="text-white text-[20px] text-left pt-5">{{ slide.subTitle }}</p>
                    </div>
                    <div>
                        <a :href="slide.link" class="w-[200px] h-[50px] flex items-center justify-center rounded-[30px] text-white border-[2px] border-white hover:bg-white hover:text-black transition-all" >
                            Discover Now
                        </a>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <!-- <Navigation /> -->
                <Pagination />
            </template>
        </Carousel>
    </div>
    
    <div class="w-auto h-full grid grid-cols-2 grid-rows-2 gap-4">
        <div v-for="banner in bannerSlides" :key="banner"  class="banner-item w-full h-full rounded-[30px] bg-[#cc56ff] relative overflow-hidden">
            <img class="banner-image w-full h-full object-cover" :src="banner" />
            <div class="w-full h-full flex flex-col items-start justify-between absolute top-0 left-0 p-[30px]">
                <h3 class="text-white text-[25px] text-left leading-7">Phone<br> Galaxy S20</h3>
                <p class="text-white text-[18px] text-left pt-5">Cellphone & Tablets</p>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
    data () {
        return {
            carouselSlides: [
                {
                    title: 'Gaming Headset Brilliant Lighting Effect',
                    subTitle: 'Wireless Connection With TV, Computer, Laptop...',
                    image: require('@/assets/images/slider/slide1.png'),
                    link: '#'
                },
                {
                    title: 'Sport Edition Red Special Edition ',
                    subTitle: 'Wireless Connection With TV, Computer, Laptop...',
                    image: require('@/assets/images/slider/slide2.png'),
                    link: '#'
                },
                {
                    title: 'Sport Edition Best Choise of Your ',
                    subTitle: 'Wireless Connection With TV, Computer, Laptop...',
                    image: require('@/assets/images/slider/slide3.png'),
                    link: '#'
                }
                // require('@/assets/images/slider/slide1.png'),
                // require('@/assets/images/slider/slide2.png'),
                // require('@/assets/images/slider/slide3.png'),
            ],
            bannerSlides: [
                require('@/assets/images/banners/banner1.avif'),
                require('@/assets/images/banners/banner2.avif'),
                require('@/assets/images/banners/banner3.avif'),
                require('@/assets/images/banners/banner4.avif'),
            ]
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        // Navigation,
    },
}
</script>

<style>
/* .carousel__item {
  min-height: 200px;
  width: 500px;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
} */

.banner-item:hover .banner-image{
    transform: scale(1.2);
    transition-duration: 1.5s;
}

.carousel__viewport{
    position: relative;
    height: 100%;
}
.carousel__track{
    height: 100%;
}

.carousel__pagination{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5%;
}

.carousel__pagination-button:hover::after {
    background-color: white !important;
    width: 8px;
    height: 8px;
    border-radius: 100%;
}

.carousel__pagination-button--active::after {
    background-color: white !important;
    width: 30px !important;
    border-radius: 5px !important;
}

.carousel__pagination-button::after {
    display: block;
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: #ffffff4a;
}

/* .carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
} */
</style>