<script lang="ts" setup>
const countries = [
  'Africa',
  'America',
  'Asia',
  'Europe',
  'Oceania'
]

const active = ref(false)
const selected = ref("")

const selectText = computed(() => {
  return (selected.value.length) ?
    selected.value :
    "Filter by Region"
})

function handleClick() {
  active.value = !active.value
}

function handleSelect(region: string) {
  selected.value = region
  handleClick()
}
</script>

<template>
  <div class="select-container mt-4 mt-md-0">
    <div class="select-head" v-on:click="handleClick">
      {{ selectText }} <i class="fa fa-caret-down icon"></i>
    </div>
    <div class="select-dropdown" v-bind:class="active ? 'active' : null">
      <div v-for="country in countries" :key="country" class="select-item" @click="() => handleSelect(country)">
        {{ country }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.select-container {
  background-color: white;
  display: inline-flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  min-width: 160px;
}

.select-head {
  display: inline-flex;
  align-items: center;
  margin: 8px 10px;
  justify-content: space-between;
}

.icon {
  padding: 10px;
}

.select-dropdown {
  display: none;
  position: absolute;
  width: 100%;
  top: 110%;
  border: 1px solid black;
  z-index: 100;
  flex-direction: column;
  text-align: center;
  font-size: 1.1rem;
  background-color: white;
}

.select-dropdown.active {
  display: flex;
}

.select-dropdown .select-item {
  display: inline-flex;
  width: 100%;
  padding: 8px 12px;
}

.select-dropdown .select-item:hover {
  background-color: hsl(0, 0%, 98%);
}
</style>