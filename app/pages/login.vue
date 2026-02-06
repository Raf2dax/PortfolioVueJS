<template>
  <form @submit="onSubmit" class="login-form">
    <div class="login-form__group">
      <Field
        name="username"
        v-model="username"
        type="text"
        placeholder="Nom d'utilisateur"
        class="login-form__input"
        :rules="validateUsername"
      />
      <ErrorMessage name="username" class="login-form__error" />
    </div>
    
    <div class="login-form__group">
      <Field
        name="password"
        v-model="password"
        type="password"
        placeholder="Mot de passe"
        class="login-form__input"
        :rules="validatePassword"
      />
      <ErrorMessage name="password" class="login-form__error" />
    </div>

    <button type="submit" class="login-form__button">
      Connexion / Inscription
    </button>

    <p v-if="message" class="login-form__message" :class="{ 'login-form__message--error': !success }">
      {{ message }}
    </p>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useForm, Field, ErrorMessage } from 'vee-validate';
import { useUserStore } from '~/store/user.store';

const userStore = useUserStore();

const username = ref('');
const password = ref('');
const message = ref('');
const success = ref(false);

const validateUsername = (value) => {
  if (!value) return 'Le nom d\'utilisateur est requis.';
  if (value.length < 3) return 'Le nom d\'utilisateur doit contenir au moins 3 caractères.';
  return true;
};

const validatePassword = (value) => {
  if (!value) return 'Le mot de passe est requis.';
  if (value.length < 6) return 'Le mot de passe doit contenir au moins 6 caractères.';
  return true;
};

const { handleSubmit } = useForm();

const onSubmit = handleSubmit((values) => {
  const result = userStore.loginOrRegister(username.value, password.value);
  message.value = result.message;
  success.value = result.ok;

  if (result.ok) {
    username.value = '';
    password.value = '';
  }
});
</script>

<style scoped>
.login-form {
  @apply flex flex-col gap-4 max-w-md mx-auto p-6;
}

.login-form__group {
  @apply flex flex-col gap-1;
}

.login-form__input {
  @apply rounded-md border border-white/20 bg-white/10 px-4 py-2 text-black placeholder:text-gray-500;
}

.login-form__error {
  @apply text-sm text-red-400;
}

.login-form__button {
  @apply rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition-colors;
}

.login-form__message {
  @apply text-sm text-green-400;
}

.login-form__message--error {
  @apply text-red-400;
}
</style>