<template>
  <ul>
    <MainHeaderNavbarItem v-for="(link, index) in links" :key="`main-link-${index}`" :link="link" />
  </ul>
</template>

<script setup>
import MainHeaderNavbarItem from './MainHeaderNavbarItem.vue';

const links =[{ name : 'overviews', url : "/overviews"}]
</script> 

<style>

</style>