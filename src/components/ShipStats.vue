<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    heading: string,
    value: string,
    subtext: string,
}>();

</script>

<template>
    <div class="ship-stats-item">
        <div class="stats-heading">{{ heading }}</div>
        <div class="stats-value">{{ value }}</div>
        <div class="stats-subheading">{{ subtext }}</div>
    </div>
</template>

<style scoped>
.ship-stats-item {
    padding: 20px;
    text-align: center;
}

.stats-heading {
    opacity: 0.8;
    font-weight: 400;
    font-size: 16px
}

.stats-value {
    font-weight: 800;
    font-size: 30px
}

.stats-subheading {
    opacity: 0.7;
    font-weight: 200;
    font-size: 14px
}
</style>
