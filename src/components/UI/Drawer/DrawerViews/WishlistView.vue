<template>
    <div class="w-full h-full flex flex-col">
        <div class="cart-header !h-[60px] w-full bg-[#f5f5f5] px-7 flex items-center justify-between">
            <div class="text-[#222222] text-[16px] font-semibold">Wishlist</div>
            <IconClose style="color: #222222; font-size: 20px; cursor: pointer;" @click="closeCart"/>
        </div>
        <div class="cart-body w-full py-4 px-7 flex-1 overflow-y-auto ">
            <div v-for="product in products" :key="product.id" class="cart-item flex py-4">
                <div class="w-[100px] h-[100px]">
                    <img class="w-full h-full" :src="product.images[0]" alt="">
                </div>
                <div class="flex-1 px-2">
                    <h2 class="text-[14px] text-[#0068c9] font-semibold pb-2">{{ product.title }}</h2>
                    <div class="text-[14px] text-[#cc1414] font-bold">${{ product.price }} * {{ quantity }}</div>
                </div>
                <div class="w-auto cursor-pointer" @click="() => deleteFromWishlist(product.id)">
                    <IconClose style="color: #222222; font-size: 15px" />
                </div>
            </div>

        </div>
        <div class="cart-footer w-full h-auto px-7 pb-5 border-t-[1px] border-[#d1d1d1]">
            <div class="flex flex-col gap-2 py-5">
                <Button :buttonType="buttonTypes.PRIMARY">VIEW WISHLIST</Button>
            </div>
        </div>
    </div>
</template>

<script>
import IconClose from '~icons/mdi/close'
import Button from '../../Button/Button.vue';
import { ButtonTypes } from '@/types/button-types';
import { UIActionsType } from '@/store/modules/ui';

export default {
    components: {
        IconClose,
        Button
    },
    computed: {
        buttonTypes () {
            return ButtonTypes
        },
        products () {
            return this.$store.getters.wishlistProducts
        },
    },
    methods: {
        closeCart () {
            this.$store.commit(UIActionsType.CLOSE_DRAWER)
        },
        deleteFromWishlist (id) {
            this.$store.dispatch('deleteProductFromWishlist', id)
        }
    }
}
</script>

<style>

</style>