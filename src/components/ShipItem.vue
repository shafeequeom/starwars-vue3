<script setup lang="ts">
import { ref } from 'vue';
import ShipStats from "./ShipStats.vue"

defineProps<{
  name: string,
  model: string,
  starship_class: string,
  manufacturer: string,
  cost_in_credits: string,
  length: string,
  crew: string,
  passengers: string,
  max_atmosphering_speed: string,
  hyperdrive_rating: string,
  MGLT: string,
  cargo_capacity: string,
  consumables: string,
}>();

let collapse = ref<Boolean>(false)

const handlePanel = () => {
  collapse.value = !collapse.value
}

const numberFormat = (data: string): string => {
  return Number(data).toLocaleString("en-US");
}
</script>

<template>
  <li class="card">
    <div class="heading" @click="handlePanel">
      <div class="title" :class="collapse ? 'collapse-text' : ''">{{ name }}</div>
      <span class="icon" v-if="!collapse">+</span>
    </div>
    <Transition :duration="550" name="nested">
      <div v-if="collapse" class="outer">
        <div class="inner">
          <button @click="handlePanel" class="close-btn">X</button>

          <div class="container">
            <div class="ship-stats">
              <ShipStats heading="Length" :value="length" subtext="Meters"></ShipStats>
              <ShipStats heading="Atmospheric" :value="max_atmosphering_speed" subtext="Speed"></ShipStats>
              <ShipStats heading="Hyperdrive" :value="hyperdrive_rating" subtext="Rating"></ShipStats>
              <ShipStats heading="Passenger" :value="passengers" subtext="Capacity"></ShipStats>
              <ShipStats heading="Crew" :value="crew" subtext="Capacity"></ShipStats>
            </div>
            <div class="details">
              <div>
                <div class="ship-data"><span>Ship Model</span><br> <b> {{ model }}</b></div>
                <div class="ship-data"><span>Manufacturer</span><br> <b>{{ manufacturer }}</b></div>
              </div>
              <div>
                <div class="ship-data"><span>Ship Class</span><br> <b>{{ starship_class }}</b></div>
                <div class="ship-data"><span>Cost of new ship</span><br> <b>{{ numberFormat(cost_in_credits)
                }} Galatic credit</b></div>
              </div>
              <div>
                <div class="ship-data"><span>Mega lights per hour</span><br> <b> {{ MGLT }} MGLT</b></div>
                <div class="ship-data"><span>Cargo Capacity</span><br> <b>{{ numberFormat(cargo_capacity) }} Kilo
                    grams</b></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Transition>
  </li>
</template>

<style scoped>
.details {
  font-size: 16px;
  text-align: left;
  justify-content: space-around;
}

.container {
  display: block;
  width: 100%;
}

.ship-stats {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  padding: 10px;
}

.ship-data {
  margin-bottom: 20px;
  max-width: 400px;
}

.ship-data span {
  font-weight: 200;
  opacity: 0.9;
}

.ship-data b {
  font-weight: 800;
  opacity: 1;
}


@media only screen and (max-width: 600px) {

  .details {
    text-align: center;
  }

  .ship-stats {
    grid-template-columns: auto auto;
  }
}
</style>
