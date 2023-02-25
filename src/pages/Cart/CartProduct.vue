<template>
    <tr class="border-b">
        <td class="close-btn-container w-[60px] h-[40px]">
            <div class="w-full h-full flex items-center justify-center" @click="deleteProductFromCart">
                <IconClose class=" text-[#222] cursor-pointer hover:text-[#0068c7] transition-all" />
            </div>
        </td>
        <td>
            <div class="w-auto h-auto flex items-center p-[15px]">
                <div class="product-thumb w-[60px] h-[60px] mr-[15px]">
                    <img class="w-full h-full" :src="productData.product.images[0]" alt="">
                </div>
                <div>
                    <a href="#" class="text-[14px] text-[#0068c7]">{{ productData.product.title }} </a>
                </div>
            </div>
        </td>
        <td>
            <div class="text-[#222] text-[14px] font-semibold text-center">${{productData.product.price}}</div>
        </td>
        <td>
            <div class="counter w-[150px] h-[50px] flex items-center border">
                <button class="w-full h-full flex items-center justify-center text-[20px] cursor-pointer" @click="incrementProductCount">+</button>
                <div class="w-full h-full flex items-center justify-center text-[15px]">{{ productData.quantity }}</div>
                <button class="w-full h-full flex items-center justify-center text-[20px] cursor-pointer" @click="decrementProductCount">-</button>
            </div>
        </td>
        <td>
            <div class="text-[#222] text-[14px] font-semibold text-center">$255</div>
        </td>
    </tr>
  
</template>

<script>
import IconClose from '~icons/mdi/close'

export default {
    data () {
        return {
            productCount: 1
        }
    },

    props: ['productData'],

    components: {
        IconClose,
    },

    methods: {
        incrementProductCount () {
            this.$store.dispatch('increaseItemInCart', this.productData.product.id)
        },
        decrementProductCount () {
            this.$store.dispatch('decreaseItemInCart', this.productData.product.id)
        },
        deleteProductFromCart () {
            this.$store.dispatch('deleteProductFromCart', this.productData.product.id)
        }
    }
}
</script>

<style>

</style>