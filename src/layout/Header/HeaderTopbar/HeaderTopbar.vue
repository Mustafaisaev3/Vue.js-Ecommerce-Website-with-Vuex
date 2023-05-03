<template>
  <div class="w-[100%] h-[40px] border-b-[1px] border-[rgba(255,255,255,.15)] hidden sm:hidden md:hidden lg:block">
    <div class="container flex items-center justify-between">
        <div class="w-auto h-10">
            <ul class="h-full flex gap-4 items-center">
                <li class="text-white item-list flex items-center justify-center">
                    <HoverDropdown :items_list=currency />
                </li>
                <li class="text-white item-list flex items-center justify-center">
                    <HoverDropdown :items_list=language />
                </li>
                <li class="text-white text-sm item-list flex items-center justify-center">
                    Need Help? <span class="pl-2 cursor-pointer hover:text-blue-400 transition-all">+001 123 456 789</span>
                </li>
            </ul>
        </div>
        <div class="w-auto h-10">
            <ul class="h-full flex gap-4 items-center">
                <li v-for="item, index in topbarRight" :key="index" class="text-white text-sm item-list flex items-center justify-center hover:text-blue-400 transition-all">
                    <a :href="item.url">{{ item.value }}</a>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import HoverDropdown from '@/components/UI/HoverDropdown.vue';

export default {
    components: {
        HoverDropdown
    },
    data () {
        return {
            language: [
                {
                    value: 'UA',
                    image: 'https://w7.pngwing.com/pngs/548/717/png-transparent-ua-ukraine-flag-icon.png'
                },
                {
                    value: 'EN',
                    image: '//cdn.shopify.com/s/files/1/0606/6867/4281/t/32/assets/flag_en.png?v=14076981825125011091660195027'
                },
                {
                    value: 'DE',
                    image: '//cdn.shopify.com/s/files/1/0606/6867/4281/t/32/assets/flag_de.png?v=69801997571936479461660195027'
                }, 
            ],
            currency: [
                {
                    value: 'UAH',
                }, 
                {
                    value: 'USD',
                }, 
                {
                    value: 'EUR',
                }, 
            ],
            topbarRight: [
                {
                    value: 'My Account',
                    url: '#'
                },
                {
                    value: 'About Us',
                    url: '#'
                },
                {
                    value: 'Contact Us',
                    url: '#'
                },
                {
                    value: 'FAQs',
                    url: '#'
                },
            ]
        }
    },
}
</script>

<style>

</style>