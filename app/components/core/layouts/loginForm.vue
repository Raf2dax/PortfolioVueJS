<template>
  <form @submit.prevent="onSubmit" class="login-form">
    <div v-if="userStore.isLoggedIn" class="login-username">
      {{ userStore.username }}
    </div>

    <input
      v-model="usernameValue"
      type="text"
      placeholder="Nom d'utilisateur"
    />
    <span class="text">{{ usernameErrorMessage }}</span>

    <input
      v-model="passwordValue"
      type="password"
      placeholder="Mot de passe"
    />
    <span class="text">{{ passwordErrorMessage }}</span>

    <button type="submit" :disabled="isSubmitting">
      Se connecter
    </button>

    <div v-if="userStore.isLoggedIn" class="login-result">
      Connecte en tant que <strong>{{ userStore.username }}</strong>
    </div>
  </form>
</template>

<script setup>
import { onMounted } from 'vue'
import { useForm, useField } from 'vee-validate'
import { useUserStore } from '~/store/user.store'

const userStore = useUserStore()
const { handleSubmit, isSubmitting } = useForm()

const { value: usernameValue, errorMessage: usernameErrorMessage } = useField(
  'username',
  'required|min:2',
  { label: "Nom d'utilisateur" }
)

const { value: passwordValue, errorMessage: passwordErrorMessage } = useField(
  'password',
  'required|min:4',
  { label: 'Mot de passe' }
)

onMounted(() => {
  userStore.loadUsers()
})

const onSubmit = handleSubmit(values => {
  userStore.loginOrRegister(values.username, values.password)
})
</script>

<style>
.login-form {
  @apply min-h-screen flex flex-col items-center justify-center gap-4 relative;
}

input {
  @apply border border-gray-300 rounded px-4 py-2 w-64;
}

button {
  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
}

.login-result {
  @apply mt-4 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white;
}

.login-username {
  @apply absolute top-4 right-6 text-white/90 text-sm font-semibold;
}
</style>
