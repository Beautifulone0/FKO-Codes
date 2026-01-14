<template>
  <section>
    <div class="container mx-auto my-30 lg:my-30">
      <!-- Heading -->
      <div class="text-center my-10 mx-2 lg:mx-10 slide-in-item">
        <h3 class="inter font-bold text-4xl lg:text-5xl leading-10 lg:leading-15">Contact Me.</h3>
      </div>

      <div class="flex flex-col lg:flex-row items-start justify-center mx-3 lg:gap-5">

        <!-- Icons Section -->
        <div class="flex lg:flex-col items-center gap-10 lg:gap-10 mx-auto lg:mx-0 slide-in-item delay-200">

          <!-- Email -->
          <div class="flex flex-col items-center gap-2">
            <div class="bg-white w-12 h-12 flex justify-center items-center rounded-lg shadow-lg">
              <a href="mailto:your@email.com" class="text-gray-600 hover:text-[#0A66C2] transition">
                <Icon icon="ph:at" class="w-6 h-6 text-[#1A1A1A]" />
              </a>
            </div>
            <p class="text-sm font-medium">Email</p>
          </div>

          <!-- LinkedIn -->
          <div class="flex flex-col items-center gap-2">
            <div class="bg-white w-12 h-12 flex justify-center items-center rounded-lg shadow-lg">
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                class="text-gray-600 hover:text-[#0A66C2] transition"
              >
                <Icon icon="lucide:linkedin" class="w-6 h-6 text-[#1A1A1A]" />
              </a>
            </div>
            <p class="text-sm font-medium">LinkedIn</p>
          </div>

          <!-- GitHub -->
          <div class="flex flex-col items-center gap-2">
            <div class="bg-white w-12 h-12 flex justify-center items-center rounded-lg shadow-lg">
              <a
                href="https://github.com/your-username"
                target="_blank"
                class="text-gray-600 hover:text-[#0A66C2] transition"
              >
                <Icon icon="lucide:github" class="w-6 h-6 text-[#1A1A1A]" />
              </a>
            </div>
            <p class="text-sm font-medium">GitHub</p>
          </div>
        </div>

        <!-- Divider -->
        <div class="slide-in-item delay-400">
          <img src="/image/divider.svg" alt="divider" class="hidden h-40 lg:block lg:h-auto" />
          <img src="/image/smallscreendivider.svg" alt="divider" class="lg:hidden h-30 lg:h-auto" />
        </div>

        <!-- Contact Form -->
        <div class="bg-[#F5F5F5] flex flex-col gap-5 p-5 rounded-lg w-full lg:w-[500px] slide-in-item delay-600">
          <form>
            <div class="flex flex-row lg:flex-row gap-5 mb-5">
              <!-- Name -->
              <div class="flex flex-col gap-2 w-full">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  class="bg-white p-3 rounded-md text-sm w-full"
                />
              </div>

              <!-- Email -->
              <div class="flex flex-col gap-2 w-full">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  class="bg-white p-3 rounded-md text-sm w-full"
                />
              </div>
            </div>

            <!-- Message -->
            <div class="flex flex-col gap-2 mb-5">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write a Message"
                rows="5"
                cols="10"
                class="bg-white w-full p-3 rounded-md text-sm"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                class="px-5 py-3 bg-[#1C41B0] rounded-full text-sm inter font-medium text-white w-full lg:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
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
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
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
