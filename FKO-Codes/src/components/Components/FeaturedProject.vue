<template>
  <section>
    <div class="mx-auto my-10 lg:my-30 bg-[#F2F2F2]/80 p-5 lg:p-10">
      <!-- Heading -->
      <div class="text-center my-10 mx-2 lg:mx-10">
        <h1 class="inter font-bold text-4xl lg:text-5xl">
          Featured Projects.
        </h1>
        <p class="inter font-bold lg:font-medium text-xs lg:text-lg leading-6 lg:leading-8">
          Selected projects showcasing my front-end development skills.
        </p>
      </div>

      <!-- Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
      >
        <div
          v-for="project in projects"
          :key="project.title"
          class="group flex flex-col bg-[#FAFAFA] w-full max-w-sm rounded-lg p-2
                 transition-all duration-300
                 hover:-translate-y-2 hover:shadow-xl"
        >
          <!-- Image -->
          <div class="w-full h-48 flex items-center justify-center">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- Content -->
          <div class="flex flex-col flex-1 gap-3 mt-3">
            <h4 class="text-xl font-bold inter text-[#1A1A1A]">
              {{ project.title }}
            </h4>

            <div class="flex items-center justify-between text-sm text-[#808080]">
              <span>{{ project.role }}</span>
              <span>{{ project.year }}</span>
            </div>

            <p class="text-sm text-[#333333] flex-1">
              {{ project.description }}
            </p>

            <div class="flex items-center gap-3 text-xs text-[#153184]">
              <span v-for="tech in project.tech" :key="tech">
                {{ tech }}
              </span>
            </div>

            <div class="mt-4 flex gap-4">
              <button
                class="px-5 py-3 bg-[#1C41B0] rounded-full text-sm inter font-medium text-white"
              >
                Live Demo
              </button>
              <button
                class="px-5 py-3 bg-[#D3DCF8] rounded-full text-sm inter font-medium text-[#07102C]"
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script setup>
const projects = [
  {
    title: "Nearbis Website",
    image: "/image/Pimg1.svg",
    role: "Frontend Developer",
    year: "2025",
    description:
      "A local business discovery platform that connects users with nearby services and brands.",
    tech: ["Next.js", "Tailwind", "JavaScript"],
  },
  {
    title: "Eventful Moments",
    image: "/image/Pimg2.svg",
    role: "Frontend Developer",
    year: "2025",
    description:
      "Demonstrates form handling, routing, and state management in a full-featured build.",
    tech: ["Nuxt", "Tailwind", "JavaScript"],
  },
  {
    title: "Vue Jobs",
    image: "/image/Pimg3.svg",
    role: "Frontend Developer",
    year: "2025",
    description:
      "A job listing web app built with Vue.js offering a responsive interface.",
    tech: ["Vue", "Tailwind", "JavaScript"],
  },
  {
    title: "Aphamed Prints Ltd",
    image: "/image/Pimg4.svg",
    role: "Frontend Developer",
    year: "2025",
    description:
      "A service platform for exploring products, requesting quotes, and engaging with the brand.",
    tech: ["Next.js", "Tailwind", "JavaScript"],
  },
  {
    title: "Logic Point",
    image: "/image/Pimg5.svg",
    role: "Frontend Developer",
    year: "2025",
    description:
      "A homepage clone created to practice responsive layouts and modern UI design.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];
</script>
