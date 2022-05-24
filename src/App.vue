<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/">
        <div class="logo"> Starwar</div>
      </RouterLink>
      <nav>
        <RouterLink to="/">Films</RouterLink>
        <RouterLink to="/starships">Starships</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

</template>

<style>
@import "@/assets/base.css";

.wrapper {
  display: flex;
  justify-content: space-around;
  font-size: 30px;
  border: 1px #000 solid;
  margin-top: 20px;
}

.logo {
  color: #FFE81F;
  /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

a {
  text-decoration: none;
}

nav a {
  margin: 30px 10px;
  padding: 30 20px;
  background-color: #ccc;
  color: black;
}

nav a:hover {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.335), 0 0 15px rgba(0, 0, 255, 0.329), 0 0 5px rgba(0, 0, 139, 0.318);
}

main {
  padding: 40px;
  width: 70%;
  margin: 0 auto;
  border: 1px #000 solid;
}
</style>
