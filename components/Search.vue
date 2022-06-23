<script setup>
const { isDarkTheme } = useDarkTheme()
const searchText = ref("")

const emit = defineEmits(["search"])
watch(searchText, (newSearch, oldSearch) => {
  emit("search", newSearch)
})

</script>

<template>
  <div class="input-container" :class="isDarkTheme ? 'dark-theme' : null">
    <i class="fa fa-magnifying-glass icon"></i>
    <input class="input-field" type="text" placeholder="Search for a country..." v-model="searchText"
      :class="isDarkTheme ? 'dark-theme' : null">
  </div>
</template>

<style scoped>
.input-field {
  padding: 8px 10px 8px 0;
  border: none;
  outline: none;
  background: transparent;
}

.input-field.dark-theme {
  color: white;
}

.input-field.dark-theme::placeholder {
  color: hsl(0, 0%, 90%);
}

.input-container {
  display: inline-flex;
  align-items: center;
  background: white;
  box-shadow: 0px 0px 5px 5px #eeeeee;
  color: black;
}

.input-container.dark-theme {
  background: hsl(209, 23%, 22%);
  color: white;
  box-shadow: 0px 0px 5px 5px hsl(209, 23%, 15%);
}

.icon {
  padding: 10px 16px;
  min-width: 40px;
}
</style>