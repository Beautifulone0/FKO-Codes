<template>
  <BackgroundAnimation />
  <div class="relative z-10 overflow-x-hidden">
    <RouterView />
    <Preloader />
  </div>
</template>

<script>
import BackgroundAnimation from './components/Components/BackgroundAnimation.vue'
import Preloader from "./components/Components/Preloader.vue";

export default {
  components: {
    Preloader,
    BackgroundAnimation,
  },
};
</script>


<script setup>

</script>








<!-- <script setup>
</script>

<template>
    <RouterView />
</template>

<style scoped>
</style> -->
