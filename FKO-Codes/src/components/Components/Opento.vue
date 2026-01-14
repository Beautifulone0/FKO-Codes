<template>
  <section>
    <div class="container mx-auto my-10 lg:my-20">
      <!-- Heading -->
      <div class="text-center my-10 mx-2 lg:mx-10">
        <h3 class="inter font-bold text-4xl lg:text-5xl leading-10 lg:leading-15 slide-in-item">
          I’m Open To.
        </h3>
        <p class="inter font-bold lg:font-medium text-xs lg:text-lg leading-4 lg:leading-6 slide-in-item delay-200">
          Opportunities, collaborations, and new projects. <br />
          Feel free to reach out for freelance work or just to say hello!
        </p>
      </div>

      <!-- Cards -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-5 lg:gap-y-10 md:gap-x-10 lg:gap-x-10 p-5"
      >
        <!-- Card 1 -->
        <div
          class="w-full max-w-sm bg-white rounded-xl overflow-hidden border border-[#E5E5E5] slide-in-item"
        >
          <img src="/image/Oimg1.svg" alt="Frontend Roles" class="w-full h-48 object-cover" />
          <div class="p-5">
            <h4 class="font-semibold text-lg">Frontend Roles</h4>
            <p class="text-sm mt-2">
              Available for freelance and contract projects, helping individuals and startups build
              clean, functional websites.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="w-full max-w-sm bg-white rounded-xl overflow-hidden border border-[#E5E5E5] slide-in-item delay-200"
        >
          <img src="/image/Oimg2.svg" alt="Freelance & Contract" class="w-full h-48 object-cover" />
          <div class="p-5">
            <h4 class="font-semibold text-lg">Freelance & Contract</h4>
            <p class="text-sm mt-2">
              Open to junior or intermediate frontend roles where I can build responsive interfaces
              and grow within a collaborative team.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="w-full max-w-sm bg-white rounded-xl overflow-hidden border border-[#E5E5E5] slide-in-item delay-400"
        >
          <img
            src="/image/Oimg3.svg"
            alt="Mentorship & Coaching"
            class="w-full h-48 object-cover"
          />
          <div class="p-5">
            <h4 class="font-semibold text-lg">Mentorship & Coaching</h4>
            <p class="text-sm mt-2">
              I mentor frontend learners through hands-on guidance, real projects, and practical
              learning support.
            </p>
          </div>
        </div>
      </div>
       
      <!-- Buttons -->
      <div class="flex items-center justify-center gap-3 mt-10">
        <button
          type="submit"
          class="px-5 py-3 bg-[#1C41B0] rounded-full text-sm inter font-medium text-white slide-in-item delay-600"
        >
          Work With Me
        </button>
        <button
          class="px-5 py-3 bg-[#D3DCF8] rounded-full text-sm inter font-medium text-[#07102C] slide-in-item delay-600"
        >
          View My CV
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const items = document.querySelectorAll('.slide-in-item')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.2 }
  )

  items.forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.slide-in-item {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-in-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.delay-200 {
  transition-delay: 0.2s;
}

.delay-400 {
  transition-delay: 0.4s;
}

.delay-600 {
  transition-delay: 0.6s;
}
</style>
