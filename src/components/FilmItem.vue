<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  title: string;
}>();

let collapse = ref<Boolean>(false)
</script>

<template>
  <li class="film-item">
    <div class="heading" @click="collapse = !collapse">
      <h1 class="title">{{ title }}</h1>
      <span class="icon">{{ collapse ? '-' : '+' }}</span>
    </div>
    <Transition name="bounce">
      <p v-if="collapse" style="text-align: center;">
        Hello here is some bouncy text!
      </p>
    </Transition>
  </li>
</template>

<style scoped>
.heading {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.heading .icon {
  font-size: 30px;
  font-weight: 800;
}

.film-item {
  border-radius: 4px;
  list-style: none;
}

.title {
  font-size: 24px;
}
</style>
