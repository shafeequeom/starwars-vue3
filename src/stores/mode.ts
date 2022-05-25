import { defineStore } from "pinia";

export const useModeStore = defineStore({
  id: "mode",
  state: () => ({
    mode: 'light',
  }),
  getters: {
    theme: (state) => state.mode,
  },
  actions: {
    switchTheme() {
      this.mode = this.mode == 'light' ? 'dark' : 'light'
      document.body.className = this.mode;
    },
  },
});
