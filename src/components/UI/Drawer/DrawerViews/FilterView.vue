<template>
  <div class="mobile-filter w-full h-full">
    <div class="cart-header !h-[60px] w-full bg-[#f5f5f5] px-7 flex items-center justify-between">
        <div class="text-[#222222] text-[16px] font-semibold">Filter</div>
        <IconClose style="color: #222222; font-size: 20px; cursor: pointer;" @click="closeFilter"/>
    </div>
    <CollectionSidebar />
  </div>
</template>

<script>
import { UIActionsType } from '@/store/modules/ui'
import IconClose from '~icons/mdi/close'
import CollectionSidebar from '@/components/Collection/CollectionSidebar.vue'

export default {
    data () {
        return {}
    },
    components: {
        IconClose,
        CollectionSidebar
    },
    methods: {
        closeFilter() {
            this.$store.commit(UIActionsType.CLOSE_DRAWER, {
                view: '',
                data: ''
            })
        },
    }
}
</script>

<style scoped>
.mobile-filter .collection-sidebar {
    display: block;
}
</style>