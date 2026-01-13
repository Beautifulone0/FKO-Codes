<template>
  <div class="background-animation absolute inset-0 -z-10 overflow-hidden">
    <!-- Generate 50 particles -->
    <span
      v-for="particle in particles"
      :key="particle.id"
      class="particle"
      :style="{
        top: particle.top + 'vh',
        left: particle.left + 'vw',
        width: particle.size + 'px',
        height: particle.size + 'px',
        animationDuration: particle.duration + 's',
        background: particle.color,
        boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
      }"
    ></span>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'

const particles = reactive([])

function random(min, max) {
  return Math.random() * (max - min) + min
}

onMounted(() => {
  for (let i = 0; i < 900; i++) {
    particles.push({
      id: i,
      top: random(0, 100), // in vh
      left: random(0, 100), // in vw
      size: random(2, 4, 6),   // px
      duration: random(15, 30), // seconds for float
      color: 'rgba(14, 32, 88, 0.8)' // blue
    })
  }
})
</script>

<style scoped>
.background-animation {
  background: #FBFCFE;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -10;
}

.particle {
  position: absolute;
  border-radius: 50%;
  animation: floatParticles linear infinite;
}

@keyframes floatParticles {
  0% {
    transform: translate(0, 0);
    opacity: 0.6;
  }

  25% {
    transform: translate(20px, -30px);
    opacity: 0.8;
  }

  50% {
    transform: translate(-15px, -50px);
    opacity: 0.5;
  }

  75% {
    transform: translate(10px, -25px);
    opacity: 0.7;
  }

  100% {
    transform: translate(0, 0);
    opacity: 0.6;
  }
}

</style>















<!-- <template>
  <div class="particles-wrapper">
    <Particles
      id="tsparticles"
      :options="options"
    />
  </div>
</template>

<script setup>
const options = {
  fullScreen: {
    enable: false, // very important
  },
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,;
        area: 800,
      },
    },
    color: {
      value: ["#ff6ec4", "#052213ff", "#7873f5"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.4,;
      random: true,
    },
    size: {
      value: { min: 1,; max: 4 },
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      outModes: {
        default: "out",
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,;
        mode: "repulse",
      },
      resize: true,resize
    },
    modes: {
      repulse: {
        distance: 120,;
        duration: 0.4,
      },
    },
  }

,
  detectRetina: true,detectRetina
}

</script>

<style>
.particles-wrapper {
  position: absolute;
  inset: 0;
  z-index: 0;
}
</style> -->
