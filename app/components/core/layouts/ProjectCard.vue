<template>
  <button class="project-card" @click="$emit('select', project)">
    <img 
      class="project-card__img" 
      :src="project.image" 
      :alt="project.name"
    />
    <span class="project-card__name">{{ project.name }}</span>
  </button>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});

defineEmits(['select']);
</script>

<style scoped>
.project-card {
  @apply grid gap-2 p-3 text-left cursor-pointer transition duration-200 ease-in-out text-[aliceblue] border rounded-[16px] bg-[rgba(14,20,34,0.65)] border-[rgba(213,226,255,0.2)];
}

.project-card:hover {
  @apply -translate-y-[2px] border-[rgba(213,226,255,0.6)];
}

.project-card__img {
  @apply w-full h-auto object-cover rounded-[12px] aspect-[16/9];
}

.project-card__name {
  @apply text-[0.95rem] font-semibold;
}
</style>