<template>
  <footer class="w-full h-auto bg-[#1f2024] text-white">
    <div class="container w-full h-auto">
        <FooterAdvantages />
        <FooterMain />
    </div>
  </footer>
</template>

<script>
import FooterAdvantages from './FooterAdvantages.vue';
import FooterMain from './FooterMain.vue'

export default {
    components: {
        FooterAdvantages,
        FooterMain
    }
}
</script>

<style>

</style>