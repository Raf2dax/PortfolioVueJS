<template>
  <form @submit.prevent="onSubmit" class="register-form">
    <input 
      v-model="emailValue" 
      type="email" 
      placeholder="Votre email"
    />
    <span class="text">{{ emailErrorMessage }}</span>
    
    <button type="submit" :disabled="isSubmitting">
      Envoyer
    </button> 
  </form>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'

const { handleSubmit, isSubmitting } = useForm()

const { value: emailValue, errorMessage: emailErrorMessage } = useField(
  'email', 
  'required|email', 
  { label: 'Email' }
)

const onSubmit = handleSubmit(values => {
  console.log('Email envoyé :', values.email)
})
</script>

<style>
.register-form {
  @apply min-h-screen flex flex-col items-center justify-center gap-4;
}

input {
  @apply border border-gray-300 rounded px-4 py-2 w-64;
}

button {
  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
}
</style>
