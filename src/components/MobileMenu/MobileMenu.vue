<template>
    <div class="w-full h-full flex flex-col bg-[#263c97] py-3  px-7" id="mobile-menu">
      <div class="cart-header !h-[60px] w-full flex items-center justify-center relative">
        <IconClose style="color: white; font-size: 20px; cursor: pointer; position: absolute; left: 0; top: 20px;" @click="closeMenu"/>
        <div class="text-white text-[30px] font-semibold">E-COMMERCE</div>
      </div>
      <div class="w-full h-auto py-5">
        <div class="w-full h-[50px] rounded-[30px] bg-white flex justify-between items-center px-5">
            <span>Search</span>
            <IconSearch class="text-[#000000] text-[20px]" />
        </div>
      </div>
      <ul class="w-full h-auto py-5">
        <!-- <MobileMenuDropdown v-for="category in categories" :key="category._id" :name="'category'" :childrens="[{name: 'ITEM 1', link: 'link1'},{name: 'ITEM 2', link: 'link2'}, {name: 'ITEM 3', link: 'link3'}]" /> -->
        <MobileMenuDropdown v-for="category in categories" :key="category._id" :name="category.name"  />
        <MobileMenuDropdown :name="'Login / Register'" />
        <MobileMenuDropdown :name="'Currency'" :childrens="[{name: 'UAH'},{name: 'USD'}, {name: 'EUR'}]" />
        <!-- <MobileMenuDropdown />
        <MobileMenuDropdown />
        <MobileMenuDropdown /> -->
      </ul>
    </div>
</template>

<script>
import IconClose from '~icons/mdi/close'
import IconSearch from '~icons/mdi/magnify'
import IconDown from '~icons/mdi/menu-down'
import { UIActionsType } from '@/store/modules/ui';
import MobileMenuDropdown from './MobileMenuDropdown.vue';
import useClickOutside from '@/utils/useClickOutside'

export default {
data () {
    return {
        show1: false,
        show2: false,
    }
},

components: {
    IconClose,
    IconSearch,
    IconDown,
    MobileMenuDropdown
},

computed: {
    categories () {
        const categories = this.$store.getters.categories.filter((category) => !category.parent)
        return categories
    }
},

methods: {
    closeMenu () {
        this.$store.commit(UIActionsType.CLOSE_DRAWER)
    },
},

mounted () {
    useClickOutside('mobile-menu', () => {
        this.$store.commit(UIActionsType.CLOSE_DRAWER)
        this.$store.commit(UIActionsType.SET_DRAWER_VIEW, '')
    })
    this.$store.dispatch('fetchCategories')
}

}
</script>

<style>

</style>