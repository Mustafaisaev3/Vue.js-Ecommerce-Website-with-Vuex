<template>
    <div class="w-full h-[50px] border border-[#fbc25e] rounded bg-white mb-2 overflow-hidden">
      <div class="w-full h-full p-2 border-b-[3px] border-[#fbc25e] flex items-center justify-between">
          <div>{{ data.text }}</div>
          <div class="cursor-pointer">
            <IconClose />
          </div>
      </div>  
    </div>
  </template>
  
  <script>
  import IconClose from '~icons/mdi/close'

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