<template>
  <footer class="w-full h-auto bg-[#1f2024] text-white">
    <div class="container w-full h-auto">
        <FooterAdvantages />
        <FooterMain />
    </div>
    <Modal />
    <Drawer />
    <Notification />
    <Checkout />
  </footer>
</template>

<script>
import Modal from '@/components/UI/Modal/Modal.vue';
import Drawer from '@/components/UI/Drawer/Drawer.vue';
import Notification from '@/components/UI/Notifications/Notification.vue';
import Checkout from '@/components/Checkout/Checkout.vue'
import FooterAdvantages from './FooterAdvantages.vue';
import FooterMain from './FooterMain.vue'

export default {
    components: {
    FooterAdvantages,
    FooterMain,
    Modal,
    Drawer,
    Notification,
    Checkout 
}
}
</script>

<style>

</style>