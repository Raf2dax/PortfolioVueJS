<template>
  <div v-if="userStore.isLoggedIn" class="user-badge">
    <span class="user-badge__username">{{ userStore.username }}</span>
    <BaseButton 
      text="Déconnexion" 
      @customClick="handleLogout"
      class="user-badge__logout"
    />
  </div>
</template>

<script setup>
import { useUserStore } from '~/store/user.store';
import BaseButton from '~/components/BaseButton.vue'; 

const userStore = useUserStore();

const handleLogout = () => {
  userStore.logout();
};
</script>

<style scoped>
.user-badge {
  @apply fixed top-4 right-4 flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 shadow-lg z-50;
}

.user-badge__username {
  @apply text-sm font-medium text-gray-800;
}

.user-badge__logout :deep(button) {
  @apply mb-0 me-0;
}
</style>