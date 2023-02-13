<template>
  <div class="container my-[70px]">
    <div class="w-full h-auto grid grid-cols-3 grid-rows-1 gap-5">
        <div class="banner_wrapper rounded-[20px] overflow-hidden relative">
            <img :src="require('@/assets/images/banner_row/banner1.webp')" alt="banner_1" class="transition-all">
            <div class="absolute top-0 left-0 w-full h-full py-[30px] px-[50px]">
                <div class="text-white text-[25px]">
                    Microsoft <br/> Surface Laptop 14
                </div>
                <div class="text-white text-[18px] pt-4">
                    Up To -30%
                </div>
            </div>
        </div>
        <div class="banner_wrapper rounded-[20px] overflow-hidden relative">
            <img :src="require('@/assets/images/banner_row/banner2.webp')" alt="banner_2" class="transition-all">
            <div class="absolute top-0 left-0 w-full h-full py-[30px] px-[50px]">
                <div class="text-white text-[25px]">
                    Cameras <br/> Best Sport Edition
                </div>
                <div class="text-white text-[18px] pt-4">
                    Up To -20%
                </div>
            </div>
        </div>
        <div class="banner_wrapper rounded-[20px] overflow-hidden relative">
            <img :src="require('@/assets/images/banner_row/banner3.webp')" alt="banner_3" class="transition-all">
            <div class="absolute top-0 left-0 w-full h-full py-[30px] px-[50px]">
                <div class="text-white text-[25px]">
                    Sneaker <br/> Nike Air Max 90
                </div>
                <div class="text-white text-[18px] pt-4">
                    Up To -60%
                </div>
            </div>    
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.banner_wrapper:hover img {
    transition: 1s;
    transform: scale(1.3);
}
</style>