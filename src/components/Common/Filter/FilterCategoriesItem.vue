<template>
    <li class="mb-1">
        <div @click="showChildren = !showChildren" class="flex justify-between items-center cursor-pointer text-[#666] text-[14px] hover:text-[#16BCDC] transition-all">
            {{ category.name }}
            <IconRight class="transition-all" :class="{activeIcon: showChildren}" />
        </div>
        <ul v-show="showChildren" class="transition-all pt-2 pl-2">
            <li v-for="children in category.children" :key="children.id" class="mb-1">
                <div class="flex justify-between items-center cursor-pointer text-[#666] text-[14px] hover:text-[#16BCDC] transition-all">
                    {{ children.name }}
                </div>
            </li>
        </ul>
    </li>
</template>

<script>
import IconRight from '~icons/mdi/chevron-right'

export default {
    data () {
        return {
            showChildren: false
        }
    },
    props: ['category'],
    components: {
        IconRight
    }
}
</script>

<style scoped>
/* .categories-list {
    transition-duration: 1s;
} */
.activeIcon {
    transform: rotate(90deg);
}
</style>