<template>
  <section>
    <div
      class="container flex flex-col lg:flex-row items-center lg:justify-center gap-10 mx-2 my-2 lg:mx-10 lg:my-20 px-3 py-3 relative"
    >
      <div>
        <!-- Headline -->
        <h1
          v-motion
          v-motion-visible-once="false"
          :initial="{ opacity: 0, y: 45 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }"
          class="text-[#1A1A1A] font-bold text-4xl lg:text-6xl leading-10 lg:leading-15 mb-3 lg:mb-5"
        >
          Frontend Developer <br />
          building fast, clean <br />
          web interfaces.
        </h1>

        <!-- Description -->
        <p
          v-motion
          v-motion-visible-once="false"
          :initial="{ opacity: 0, y: 35 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{
            delay: 0.2,
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }"
          class="font-medium lg:font-light text-[#333333] text-sm lg:text-xl leading-5 lg:leading-7 mb-3 lg:mb-5"
        >
          I build modern web interfaces that are easy to use. <br />
          With HTML, CSS, Javascript, React, and Vue, I turn <br />
          ideas into fast, responsive experiences.
        </p>

        <!-- Buttons -->
        <div
          v-motion
          v-motion-visible-once="false"
          :initial="{ opacity: 0, y: 25 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{
            delay: 0.45,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }"
          class="flex flex-col gap-3 lg:flex-row lg:gap-4"
        >
          <button class="bg-[#1C41B0] px-3 py-2 rounded-full text-[#F6F8FE] outline-none">
            View Projects
          </button>
          <button class="bg-[#D3DCF8] px-3 py-2 rounded-full text-[#07102C] outline-none">
            Work With Me
          </button>
        </div>

        <!-- Floating Icon -->
        <img
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.7, duration: 0.8 }"
          :animate="{ y: [0, -10, 0] }"
          :animate-transition="{
            duration: 4.5,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
          }"
          src="/image/floating-icon.svg"
          alt="floatingicon"
          class="absolute top-23 left-72 lg:top-36 lg:left-150 w-13 h-13 lg:w-15 lg:h-15"
        />
      </div>

      <!-- Right Image -->
      <div
        v-motion
        v-motion-visible-once="false"
        :initial="{ opacity: 0, scale: 0.92 }"
        :enter="{ opacity: 1, scale: 1 }"
        :transition="{
          delay: 0.6,
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }"
      >
        <img src="/image/img-logos.svg" alt="logo-img" class="w-80 lg:w-100 h-auto" />
      </div>
    </div>
  </section>
</template>
