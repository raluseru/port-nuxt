<template>
  <div>
    <div
      class="cursor-follower"
      :style="{ left: x + 'px', top: y + 'px' }"
    ></div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

function updateCursor(e: MouseEvent) {
  x.value = e.clientX
  y.value = e.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', updateCursor)
})
onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursor)
})
</script>

<style scoped>
.cursor-follower {
  position: fixed;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: rgba(78, 202, 194, 0.2);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: background 0.2s;
}
</style>