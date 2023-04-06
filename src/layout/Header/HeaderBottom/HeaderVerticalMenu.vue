<template>
    <div @click='setShowVerticalMenu' class="vertical_menu w-[300px] h-full p-5 relative text-white flex items-center justify-center gap-4 hover:bg-[#14a8c5] transition-all" :class="[showVerticalMenu ? 'bg-[#14a8c5]' : '']">
        <div class="w-[20px] text-[25px]" v-if="showVerticalMenu">
            <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="w-[20px] text-[20px]" v-else>
            <i class="fa-solid fa-bars"></i>
        </div>
        <h4>Shop By Department</h4>
        <div v-show="showVerticalMenu" class="w-full h-auto bg-[#ffffff] absolute top-[100%] left-0 z-10 shadow">
            <ul class="w-full h-full">
                <MenuItemVue v-for="category in categories" :key="category._id" :category="category"/>
            </ul>
        </div>
    </div>
</template>

<script>
import MenuItemVue from '@/components/Common/MainMenu/MenuItem.vue'

export default {
    data() {
        return {
            showVerticalMenu: false
        }
    },

    components: {
        MenuItemVue
    },

    methods: {
        setShowVerticalMenu () {
            this.showVerticalMenu = !this.showVerticalMenu
        }
    },

    computed: {
        categories () {
            const categories = this.$store.getters.categories.filter((category) => !category.parent)
            return categories
        }
    },

    mounted () {
        this.$store.dispatch('fetchCategories')
    }
}
</script>

<style>

</style>