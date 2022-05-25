<script lang="ts">
import { defineComponent, reactive, ref, toRefs, onMounted } from "vue";
import { listFilms } from "../services/film";
import FilmItem from "@/components/FilmItem.vue";
import type { ListFilmTypes } from "@/types/FilmsType.interface";

export default defineComponent({
  name: "Film",
  components: {
    FilmItem,
  },
  setup() {
    let films: ListFilmTypes = reactive({ count: 0, next: null, previous: null, results: [] });

    const getFilms = async (): Promise<void> => {
      let data = await listFilms();
      films.results = data.results;
    };

    onMounted(() => {
      getFilms();
    });

    return { ...toRefs(films) };
  },
});
</script>

<template>

  <div v-if="results?.length">
    <ul>
      <FilmItem v-for="(film, index) in results" :key="index" v-bind="film"></FilmItem>
    </ul>
  </div>
  <div v-else>
    <h1 class="text-center">Loading...</h1>
  </div>

</template>

<style>
</style>
