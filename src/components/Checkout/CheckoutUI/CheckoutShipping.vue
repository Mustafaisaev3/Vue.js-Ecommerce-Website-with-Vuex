<template>
  <div class="w-full h-auto">
    <div v-if="active" class="w-full h-auto">
        <CheckoutShippingCheckbox />
    </div>
    <div v-else class="disable">
        Enter your shipping address to view available shipping methods.
    </div>
  </div>
</template>

<script>
import CheckoutShippingCheckbox from './CheckoutShippingCheckbox.vue'

export default {
    data () {
        return {
        }
    },

    props: ['active'],

    components: {
        CheckoutShippingCheckbox
    }
}
</script>

<style scoped>
.disable {
    background: rgb(39, 39, 39);
    border: 1px solid #e5e5e5;
    padding: 0 15px;
    outline: 0;
    font-weight: 400;
    font-size: 14px;
    width: 100%;
    margin-top: 10px;
    line-height: 50px;
    height: auto;
    border-radius: 5px;
    color: white;
}
</style>