<template>
    <div 
        class="item w-full h-auto border-[#ebebeb] bg-white p-5 relative"
        @mouseenter="() => showHoverBtns = true"
        @mouseleave="() => showHoverBtns = false"
    >
        <div class="w-full h-[230px]">
            <img :src="product.images[0]" alt="" class="w-full h-full object-contain">
        </div>
        <div class="w-full h-auto flex flex-col">
            <h4 class="text-[15px] font-semibold text-[#0068c9] pb-1 min-h-[40px]">
                <a :href="`/product/${product._id}`">{{ product.title }}</a>
            </h4>
            <div class="text-[16px] font-bold text-[#222] pb-4">£{{ product.price }}</div>
            <div class="flex flex-col gap-2 flex-1">
                <Button @click="add_to_cart" :buttonType="'primary'" class="uppercase rounded-sm text-[12px] md:text-[14px]">Add to cart</Button>
                <Button @click="openModal" :buttonType="'secondary'" class="uppercase rounded-sm text-[12px] md:text-[14px]">Quick View</Button>
            </div>
        </div>

        <!-- Buttons on hover -->
        <div v-show="showHoverBtns" class="absolute top-2 right-2 flex flex-col gap-2 ">
            <div @click="addToWishlist" class="w-[30px] h-[30px] text-[#666] bg-[#f5f5f5] hover:bg-cyan-500 hover:text-white rounded-sm flex items-center justify-center transition-all cursor-pointer">
                <IconHeart />
            </div>
            <div class="w-[30px] h-[30px] text-[#666] bg-[#f5f5f5] hover:bg-cyan-500 hover:text-white rounded-sm flex items-center justify-center transition-all cursor-pointer">
                <IconLayer />
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../UI/Button/Button.vue';
import { UIActionsType } from '@/store/modules/ui';
import notificationTypes from '@/types/notification-types';
import IconHeart from '~icons/mdi/heart-outline'
import IconLayer from '~icons/mdi/layers-triple-outline'

export default {
    data () {
        return {
            showHoverBtns: false,
        }
    },
    props: ['product'],
    components: {
        Button,
        IconHeart,
        IconLayer
    },
    methods: {
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

            this.$store.dispatch('addNotification', {type: notificationTypes.SUCCESS, text: 'Product added to cart'})
        },
        addToWishlist () {
            this.$store.dispatch('addProductToWishlist', this.product)
        }
    }
}
</script>


<style>

</style>