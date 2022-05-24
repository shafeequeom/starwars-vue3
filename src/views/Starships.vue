<script lang="ts">
import { defineComponent, reactive, ref, toRefs, onMounted } from "vue";
import { listStarships } from "../services/starships";
import ShipItem from "@/components/ShipItem.vue";
import type { ListStarshipTypes } from "@/types/Starship.interface";

export default defineComponent({
  name: "Starship",
  components: {
    ShipItem,
  },
  setup() {
    let starships: ListStarshipTypes = reactive({ count: 0, next: null, previous: null, results: [] });
    let data = ref<Number>(0)

    const getStarships = async (): Promise<void> => {
      let data = await listStarships();
      starships.results = data.results;
    };

    onMounted(() => {
      getStarships();
    });

    return { data, ...toRefs(starships) };
  },
});
</script>

<template>
  <div v-if="results">
    <template v-for="(film, index) in results" :key="index">
      <ShipItem :name="film.name"></ShipItem>
    </template>
  </div>
</template>

<style>
</style>
