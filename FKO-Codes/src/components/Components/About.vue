<template>
  <section
    ref="aboutSection"
    class="relative w-screen h-[300px] bg-cover bg-center my-20 lg:my-25
           before:absolute before:inset-0 before:bg-black/50 before:content-['']"
    style="background-image: url('/image/image 1.svg')"
  >
    <div class="relative z-10 text-center max-w-[600px] mx-auto py-5 lg:py-10">
      
      <!-- Heading -->
      <h1
        :class="{'animate-slide-in opacity-100': isVisible, 'opacity-0 translate-y-10': !isVisible}"
        class="font-inter text-[#F6F8FE] text-4xl lg:text-5xl mb-4 inter transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      >
        About Me.
      </h1>

      <!-- Text -->
      <p
        :class="{'animate-slide-in opacity-100': isVisible, 'opacity-0 translate-y-8': !isVisible}"
        class="text-[#CCCCCC] font-medium text-sm lg:text-md leading-5 tracking-wide inter transition-all duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200"
      >
        I’m Faith, a Frontend Developer and UI Builder focused on creating clean, responsive, and
        user-centered web experiences. I work with React, Vue, Next.js, and Tailwind to build
        intuitive interfaces that balance performance and design.
        <br /><br />
        I also mentor beginners in frontend development, helping them build confidence and real-world
        skills. Always learning, always building with a goal to make technology simple, impactful,
        and accessible.
      </p>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const aboutSection = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) isVisible.value = true
      else isVisible.value = false
    },
    { threshold: 0.2 }
  )

  if (aboutSection.value) observer.observe(aboutSection.value)
})
</script>

<style scoped>
/* Optional slide-in animation for smoother feel */
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  animation: slideIn 1.5s cubic-bezier(0.16,1,0.3,1) forwards;
}
</style>
