<template>
  <section>
    <div class="container">
      <div class="text-center my-20 mx-2 lg:mx-10">
        <h1 class="inter font-bold text-4xl lg:text-5xl">Skills and Tools.</h1>
      </div>
      <!--Smaller Screen view-->
      <div class="flex lg:hidden items-start gap-5 mx-5 relative">
        <div class="skill-slide">
          <img src="/image/Skilldivider.svg" alt="skill-divider" class="h-100 lg:hidden" />
        </div>
        <div>
          <div class="skill-slide absolute -top-6">
            <h3 class="text-xl font-bold">Frontend Development</h3>
            <p class="text-xs font-bold leading-6">HTML, Javascript, React, Next js, Vue</p>
          </div>
          <div class="skill-slide mt-26">
            <h3 class="text-xl font-bold">Version Control</h3>
            <p class="text-xs font-bold leading-6">Git, Github, Vercel, Netlify</p>
          </div>
          <div class="skill-slide mt-20">
            <h3 class="text-xl font-bold">Styling</h3>
            <p class="text-xs font-bold leading-6">CSS, Bootstrap, Tailwind</p>
          </div>
          <div class="skill-slide mt-21 mb-10">
            <h3 class="text-xl font-bold">UI/UX and Design</h3>
            <p class="text-xs font-bold leading-6">Figma, Canva</p>
          </div>
        </div>
      </div>

      <!--Desktop View-->
      <div class="hidden lg:flex items-center justify-center gap-10 p-3 relative">
        <div >
          <div class="absolute -top-1 left-95 w-100">
            <h3 class="text-xl font-bold">Frontend Development</h3>
            <p class="text-xs font-medium">HTML, Javascript, React, Next js, Vue</p>
          </div>

          <div class="absolute bottom-28 left-111">
            <h3 class="text-xl font-bold">Version Control</h3>
            <p class="text-xs font-medium">Git, Github, Vercel, Netlify</p>
          </div>
        </div>
        <div>
          <img src="/image/Skilldivider.svg" alt="skill-divider" class="h-100" />
        </div>
        <div >
          <div class="absolute top-31 ">
            <h3 class="text-xl font-bold">Styling</h3>
            <p class="text-xs font-medium">CSS, Bootstrap, Tailwind</p>
          </div>

          <div class="absolute -bottom-2">
            <h3 class="text-xl font-bold">UI/UX and Design</h3>
            <p class="text-xs font-medium">Figma, Canva</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const skillItems = document.querySelectorAll('.skill-slide')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in')
        } else {
          entry.target.classList.remove('slide-in')
        }
      })
    },
    { threshold: 0.2 },
  )

  skillItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.25}s` // stagger: 0.25s between items
    observer.observe(item)
  })
})
</script>

<style scoped>
/* Initial state: slide down & fade in */
.skill-slide {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

/* When scrolled into view */
.skill-slide.slide-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
