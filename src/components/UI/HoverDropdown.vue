<template>
  <div>
    <div class="text-sm cursor-pointer flex items-center" @click="toggleDropdown">
        <img v-if="activeItem.image" :src="activeItem.image" class="w-[20px] h-[15px] mr-1" />
        {{activeItem.value}} 
        <span class="text-[#ffffff] text-[10px] pl-[10px]">  
            <i class="fa-solid fa-chevron-down"></i>
        </span>
    </div>
    <ul v-if="isOpenDropdown" class="min-w-[150px] p-4 flex flex-col gap-2 bg-white rounded absolute">
        <li 
          v-for="item, index in items_list" 
          :key="index" 
          @click="selectActiveItem(item)" 
          class="text-sm text-black flex gap-2 cursor-pointer hover:text-blue-400 transition-all">
            <img v-if="item.image" :src="item.image" class="w-[20px] h-[15px]" />
            {{ item.value }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: ["items_list"],

    data () {
        return {
            isOpenDropdown: false,
            activeItem: this.items_list[0]
        }
    },

    computed: {
        getFirstItem: function () {
            return this.items_list[0].value
        }
    },

    methods: {
        toggleDropdown () {
            this.isOpenDropdown = !this.isOpenDropdown
        },
        selectActiveItem (item) {
            this.isOpenDropdown = false
            this.activeItem = item
        }
    }
}

</script>

<style>

</style>