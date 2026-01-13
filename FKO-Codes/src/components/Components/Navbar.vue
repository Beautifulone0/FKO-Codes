<template>
  <!-- Navbar wrapper -->
  <nav class="flex justify-center mt-6 lg:px-4">
    <!-- Rounded navbar container -->
    <div
      class="bg-[#0E2058] text-white lg:rounded-full px-5 lg:px-10 py-5 flex items-center justify-between w-full max-w-4xl shadow-lg relative"
    >
      <!-- Logo -->
      <a href="#" class="font-bold text-xl"><img src="/image/logo.svg" alt="logo-img" class="w-20 lg:w-30 h-auto" /></a>

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
          >GitHub</a
        >
      </div>

      <a
          href="#work-with-me"
          class="ml-4 px-4 py-1 bg-blue-600 rounded-full hover:bg-blue-700 transition"
          >Work With Me</a
        >

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
        class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-[#0E2058] rounded-xl shadow-lg py-4 flex flex-col items-center space-y-2 z-50"
      >
        <a href="#about" class="hover:text-blue-400 transition">About</a>
        <a href="#projects" class="hover:text-blue-400 transition">Projects</a>
        <a href="#opento" class="hover:text-blue-400 transition">Opento</a>
        <a href="#contact" class="hover:text-blue-400 transition">Contact</a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          class="hover:text-blue-400 transition"
          >GitHub</a
        >
        <a
          href="#work-with-me"
          class="mt-2 px-4 py-1 bg-blue-600 rounded-full hover:bg-blue-700 transition text-center"
          >Work With Me</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
