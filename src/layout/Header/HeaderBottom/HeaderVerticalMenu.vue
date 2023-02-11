<template>
    <div @click='setShowVerticalMenu' class="vertical_menu w-[300px] h-full p-5 relative text-white flex items-center justify-center gap-4 hover:bg-[#14a8c5] transition-all" :class="[showVerticalMenu ? 'bg-[#14a8c5]' : '']">
        <div class="w-[20px] text-[25px]" v-if="showVerticalMenu">
            <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="w-[20px] text-[20px]" v-else>
            <i class="fa-solid fa-bars"></i>
        </div>
        <h4>Shop By Department</h4>
        <div v-show="showVerticalMenu" class="w-full h-[600px] bg-[#ffffff] absolute top-[100%] left-0">
            <ul class="w-full h-full px-5">
                <li>
                    <a href="#" class="w-full h-[50px] flex items-center text-[#666] text-sm py-0 px-3 border-b-[1px] border-[#e1e1e1] hover:text-[#14a8c5] ">
                        Computers 1
                    </a>
                </li>
                <li>
                    <a href="#" class="w-full h-[50px] flex items-center text-[#666] text-sm py-0 px-3 border-b-[1px] border-[#e1e1e1] hover:text-[#14a8c5] ">
                        Printers
                    </a>
                </li>
                <li>
                    <a href="#" class="w-full h-[50px] flex items-center text-[#666] text-sm py-0 px-3 border-b-[1px] border-[#e1e1e1] hover:text-[#14a8c5] ">
                        PC Components
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showVerticalMenu: false
        }
    },

    methods: {
        setShowVerticalMenu () {
            this.showVerticalMenu = !this.showVerticalMenu
        }
    }
}
</script>

<style>

</style>