<template>
  <div class="w-full h-auto bg-white p-[20px] flex mb-10">
    <div class="min-w-[600px] h-full flex">
        <ImageMagnifier :src="activeImage"
            :zoom-src="activeImage"
            :width="800"
            :height="700"
            zoom-width="500"
            zoom-height="500" 
        />
        <div class="w-[80px] h-full flex flex-col gap-2">
            <div 
                v-for="image in images" 
                :key="image" 
                class="w-[80px] h-[80px] overflow-hidden rounded-sm border-[1px] border-[#ebebeb]" 
                @click="() => setActiveImage(image)"
                :class="{'border-[#0063d1]': (image === activeImage)}"
            >
                <img :src="image" alt="" class="object-cover">
            </div>
        </div>
    </div>
    <div class="product-details h-full grow px-5">
        <h1 class="text-[#0068c9] text-[24px] mb-[15px]">
            <a href="#">Zoom Samsung Galaxy International Vs</a>
        </h1>
        <div class="price pb-[25px] mb-[25px] border-b-[1px] border-[#ebebeb]">
            <p class="text-[14px] text-[#cc1414] mb-10px">Discount: $9.00 (14%) </p>
            <span class="text-[24px] text-[#222222]">
                <span class="text-[#cc1414]">$46.50</span>
                <span class="text-[16px] text-[#a4a4a4] pl-2">$53.97</span>
            </span>
        </div>
        <div class="product-description text-[14px] text-[#666] mb-[30px]">
            Designed by Hans J. Wegner in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique Chinese armchairs....View more
        </div>
        <div class="add-to-cart-block flex gap-2 mb-[20px]">
            <div class="counter w-[150px] h-[50px] flex items-center border">
                <button class="w-full h-full flex items-center justify-center text-[20px] cursor-pointer" @click="incrementProductCount">+</button>
                <div class="w-full h-full flex items-center justify-center text-[15px]">{{ productCount }}</div>
                <button class="w-full h-full flex items-center justify-center text-[20px] cursor-pointer" @click="decrementProductCount">-</button>
            </div>
            <Button :buttonType="'primary rounded-sm'">ADD TO CART</Button>
        </div>
        <div class="compare-wishlist flex gap-4 mb-[30px]">
            <div class="text-[#666] text-[14px] hover:text-[#16bcdc] transition-all cursor-pointer">Add To Compare</div>
            <div class="text-[#666] text-[14px] hover:text-[#16bcdc] transition-all cursor-pointer">Add To Wishlist</div>
        </div>
        <ul class="w-full h-auto flex flex-col gap-3 text-[14px] text-[#222]">
            <li class="w-full flex">
                <span class="w-[100px]">Real Time:</span>
                <span>21 Wisitors Now</span>
            </li>
            <li class="w-full flex">
                <span class="w-[100px]">Sku:</span>
                <span>N/A1</span>
            </li>
            <li class="w-full flex">
                <span class="w-[100px]">Product Type:</span>
                <span>Sectional Sofas</span>
            </li>
            <li class="w-full flex">
                <span class="w-[100px]">Availability:</span>
                <span class="text-[red]">Many in stock</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import Button from '@/components/UI/Button/Button.vue'
// import {zoomImageOnHover} from '@/utils/zoomImageOnHover.js'
import ImageMagnifier from '@/components/UI/ImageMagnifier/ImageMagnifier.vue'



const images = [
    require('@/assets/images/products/MicrosoftSurfaceLaptop1.webp'),
    require('@/assets/images/products/MicrosoftSurfaceLaptop2.webp'),
    require('@/assets/images/products/MicrosoftSurfaceLaptop3.webp'),
    require('@/assets/images/products/MicrosoftSurfaceLaptop4.webp'),
]



export default {
    data () {
        return {
            images,
            activeImage: images[0],
            productCount: 0,
            showZoom: false
        }
    },

    components: {
        Button,
        ImageMagnifier
    },

    methods: {
        setActiveImage (image) {
            return this.activeImage = image
        },
        incrementProductCount () {
            this.productCount += 1
        },
        decrementProductCount () {
            if(this.productCount == 0){
                return
            }
            this.productCount -= 1
        },
        showZoomContainer () {
            this.showZoom = true
        },
        noneZoomContainer () {
            this.showZoom = false
        },
    }
}
</script>

<style scoped>
.active {
    border: 1px solid black;
    border-radius: 5px;
}

/* .lens {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;

    background-color: rgba(255, 255, 255, 0.6);
}

.result {
    position: absolute;
    left: calc(100% + 50px);
    top: 30px;
    width: 300px;
    height: 300px;

    background-repeat: no-repeat;
} */

</style>