<template>
  <div id="app">
    <MonglishNavbarAr />
    <router-view />
    <component :is="currentFooter" />
    <WhatsappButton />
  </div>
</template>

<script>
import MonglishNavbarAr from './components/MonglishNavbar.vue';
import AdultsLanding from './components/ar/AdultsLanding.vue'
import MonglishFooterAr from './components/ar/MonglishFooter.vue';
import MonglishFooterEn from './components/en/MonglishFooter.vue';
import WhatsappButton from './components/WhatsappButton.vue';

export default {
  name: 'App',
    data() {
    return {
      currentFooter: 'MonglishFooterAr',
    };
  },
  watch: {
    '$route'(to) {
      if (to.path.startsWith('/en')) {
        this.currentFooter = 'MonglishFooterEn';
      } else {
        this.currentFooter = 'MonglishFooterAr';
      }
    }
  },
  components: {
    MonglishNavbarAr,
    AdultsLanding,
    MonglishFooterAr,
    MonglishFooterEn,
    WhatsappButton
  }
}
</script>

<style>
  @font-face {
    font-family: 'DIN Next LT Arabic';
    src: url('@/assets/fonts/DINNextLTArabic-Regular-3.ttf') format('truetype');
  }
</style>
