<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  title: string,
  episode_id: Number,
  opening_crawl: string,
  director: string,
  producer: string,
  release_date: string,
  url: string,
  created: string,
  edited: string,
}>();

let collapse = ref<Boolean>(false)

const handlePanel = () => {
  collapse.value = !collapse.value
}

const formatDate = (data: string): string => {
  let options: object = { year: 'numeric', month: 'long', day: 'numeric' };
  let date = new Date(data).toLocaleDateString("en-US", options);
  return date
}

</script>

<template>
  <li class="card">
    <div class="heading" @click="handlePanel">
      <div class="title" :class="collapse ? 'collapse-text' : ''">{{ title }}</div>
      <span class="icon" v-if="!collapse">+</span>
    </div>
    <Transition :duration="550" name="nested">
      <div v-if="collapse" class="outer">
        <div class="inner">
          <button @click="handlePanel" class="close-btn">X</button>
          <div style="opacity:0.9">
            {{ opening_crawl }}
          </div>
          <div class="details">
            <div class="film-data"><span>Director:</span> <b>{{ director }}</b></div>
            <div class="film-data"><span>Producer:</span> <b>{{ producer }}</b></div>
            <div class="film-data"><span>Release Date:</span> <b>{{ formatDate(release_date) }}</b></div>
          </div>
        </div>
      </div>
    </Transition>
  </li>
</template>

<style scoped>
.film-data {
  max-width: 300px;
}

.film-data span {
  opacity: 0.8;
}
</style>
