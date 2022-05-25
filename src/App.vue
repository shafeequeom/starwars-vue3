<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useModeStore } from "./stores/mode";
import { storeToRefs, mapActions } from "pinia";
import { onMounted } from "vue";
const store = useModeStore()

const { theme } = storeToRefs(store);

onMounted(() => {
  document.body.className = 'light';
})

// const { switchTheme } = mapActions(useModeStore, ['switchTheme'])
const switchTheme = () => {
  store.switchTheme()
}

</script>

<template>
  <div :class="theme">
    <header>
      <div class="wrapper">
        <RouterLink to="/">
          <div class="logo"> Starwars</div>
        </RouterLink>
        <nav>
          <RouterLink to="/">Films</RouterLink>
          <RouterLink to="/starships">Starships</RouterLink>

          <a class="mode-toggle" @click="switchTheme">
            <Transition name="slide-up">
              <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" class="icon fill-current" fill="#fff"
                viewBox="0 0 24 24" height="30px" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <svg v-else-if="theme === 'light'" xmlns=" http://www.w3.org/2000/svg" class="icon" fill="#222"
                viewBox="0 0 24 24" height="30px" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </Transition>
          </a>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>

</template>

<style>
@import "@/assets/base.css";

.mode-toggle {
  width: 60px;
  height: 30px;
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.mode-toggle svg {
  position: relative;
}

.mode-toggle:hover {
  opacity: 0.9;
}
</style>
