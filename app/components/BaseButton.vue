<template>
  <div>
    <button @click="onCustomClick">
    {{ text }}
    </button>
  </div>
</template>

<script setup>
  const props = defineProps({
    text: {type : String, required : true, default: ''}
  })
  
  const emit = defineEmits(['customClick'])

  const onCustomClick = () => {
    emit('customClick', true)
  }
</script>

<style lang="scss" scoped>
button{
  display: block;
  @apply text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
  
}

h1{
  @apply text-7xl text-red-500 ;
}
</style>