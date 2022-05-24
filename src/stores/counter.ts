import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "mode",
  state: () => ({
    mode: 'dark',
  }),
  getters: {
    mode: (state) => state.mode,
  },
  actions: {
    switch() {
      this.mode = this.mode == 'light' ? 'dark' : 'light';
    },
  },
});
