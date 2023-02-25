<template>
  <div class="container w-full h-auto py-[60px]">
    <div class="cart-header w-full h-auto pb-[50px] flex flex-col items-center justify-center">
        <h2 class="text-[50px] font-bold">Cart</h2>
        <ul class="flex">
            <li>Home / </li>
            <li>Cart</li>
        </ul>
    </div>
    <section class="w-full h-auto">
        <div v-if="!cartItems.length" class="w-full h-[500px] flex flex-col items-center justify-center gap-5">
            <img class="w-[600px] h-auto" src="https://menabasket.com/pub/static/version1618825676/frontend/MageBig/martfury_layout03/en_US/images/empty-cart.svg" alt="">
            <div class="text-[30px]">Your Cart Is Empty.</div>
            <Button :buttonType="'primary'" class="rounded-sm bg-slate-900 w-[300px]" @click="this.$router.push('/')">Continue shopping</Button>
        </div>
        <div v-else class="w-full h-auto grid grid-cols-3 gap-4">
            <!--  -->
            <div class="h-full col-span-2 bg-white">
                <table class="w-full">
                    <tbody>
                        <tr class="border-b">
                            <td>
                                <div></div>
                            </td>
                            <td>
                                <div>Product</div>
                            </td>
                            <td>
                                <div class="text-center">Price</div>
                            </td>
                            <td>
                                <div>Quantity</div>
                            </td>
                            <td>
                                <div class="text-center">Total</div>
                            </td>
                        </tr>
                        <CartProduct v-for="item in cartItems" :key="item.product.id" :productData="item" />
                    </tbody>
                </table>
                <div class="w-full h-auto bg-[white] p-5 flex items-center justify-between">
                    <div class="flex items-center gap-5">
                        <Button :buttonType="'primary'" class="rounded-sm" @click="this.$router.push('/')">Continue shopping</Button>
                        <Button :buttonType="'primary'" class="rounded-sm" @click="clearShoppingCart">Clear shopping cart</Button>
                    </div>
                    <div>
                        <Button :buttonType="'primary'" class="bg-[#818490] rounded-sm" @click="updateCart">Update cart</Button>
                    </div>
                </div>
            </div>

            <!--  -->
            <div class="h-full col-span-1 p-[30px] bg-[#dfdfdf6b]">
                <h5 class="text-[#222] text-[24px] font-semibold mb-[30px]">Cart totals</h5>
                <div class="infi-checkout flex items-center justify-between mb-[15px] pb-[15px] border-b border-b-[#dfdfdfd4]">
                    <span class="text-[16px] text-[#222] font-semibold">Subtotal</span>
                    <span class="text-[16px] text-[#222] font-semibold">${{ cartTotal }}</span>
                </div>
                <div class="infi-checkout flex items-center justify-between mb-[15px] pb-[15px] border-b border-b-[#dfdfdfd4]">
                    <span class="text-[16px] text-[#222] font-semibold">Total</span>
                    <span class="text-[16px] text-[#222] font-semibold">${{ cartTotal }}</span>
                </div>
                <div class="infi-checkout flex items-center justify-between mb-[15px] pb-[15px] border-b border-b-[#dfdfdfd4]">
                    <span class="text-[16px] text-[#222] font-semibold">Shipping</span>
                    <span class="text-[16px] text-[#222] font-semibold">Free</span>
                </div>
                <Button :buttonType="'primary'" class="rounded-sm">CHECK OUT</Button>
            </div> 
        </div>
    </section>
  </div>
</template>

<script>
import Button from '@/components/UI/Button/Button.vue';
import CartProduct from './CartProduct.vue'

export default {
    data () {
        return {
        }
    },

    components: {
        Button,
        CartProduct,
    },

    computed: {
        cartItems () {
            return this.$store.getters.products
        },
        cartTotal () {
            return this.$store.getters.cartTotal
        },
    },

    methods: {
        clearShoppingCart () {
            this.$store.dispatch('clearShoppingCart')
        },
        updateCart () {
            this.$router.go()
        },
    }

}
</script>

<style scoped>
td {
    /* padding: 15px; */
    padding-top: 0;
}
td > div {
    padding: 15px;
}
</style>