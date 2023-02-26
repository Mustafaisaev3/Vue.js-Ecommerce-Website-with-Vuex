<template>
  <div class="w-full h-[50px] border border-[#0ab39c] rounded bg-white mb-2 overflow-hidden">
    <div class="w-full h-full p-2 border-b-[3px] border-[#0ab39c] flex items-center justify-between">
        <div>{{ data.text }}</div>
        <div class="cursor-pointer" @click="deleteNotification">
            <IconClose />
        </div>
    </div>  
  </div>
</template>

<script>
import IconClose from '~icons/mdi/close'
import { UIActionsType } from '@/store/modules/ui';

export default {
    props: ['data'],

    components: {
        IconClose
    },

    methods: {
        deleteNotification () {
            this.$store.commit(UIActionsType.DELETE_NOTIFICATION_BY_ID, this.data.id)
        }
    }

}
</script>

<style>

</style>