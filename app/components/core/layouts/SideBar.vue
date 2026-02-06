<template>
  <div :class="['sidebar-shell', isOpen ? 'shell-open' : 'shell-closed']">
    <aside :class="['sidebar', isOpen ? 'sidebar-open' : 'sidebar-closed']">
      <div class="sidebar-header">
        <h2 class="sidebar-title">Menu</h2>
        <button class="close-btn" @click="toggle">X</button>
      </div>

      <nav class="sidebar-nav">
        <ul>
          <li v-for="item in items" :key="item.label">
            <a :href="item.link" class="sidebar-link">
              <span>{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <button v-show="!isOpen" class="open-btn" @click="toggle">
      Menu
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}

const items = [
  { label: 'Projets', link: '/' },
  { label: 'Profil', link: '/profil' }
]
</script>

<style scoped>
.sidebar-shell {
  @apply relative flex-shrink-0;
  overflow: visible;
  background: linear-gradient(to right, #000000, #1f2937);
}

.shell-open {
  @apply w-64;
}

.shell-closed {
  @apply w-0;
}

.sidebar {
  @apply sticky top-0 z-40 text-white
         transition-[width] duration-300 overflow-y-auto overflow-x-hidden;
  max-height: 100vh;
  background: transparent;
}

.sidebar-open {
  @apply w-64;
}

.sidebar-closed {
  @apply w-0;
}

.sidebar-header {
  @apply flex items-center justify-between p-4 border-b border-gray-700;
}

.sidebar-title {
  @apply text-lg font-semibold;
}

.close-btn {
  @apply text-xl hover:text-red-400 transition;
}

.sidebar-nav {
  @apply p-4;
}

.sidebar-nav ul {
  @apply space-y-3;
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar-link {
  @apply flex items-center gap-3 p-2 rounded
         hover:bg-gray-700 transition;
}

.open-btn {
  @apply absolute z-40 text-white
         px-3 py-2 rounded-md shadow hover:bg-gray-700 transition text-sm;
  top: 1rem;
  left: 1rem;
  background: linear-gradient(to right, #000000, #1f2937);
}
</style>


