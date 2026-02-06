<template>
  <aside class="project-preview">
    <div v-if="project" class="project-preview__card">
      <img
        class="project-preview__image"
        :src="project.preview"
        :alt="`${project.name} preview`"
      />
      <h3 class="project-preview__title">{{ project.name }}</h3>
      <p class="project-preview__text">{{ project.description }}</p>
    </div>
    <p v-else class="project-preview__empty">
      Clique sur un projet.
    </p>
  </aside>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    default: null
  }
});
</script>

<style scoped>
.project-preview {
  @apply min-h-[700px] p-5 rounded-[20px] border border-[rgba(213,226,255,0.25)] bg-[rgba(14,20,34,0.85)];
}

.project-preview__card { 
  @apply grid gap-3;
}

.project-preview__image {
  @apply w-full h-[220px] object-cover rounded-[16px];
}

.project-preview__title {
  @apply m-0 text-xl;
}

.project-preview__text {
  @apply m-0 opacity-80;
}

.project-preview__empty {
  @apply opacity-70 m-0;
}
</style>