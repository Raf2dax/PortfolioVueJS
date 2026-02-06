<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import RegisterForm from './components/core/layouts/registerForm.vue';

  const textButton = 'Click'
  const onCustomClick= (value) => {
    console.log(value)  
  }
</script>
