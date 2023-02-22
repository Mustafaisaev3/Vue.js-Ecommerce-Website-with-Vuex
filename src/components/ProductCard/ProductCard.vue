<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div 
        class="card min-w-[200px] h-[330px] relative" 
        :class="{'rounded-b-[0]': showBtn}" 
        @mouseenter="toggleShowBtn" 
        @mouseleave="toggleShowBtn"
    >
        <div class="w-full h-full relative">
            <a href="#" >
                <img class="w-full h-[200px] object-cover" :src="product.images[0]"/>
                
                <!-- Badges -->
                <div class="absolute top-0 left-0 w-auto h-auto flex flex-col gap-2">
                    <div class="w-[50px] h-[20px] rounded-sm flex items-center justify-center bg-[#27eb12] text-white text-sm">50%</div>
                    <div class="w-[5s0px] h-[20px] rounded-sm flex items-center justify-center bg-[#eb1212] text-white text-sm">HOT</div>
                </div>
            </a>
            <h4 class="text-[14px] text-[#0068c9]">
                <a href="#">{{ product.title }}</a>
            </h4>
            <span class="inline-block text-[#0d0d0d] text-[20px] font-semibold pt-2">${{ product.price }}</span>
        </div>

        <!-- Add to cart btn -->
        <div v-show="showBtn" @click="add_to_cart" class="w-full h-auto flex items-center justify-center p-4 rounded-b-[20px] absolute top-[90%] left-0 bg-white">
            <div class="w-[180px] h-[50px] flex items-center justify-center rounded-[30px] text-white bg-[#16bcdc] ">Add to Card</div>
        </div>

        <!-- Product overlay Buttons -->
        <div v-show="showBtn" class="absolute top-0 right-0 p-4 flex flex-col gap-4">
            <div @click="addToWishlist" class="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-gray-300 hover:bg-[#16bcdc] hover:text-white">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-gray-300 hover:bg-[#16bcdc] hover:text-white">
                <i class="fa-solid fa-layer-group"></i>
            </div>
            <div @click="openModal" class="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-gray-300 hover:bg-[#16bcdc] hover:text-white">
                <i class="fa-regular fa-eye"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { UIActionsType } from '@/store/modules/ui'

export default {
    data(){
        return{
            showBtn: false
        }
    },  

    props: ['product'],

    computed: {
        
    },

    methods: {
        toggleShowBtn() {
            this.showBtn = !this.showBtn
        },
        openModal() {
            this.$store.commit(UIActionsType.OPEN_MODAL, {
                view: 'PRODUCT_VIEW',
                data: this.product
            })
            // this.$store.commit(UIActionsType.SET_MODAL_VIEW, 'PRODUCT_VIEW')

            console.log(this.$store.state)
        },
        add_to_cart() {
            this.$store.dispatch('addProductToCart', {
                product: this.product,
                quantity: 1
            })
        },
        addToWishlist () {
            this.$store.dispatch('addProductToWishlist', this.product)
        }
    }
}
</script>

<style>

</style>