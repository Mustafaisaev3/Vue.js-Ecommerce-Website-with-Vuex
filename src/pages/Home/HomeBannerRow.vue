<template>
  <div class="container my-[70px]">
    <div class="w-full h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-5">
        <div v-for="banner in banners.items" :key="banner._id" class="banner_wrapper rounded-[20px] overflow-hidden relative">
            <img :src="banner.image" alt="banner_1" class="transition-all w-full">
            <div class="absolute top-0 left-0 w-full h-full py-[15px] sm:py-[20px] md:py-[25px] lg:py-[30px] px-[50px] flex flex-col justify-center gap-4 sm:gap-4 md:gap-2 lg:gap-4">
                <div class="text-white text-[18px] sm:text-[25px] md:text-[20px] lg:text-[25]">
                    Microsoft <br/> Surface Laptop 14
                </div>
                <div class="text-white text-[12px] sm:text-[12px] md:text-[16px] lg:text-[18]">
                    Up To -30%
                </div>
            </div>
        </div>
        <!-- <div class="banner_wrapper rounded-[20px] overflow-hidden relative">
            <img :src="require('@/assets/images/banner_row/banner2.webp')" alt="banner_2" class="transition-all w-full">
            <div class="absolute top-0 left-0 w-full h-full py-[15px] sm:py-[20px] md:py-[25px] lg:py-[30px] px-[50px] flex flex-col justify-center gap-4 sm:gap-4 md:gap-2 lg:gap-4">
                <div class="text-white text-[18px] sm:text-[25px] md:text-[20px] lg:text-[25]">
                    Cameras <br/> Best Sport Edition
                </div>
                <div class="text-white text-[12px] sm:text-[12px] md:text-[16px] lg:text-[18]">
                    Up To -20%
                </div>
            </div>
        </div>
        <div class="banner_wrapper rounded-[20px] overflow-hidden relative">
            <img :src="require('@/assets/images/banner_row/banner3.webp')" alt="banner_3" class="transition-all w-full">
            <div class="absolute top-0 left-0 w-full h-full py-[15px] sm:py-[20px] md:py-[25px] lg:py-[30px] px-[50px] flex flex-col justify-center gap-4 sm:gap-4 md:gap-2 lg:gap-4">
                <div class="text-white text-[18px] sm:text-[25px] md:text-[20px] lg:text-[25]">
                    Sneaker <br/> Nike Air Max 90
                </div>
                <div class="text-white text-[12px] sm:text-[12px] md:text-[16px] lg:text-[18]">
                    Up To -60%
                </div>
            </div>    
        </div> -->
    </div>
  </div>
</template>

<script>
export default{
    data () {
        return {
            banners: this.$props.data
        }
    },

    props: ['data']
}
</script>

<style>
.banner_wrapper:hover img {
    transition: 1s;
    transform: scale(1.3);
}
</style>