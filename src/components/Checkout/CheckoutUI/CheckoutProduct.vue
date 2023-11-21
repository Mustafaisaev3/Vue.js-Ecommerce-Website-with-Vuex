<template>
  <div class="w-full md:w-[450px] h-auto flex items-center gap-3">
    <div class="">
        <div class="w-[80px] h-[80px] border rounded-md relative p-2" @click="consoleProduct">
            <Badge :color="'#0000008f'">1</Badge>
            <img :src="productItem.images[0]" alt="" class="w-full h-full object-contain">
        </div>
    </div>
    <div class="flex-1">
        <div class="text-[16px] leading-none">{{productItem.name}}</div>
        <div class="text-[gray] text-[14px]">X / Style 1</div>
    </div>
    <div class="text-[15px] leading-none">${{productItem.price}}</div>
  </div>
</template>

<script>
import Badge from '@/components/UI/Badge/Badge.vue'

export default {
    props: ['product'],
    components: {
        Badge
    },
    computed: {
        productItem () {
            return this.product.product
        }
    }
}
</script>

<style>

</style>