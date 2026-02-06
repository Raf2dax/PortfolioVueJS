<template>
  <form @submit.prevent="onSubmit" novalidate class="register-form">

    <input 
      v-model="usernameValue" 
      type="text" 
      placeholder="Pseudo" 
    />
    <p class="text">{{ usernameErrorMessage }}</p>

    <input 
      v-model="emailValue" 
      type="email" 
      placeholder="Email" 
    />
    <p class="text">{{ emailErrorMessage }}</p>

    <textarea 
      v-model="messageValue" 
      placeholder="Votre message..." 
      rows="4"
      class="resize-none"
    ></textarea>

    <button type="submit">Envoyer</button> 

  </form>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'

const { handleSubmit } = useForm()

const { value: usernameValue, errorMessage: usernameErrorMessage } = useField(
  'username', 
  'required', 
  { label: 'Pseudo' }
)

const { value: emailValue, errorMessage: emailErrorMessage } = useField(
  'email', 
  'required|email', 
  { label: 'Email' }
)

const { value: messageValue } = useField('message')

const onSubmit = handleSubmit((values) => {
  console.log('Pseudo:', values.username)
  console.log('Email:', values.email)
  console.log('Message:', values.message)
})
</script>

<style>
.register-form {
  @apply min-h-screen flex flex-col items-center justify-center gap-4;
}

.register-form input,
.register-form textarea {
  @apply border border-gray-400 rounded px-3 py-2 w-64;
}

.register-form textarea {
  @apply resize-none;
}

.register-form button {
  @apply bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700;
}

.text{
  @apply text-sm;
}
</style>
