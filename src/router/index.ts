import { createRouter, createWebHistory } from "vue-router";
import Starships from "../views/Starships.vue";
import Films from "../views/Films.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "films",
      component: Films,
    },
    {
      path: "/starships",
      name: "starships",
      component: Starships,
    },
  ],
});

export default router;
