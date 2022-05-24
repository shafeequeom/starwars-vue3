<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ name }}</h1>
  </div>
</template>

<style scoped>
</style>
