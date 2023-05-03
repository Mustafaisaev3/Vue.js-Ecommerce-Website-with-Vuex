<template>
    <li @click="() => show =!show" class="w-full h-[50px] flex items-center justify-between cursor-pointer transition-all duration-200 border-b-[0.5px] border-[#a0a0a06d] hover:text-[#16bcdc]" :class="[show ? 'text-[#16bcdc]' : 'text-white']">
        <span class="text-inherit text-[15px] font-semibold">{{ name }}</span>
        <IconDown v-if="childrens" class="text-inherit text-[20px]" :class="{'-rotate-180' : show}" />
    </li>
    <div v-if="childrens && show" class="w-full h-auto">
        <ul v-for="(children, id) in childrens" :key="id" class="w-full h-auto">
            <a :href="children.link">
                <li class="w-full h-[40px] pl-5 flex items-center justify-between cursor-pointer transition-all duration-200 text-white border-b-[0.5px] border-[#a0a0a06d] hover:text-[#16bcdc]">
                    <span class="text-inherit text-[15px] font-semibold pl-3 ">{{ children.name }}</span>
                </li>
            </a>
        </ul>
    </div>
</template>

<script>
import IconDown from '~icons/mdi/menu-down'

export default {
    data () {
        return {
            show: false,

        }
    },
    props: ['name', 'childrens'],
    components: {
        IconDown
    }
}
</script>

<style>

</style>