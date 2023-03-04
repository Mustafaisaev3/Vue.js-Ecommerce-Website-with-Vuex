<template>
  <div class="h-auto px-4 py-1 rounded-sm border border-[#cecece] relative cursor-pointer" @click="showOptions = !showOptions">
    <div class="title">{{ value ? value : 'Make desigion' }}</div>
    <div v-if="showOptions" class="w-full h-auto bg-white rounded border border-[#cecece] absolute top-[120%] left-0 z-[10] overflow-hidden">
        <div 
            v-for="option in options" 
            :key="option" 
            class="w-full h-auto px-4 py-1 hover:bg-[#16bcdc] hover:text-white"
            @click="value = option"
        >
            {{ option }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            showOptions: false,
            value: null,
        }
    },
    props: {
        options: {
            require: true,
            default: []
        }
    },
    methods: {
        selectOption (option) {
            this.$emit('select', option)
            this.value = option
            this.showOptions = false
        },
        hideSelect () {
            this.showOptions = false
        }
    },

    // mounted () {
    //     document.addEventListener('click', this.hideSelect.bind(this), true)
    // },
    // beforeUnmount () {
    //     document.removeEventListener('click', this.hideSelect)
    // }
}
</script>

<style>

</style>