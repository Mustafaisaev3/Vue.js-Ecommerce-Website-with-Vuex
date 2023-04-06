<template>
   <li @mouseenter.stop="showChild = true" @mouseleave.stop="showChild = false" class="px-5 relative">
        <a href="#" class="w-full h-[50px] flex items-center text-[#666] text-sm py-0 px-3 border-b-[1px] border-[#e1e1e1] hover:text-[#14a8c5] ">
            {{ category.name }}
        </a>
        <div v-show="isChildren && showChild" class="w-full absolute left-[100%] top-0 flex flex-col bg-white shadow">
            <li v-for="child in category.children" :key="child._id">
                <a href="#" class="w-full h-[50px] flex items-center text-[#666] text-sm py-0 px-3 border-b-[1px] border-[#e1e1e1] hover:text-[#14a8c5] ">
                    {{ child.name }}
                </a>
            </li>
        </div>
    </li>
</template>

<script>
export default {
    props: ['category'],
    data() {
        return {
            showChild: false
        }
    },

    computed: {
        isChildren () {
            console.log(this.category.children.length > 0)
            return this.category.children.length > 0
        }
    }
}
</script>

<style>

</style>