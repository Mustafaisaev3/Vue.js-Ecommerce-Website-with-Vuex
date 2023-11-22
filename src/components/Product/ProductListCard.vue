<template>
    <div 
        class="w-full h-auto flex p-5 border border-[#ebebeb] border-b-0"
        @mouseenter="() => showHoverBtns = true"
        @mouseleave="() => showHoverBtns = false"
    >
        <div class="max-w-[300px] overflow-hidden relative">
            <img :src="product.images[0]" alt="" class="w-full h-full object-contain">
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
        <div class="flex w-full items-center justify-between">
            <div class="w-full h-full py-[30px] px-[50px]">
                <h4 class="text-[14px] text-[#0068c9] pb-2 min-h-[50px]">
                    <a href="#">{{ product.title }}</a>
                </h4>
                <p>
                    {{ product.description }}
                </p>
            </div>
            <div class="min-w-[300px] pl-4">
                <div class="text-[16px] text-[#222] font-bold pb-4">£{{ product.price }}</div>
                <div class="flex flex-col gap-2 flex-1">
                    <Button @click="add_to_cart" :buttonType="'primary'" class="uppercase rounded-sm ">Add to cart</Button>
                    <Button @click="openModal" :buttonType="'secondary'" class="uppercase rounded-sm ">Quick View</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../UI/Button/Button.vue';
import IconHeart from '~icons/mdi/heart-outline'
import IconLayer from '~icons/mdi/layers-triple-outline'
import { UIActionsType } from '@/store/modules/ui';
import notificationTypes from '@/types/notification-types';

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