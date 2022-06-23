<script lang="ts" setup>
const {isDarkTheme} = useDarkTheme()

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

const selectDropdownClassList = computed(() => {
  let clazz = ''

  if (active.value)
    clazz += "active "

  if (isDarkTheme.value)
    clazz += "dark-theme"

  return clazz.trim()
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
  <div class="select-container" :class="isDarkTheme ? 'dark-theme' : null">
    <div class="select-head" @click="handleClick">
      {{ selectText }} <i class="fa fa-caret-down icon"></i>
    </div>
    <div class="select-dropdown" :class="selectDropdownClassList">
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

.select-container.dark-theme {
  background: hsl(209, 23%, 22%);
  color: white;
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
  z-index: 100;
  flex-direction: column;
  text-align: center;
  font-size: 1.1rem;
  background-color: white;
}

.select-dropdown.dark-theme {
  background: hsl(209, 23%, 22%);
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

.select-dropdown.dark-theme .select-item:hover {
  background-color: hsl(209, 23%, 15%);
}
</style>