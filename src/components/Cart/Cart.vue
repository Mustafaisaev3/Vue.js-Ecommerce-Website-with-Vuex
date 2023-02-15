<template>
    <div class="w-full h-full flex flex-col">
        <div class="cart-header h-[60px] w-full bg-[#f5f5f5] px-7 flex items-center justify-between">
            <div class="text-[#222222] text-[16px] font-semibold">Shoping Cart</div>
            <IconClose style="color: #222222; font-size: 20px; cursor: pointer;" @click="closeCart"/>
        </div>
        <div class="cart-body w-full py-4 px-7 flex-1 ">
            <div class="cart-item flex py-4">
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0606/6867/4281/products/34_3cacccb8-503d-493b-b962-6a34ec6e52e6_small.jpg?v=1636009384" alt="">
                </div>
                <div>
                    <h2 class="text-[14px] text-[#0068c9] font-semibold pb-2">Anker Soundcore Life Q20 Hybrid - 10G / Red</h2>
                    <div class="text-[14px] text-[#cc1414] font-bold">$283</div>
                </div>
                <div>
                    <IconClose style="color: #222222; font-size: 15px" />
                </div>
            </div>
            <div class="cart-item flex py-4">
                <div>
                    <img src="//cdn.shopify.com/s/files/1/0606/6867/4281/products/27_small.jpg?v=1636000439" alt="">
                </div>
                <div>
                    <h2 class="text-[14px] text-[#0068c9] font-semibold pb-2">Anker Soundcore Life Q20 Hybrid - 10G / Red</h2>
                    <div class="text-[14px] text-[#cc1414] font-bold">$283</div>
                </div>
                <div>
                    <IconClose style="color: #222222; font-size: 15px" />
                </div>
            </div>
            <div class="cart-item flex py-4">
                <div>
                    <img src="//cdn.shopify.com/s/files/1/0606/6867/4281/products/8_f2f2e4bc-9fb7-4af4-81c8-3d8f61130ebb_small.jpg?v=1636001621" alt="">
                </div>
                <div>
                    <h2 class="text-[14px] text-[#0068c9] font-semibold pb-2">Anker Soundcore Life Q20 Hybrid - 10G / Red</h2>
                    <div class="text-[14px] text-[#cc1414] font-bold">$283</div>
                </div>
                <div>
                    <IconClose style="color: #222222; font-size: 15px" />
                </div>
            </div>
            <div class="cart-item flex py-4">
                <div>
                    <img src="//cdn.shopify.com/s/files/1/0606/6867/4281/products/10_15fab898-c950-4b3f-ae78-325e233e3126_small.jpg?v=1636002227" alt="">
                </div>
                <div>
                    <h2 class="text-[14px] text-[#0068c9] font-semibold pb-2">Anker Soundcore Life Q20 Hybrid - 10G / Red</h2>
                    <div class="text-[14px] text-[#cc1414] font-bold">$283</div>
                </div>
                <div>
                    <IconClose style="color: #222222; font-size: 15px" />
                </div>
            </div>
        </div>
        <div class="cart-footer w-full h-auto px-7 pb-5 border-t-[1px] border-[#d1d1d1]">
            <div class="flex items-center justify-between py-5">
                <span>Total</span>
                <span class="text-[18px] text-[#222222] font-bold">$300</span>
            </div>
            <div class="flex flex-col gap-2">
                <Button :buttonType="buttonTypes.SECONDARY">View Cart</Button>
                <Button :buttonType="buttonTypes.PRIMARY">Checkout</Button>
            </div>
        </div>
    </div>
</template>

<script>
import IconClose from '~icons/mdi/close'
import Button from '../UI/Button/Button.vue';
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
        }
    },
    methods: {
        closeCart () {
            this.$store.commit(UIActionsType.CLOSE_DRAWER)
        }
    }
}
</script>

<style>

</style>