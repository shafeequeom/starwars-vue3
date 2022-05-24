<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ title }}</h1>
  </div>
</template>

<style scoped>

</style>
