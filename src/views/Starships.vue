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
    let loading = ref<boolean>(false)

    const getStarships = async (page: number): Promise<void> => {
      loading.value = true
      let data = await listStarships(page);
      starships.results = data.results;
      starships.next = data.next
      starships.previous = data.previous
      loading.value = false
    };

    const parsePage = (url: string): number => {
      let params = (new URL(url)).searchParams;
      let page = params.get("page");
      return page ? parseInt(page) : 0
    }

    onMounted(() => {
      getStarships(1);
    });

    const handlePagination = (type: string) => {
      if (type === 'next' && starships.next) {
        let page: number = parsePage(starships.next)
        getStarships(page)
      } else if (type === 'previous' && starships.previous) {
        let page: number = parsePage(starships.previous)
        getStarships(page)
      }
    }

    return { handlePagination, loading, ...toRefs(starships) };
  },
});
</script>

<template>

  <div v-if="results?.length && !loading">
    <ShipItem v-for="(ship, index) in results" :key="index" v-bind="ship"></ShipItem>

    <div class="pagination">
      <button @click="handlePagination('previous')" :disabled="!previous">Prev</button>
      <button @click="handlePagination('next')" :disabled="!next">Next</button>
    </div>
  </div>
  <div v-if="loading">
    <h1 class="text-center">Loading...</h1>
  </div>
</template>

<style>
.pagination {
  display: flex;
  justify-content: center;
}

.pagination button {
  margin-right: 10px;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: bold;
}
</style>
