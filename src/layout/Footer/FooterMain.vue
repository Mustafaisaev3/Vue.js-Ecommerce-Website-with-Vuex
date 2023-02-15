<template>
  <div class="w-full h-auto grid grid-cols-7 gap-4 py-[60px]">
    <div class="col-span-2">
        <h3 class="text-white pb-[25px] text-[18px] capitalize">Download App</h3>
        <div class="pb-[25px] text-[14px] text-[#999999]">
            Dukamarket App is now available on App Store & Google Play.
            <br/>
            Get it now. 
        </div>
        <div class="pb-[25px]">
            <img class="pb-2" :src="require('@/assets/images/app_1.png')" alt="">
            <img :src="require('@/assets/images/app_2.png')" alt="">
        </div>
        <div class="pb-[25px] flex gap-2">
            <div class="w-[40px] h-[40px] bg-[#0ecae6] rounded-sm flex items-center justify-center" @click="openModal()">
                <IconTwitter />
            </div>
            <div class="w-[40px] h-[40px] bg-[#2d88ff] rounded-sm flex items-center justify-center">
                <IconFacebook />
            </div>
            <div class="w-[40px] h-[40px] bg-[#c72982] rounded-sm flex items-center justify-center">
                <IconPinterest />
            </div>
            <div class="w-[40px] h-[40px] bg-[#c619b8] rounded-sm flex items-center justify-center">
                <IconInstagram />
            </div>
            <div class="w-[40px] h-[40px] bg-[#ff0e00] rounded-sm flex items-center justify-center">
                <IconYoutube />
            </div>
        </div>
    </div>
    <div class="">
        <h3 class="text-white pb-[25px] text-[18px] capitalize">My Account</h3>
        <ul class="flex flex-col gap-4">
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Search</div>
                </a>
            </li>
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Product Support</div>
                </a>
            </li>
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Checkout</div>
                </a>
            </li>
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Shopping Cart</div>
                </a>
            </li>
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Wishlist</div>
                </a>
            </li>
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>New Arrivals</div>
                </a>
            </li>
        </ul>
    </div>

    <div class="">
        <h3 class="text-white pb-[25px] text-[18px] capitalize">Customer Service</h3>
        <ul class="flex flex-col gap-4">
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Help Center</div>
                </a>
            </li>
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Contact Us</div>
                </a>
            </li>
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Report Abuse</div>
                </a>
            </li>
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Submit a Dispute</div>
                </a>
            </li>
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Policies & Rules</div>
                </a>
            </li>
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Online Shopping</div>
                </a>
            </li>
        </ul>
    </div>

    <div class="">
        <h3 class="text-white pb-[25px] text-[18px] capitalize">Hot Categories</h3>
        <ul class="flex flex-col gap-4">
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Laptop & Computer (17)</div>
                </a>
            </li>
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Speaker & Audio (8)</div>
                </a>
            </li>
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Cellphone (11)</div>
                </a>
            </li>
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Video Game (18)</div>
                </a>
            </li>
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Accessories (12)</div>
                </a>
            </li>
            <li class="menu_item">
                <a href="#" class="w-full h-full">
                    <div>Delivery & Dispatch</div>
                </a>
            </li>
        </ul>
    </div>


    <div class="col-span-2">
        <h3 class="text-white pb-[25px] text-[18px] capitalize">Subcribe To Our Newsletter</h3>
        <div class="pb-[25px] text-[14px] text-[#999999]">
            Join 60.000+ subscribers and get a new discount coupon on every Saturday.
        </div>
        <div class="w-auto h-[50px] flex bg-white rounded-sm overflow-hidden">
            <input type="text" class="w-full h-full p-4  text-sm text-[#1e1e1e] outline-none" placeholder="Your email eddress....">
            <button class="w-[150px] h-full flex items-center justify-center text-sm text-white bg-[#0ecae6]">SUBSCRIBE</button>
        </div>
        <div class="mt-[14px] text-[14px] text-[#666] italic">
            I would like to receive news and special offers.
            Mail: alothemes@gmail.com
        </div>
    </div>
  </div>

</template>


<script>
import IconTwitter from '~icons/mdi/twitter'
import IconFacebook from '~icons/mdi/facebook'
import IconPinterest from '~icons/mdi/pinterest'
import IconInstagram from '~icons/mdi/instagram'
import IconYoutube from '~icons/mdi/youtube'

import { UIActionsType } from '@/store/modules/ui'

export default {
    data () {
        return {
            // showModal: false
        }
    },
    components: {
        IconTwitter,
        IconFacebook,
        IconPinterest,
        IconInstagram,
        IconYoutube,
    },
    methods: {
        openModal() {
            this.$store.commit(UIActionsType.OPEN_MODAL, {
                view: 'PRODUCT_VIEW',
                data: 'Modal Data'
            })
            // this.$store.commit(UIActionsType.SET_MODAL_VIEW, 'PRODUCT_VIEW')

            console.log(this.$store.state)
        },
    }
}
</script>

<style>
.menu_item {
    width: 100%;
    color: #999999;  
}

.menu_item:hover div{
    transform: translateX(1em);
    transition: all 0.5s;
    color: #0ecae6;
}


</style>