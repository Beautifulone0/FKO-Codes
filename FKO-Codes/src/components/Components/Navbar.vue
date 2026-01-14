<template>
  <!-- Navbar wrapper -->
  <nav
    ref="navRef"
    :class="[
      'flex justify-center lg:px-4 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
      isScrolled ? 'fixed top-0 left-0 right-0 py-4' : 'mt-6 opacity-0 translate-y-[-20px] animate-fade-in'
    ]"
  >
    <!-- Rounded navbar container -->
    <div
      :class="[
        'text-white lg:rounded-full px-5 lg:px-10 flex items-center justify-between w-full max-w-4xl relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
        isScrolled
          ? 'backdrop-blur-md bg-[#0E2058]/80 shadow-lg border border-white/10 py-4 scale-[0.98]'
          : 'bg-[#0E2058] py-5'
      ]"
    >
      <!-- Logo -->
      <a href="#" class="font-bold text-xl">
        <img src="/image/logo.svg" alt="logo-img" class="w-20 lg:w-30 h-auto" />
      </a>

      <!-- Desktop Links -->
      <div class="hidden md:flex space-x-4 items-center">
        <a href="#about" class="hover:text-blue-400 transition">About</a>
        <a href="#projects" class="hover:text-blue-400 transition">Projects</a>
        <a href="#opento" class="hover:text-blue-400 transition">Opento</a>
        <a href="#contact" class="hover:text-blue-400 transition">Contact</a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          class="hover:text-blue-400 transition"
        >
          GitHub
        </a>
      </div>

      <a
        href="#work-with-me"
        class="ml-4 px-4 py-1 bg-blue-600 rounded-full hover:bg-blue-700 transition"
      >
        Work With Me
      </a>

      <!-- Mobile Hamburger -->
      <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Mobile Menu -->
      <div
        v-if="isOpen"
        class="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-72 backdrop-blur-md bg-[#0E2058]/90 rounded-xl shadow-lg py-4 flex flex-col items-center space-y-2 z-50 border border-white/10"
      >
        <a href="#about" class="hover:text-blue-400 transition">About</a>
        <a href="#projects" class="hover:text-blue-400 transition">Projects</a>
        <a href="#opento" class="hover:text-blue-400 transition">Opento</a>
        <a href="#contact" class="hover:text-blue-400 transition">Contact</a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          class="hover:text-blue-400 transition"
        >
          GitHub
        </a>
        <a
          href="#work-with-me"
          class="mt-2 px-4 py-1 bg-blue-600 rounded-full hover:bg-blue-700 transition text-center"
        >
          Work With Me
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)
const navRef = ref(null)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Fade-in on load */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.16,1,0.3,1) forwards;
}
</style>
