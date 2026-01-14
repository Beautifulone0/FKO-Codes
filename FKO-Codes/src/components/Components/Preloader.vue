<template>
  <div v-if="visible" class="preloader">
    <!-- Logo -->
    <img src="/image/titleLogo.svg" alt="Logo" class="logo w-full" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  mounted() {
    // Hide preloader after 2 seconds
    setTimeout(() => {
      this.visible = false;
    }, 2000);
  },
};
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white; /* Or any background color */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.logo {
  width: 100px;
  height: 100px;
  animation: pulse 1.5s infinite; /* pulse effect */
}

/* Pulse keyframes */
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}
</style>
