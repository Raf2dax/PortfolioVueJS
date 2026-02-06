<template>
  <div class="default-layout">
    <MainHeader />
    <div class="page-body">
      <SideBar />
      <UserBadge />
      <main class="content">
        <slot />
      </main>
    </div>
    <MainFooter />
  </div>
</template>

<script setup>
import { useUserStore } from '~/store/user.store';

const userStore = useUserStore();

onMounted(() => {
  userStore.init();
});

</script>

<style scoped>
.default-layout {
  @apply min-h-screen flex flex-col;
  margin: 0;
  padding: 0;
}

.page-body {
  @apply flex flex-1 w-full relative;
  min-height: 0;
}

.content {
  @apply flex-1 w-full;
  margin: 0;
  padding: 0;
  min-height: 0;
}
</style>
