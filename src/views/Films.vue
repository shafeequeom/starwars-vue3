<script lang="ts">
import { defineComponent, reactive, ref, toRefs, onMounted } from "vue";
import { listFilms } from "../services/film";
import FilmItem from "@/components/FilmItem.vue";
import type { FilmTypes } from "@/types/FilmsType.interface";

export default defineComponent({
  name: "Film",
  components: {
    FilmItem,
  },
  setup() {
    let films: FilmTypes = reactive({ count: 0, next: null, previous: null, results: [] });
    let data = ref<Number>(0)

    const getFilms = async (): Promise<void> => {
      let data = await listFilms();
      films.results = data.results;
    };

    onMounted(() => {
      getFilms();
    });

    return { data, ...toRefs(films) };
  },
});
</script>

<template>
  <main>
    <h1>This is film page</h1>
    <div v-if="results">
      <template v-for="(film, index) in results" :key="index">
        <FilmItem :title="film.title"></FilmItem>
      </template>
    </div>
  </main>
</template>

<style>
</style>
