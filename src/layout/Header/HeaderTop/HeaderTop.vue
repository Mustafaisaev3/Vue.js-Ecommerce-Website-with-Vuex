<template>
  <div class="container h-[100px] flex items-center justify-between">
    <div class="header-logo">
        <div class="w-auto h-auto text-[30px] text-white">
            <a href="#" class="cursor-pointer" @click="this.$router.push('/')">E-COMMERCE</a>
        </div>
    </div>
    <div class="header-search">
        <div class="w-[600px] h-[50px] flex items-center justify-between bg-white rounded-md  p-1 relative">
            <input type="text" class="w-full h-full px-4 outline-none" placeholder="Search for products ...">
            <button class="!w-[40px] h-[40px] text-white rounded-md flex items-center justify-center bg-[#16bcdc] hover:bg-[#14a8c5] transition-all ">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <!-- <div class="absolute top-[100%] left-0 w-full h-[200px] bg-[#fff] rounded-md"></div> -->
        </div>
    </div>
    <div class="header-top__meta">
        <ul class="flex items-center gap-6">
            <li class="flex items-center cursor-pointer">
                <div class="text-white text-[40px] relative" @click="openLogin">
                    <IconAccountOutline />
                </div>
                <div class="pl-2">
                    <span class="text-[#a3afef] text-xs mb-1 block">Login</span>
                    <span class="text-white block">Login / Register</span>
                </div>
            </li>
            <li class="flex items-center cursor-pointer">
                <div class="text-white text-[35px] relative" @click="openWishlist">
                    <IconHeartOutline />
                    <Badge :text="wishlistItemsTotal" />
                </div>
                <div class="pl-2">
                    <span class="text-[#a3afef] text-xs mb-1 block">Favorite</span>
                    <span class="text-white block">My Wishlist</span>
                </div>
            </li>
            <li class="flex items-center cursor-pointer">
                <div class="text-white text-[35px] relative" @click="openCart">
                    <IconCartOutline />
                    <Badge :text="cartItemsTotal" />
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
import { ModalViewsType } from '@/types/modal-views-types';
import IconAccountOutline from '~icons/mdi/account-outline'
import IconHeartOutline from '~icons/mdi/heart-outline'
import IconCartOutline from '~icons/mdi/cart-outline'
import Badge from '@/components/UI/Badge/Badge.vue'

export default {
    data () {
        return {
            searchValue: ''
        }
    },
    components: {
        IconAccountOutline,
        IconHeartOutline,
        IconCartOutline,
        Badge
    },
    computed: {
        cartItemsTotal() {
            return this.$store.getters.cartItemsCount
        },
        wishlistItemsTotal() {
            return this.$store.getters.wishlistItemsCount
        },
    },
    methods: {
        openCart () {
            this.$store.commit(UIActionsType.OPEN_DRAWER, {
                view: 'CART_VIEW',
                data: 'CART'
            })
        },
        openWishlist () {
            this.$store.commit(UIActionsType.OPEN_DRAWER, {
                view: 'WISHLIST_VIEW',
                data: 'WISHLIST'
            })
        },
        openLogin () {
            this.$store.commit(UIActionsType.OPEN_MODAL, {
                view: ModalViewsType.LOGIN_VIEW,
                data: 'LOGIN'
            })
        }
    },
}
</script>

<style>

</style>