<template>
  <header class="main-header">
    <div class="header-logo">
      <Applogo />
    </div>
    <div class="portefolio">
      <Text>
        <template #text>
          <div class="logo-text">Portefolio</div>
        </template>
      </Text>
    </div>
    <div class="header-navbar">
      <Text>
        <template #text>
          <div>Rafael Mornier</div>
        </template>
      </Text>
    </div>
    <div class="location">
      <Text>
        <template #text>
          <div>Based in Bordeaux</div>
        </template>
      </Text>
    </div>
  </header>
</template>

<script setup lang="ts">
import Text from './Text.vue';
</script>

<style lang="scss" scoped>
.main-header {
  @apply sticky top-0 z-50 flex items-center font-bold tracking-tight leading-tight py-4 bg-gradient-to-r from-black to-gray-800 text-white px-5;
}

.header-logo {
  @apply flex content-center;
}

.header-navbar {
  @apply flex flex-1 justify-center text-7xl;
}

.portefolio {
  @apply p-0;
}

.location {
  @apply text-sm;
}

.logo-text {
  @apply font-bold;
}
</style>