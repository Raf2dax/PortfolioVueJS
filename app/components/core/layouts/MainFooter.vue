<template>
  <footer class="main-footer">
    <div class="contact-info">

      <router-link to="/contact">
        <BaseButton :text="contact"/>
      </router-link>
    </div>

    <div class="Home">

      <router-link to="/">
        <BaseButton :text="home"/>
      </router-link>
    </div>

    <div class="newsletter">

      <router-link to="/newsletter">
        <BaseButton :text="newsletter"/>
      </router-link>
    </div>

    <div class="login">
      <router-link to="/login">
        <BaseButton :text="login"/>
      </router-link>
    </div>
  </footer>
</template>

<script setup>
const contact = "Me contacter"
const newsletter ="Newsletter"
const home ="Home"
const login = "Login"
</script>

<style lang="scss" scoped>
.main-footer {
  @apply flex items-center justify-between font-bold tracking-tight leading-tight py-4 px-5 
         bg-gradient-to-r from-black to-gray-800 text-white;
}
</style>
