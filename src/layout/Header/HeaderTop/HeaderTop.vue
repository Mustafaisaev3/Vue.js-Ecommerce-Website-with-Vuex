<template>
  <div class="container h-[100px] flex items-center justify-between">
    <div class="header-logo">
        <div class="w-auto h-auto text-[30px] text-white">
            <a href="#" class="cursor-pointer">E-COMMERCE</a>
        </div>
    </div>
    <div class="header-search">
        <div class="w-[600px] h-[50px] flex items-center justify-between bg-white rounded-md overflow-hidden p-1">
            <input type="text" class="w-full h-full px-4 outline-none" placeholder="Search for products ...">
            <button class="!w-[40px] h-[40px] text-white rounded-md flex items-center justify-center bg-[#16bcdc] hover:bg-[#14a8c5] transition-all ">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    </div>
    <div class="header-top__meta">
        <ul class="flex items-center gap-6">
            <li class="flex items-center cursor-pointer">
                <div class="text-white text-[30px]">
                    <i class="fa-regular fa-user"></i>
                </div>
                <div class="pl-2">
                    <span class="text-[#a3afef] text-xs mb-1 block">Login</span>
                    <span class="text-white block">Login / Register</span>
                </div>
            </li>
            <li class="flex items-center cursor-pointer">
                <div class="text-white text-[30px]">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="pl-2">
                    <span class="text-[#a3afef] text-xs mb-1 block">Favorite</span>
                    <span class="text-white block">My Wishlist</span>
                </div>
            </li>
            <li class="flex items-center cursor-pointer">
                <div class="text-white text-[30px]" @click="openCart">
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
                <div class="pl-2">
                    <span class="text-[#a3afef] text-xs mb-1 block">Your Cart: </span>
                    <span class="text-white block">$69.00</span>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { UIActionsType } from '@/store/modules/ui';

export default {
    methods: {
        openCart () {
            this.$store.commit(UIActionsType.OPEN_DRAWER, {
                view: 'CART_VIEW',
                data: 'CART'
            })
        }
    }
}
</script>

<style>

</style>