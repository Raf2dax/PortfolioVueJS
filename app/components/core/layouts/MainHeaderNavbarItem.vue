<template>
  <NuxtLink to = "overviews">
        <li></li>
    </NuxtLink>
</template>

<script setup {}>
    const props = defineProps({
        link : { type:Object, required : true, default:() => null}
    })

</script>

<style>

</style>