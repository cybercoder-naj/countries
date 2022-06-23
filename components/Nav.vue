<script setup>
  const {isDarkTheme, toggleTheme} = useDarkTheme()
</script>

<template>
  <nav class="px-5 py-3" :class="isDarkTheme ? 'dark-theme' : null">
    <h3>Where in the world?</h3>
    <div class="switcher" @click="toggleTheme">
      <i :class="isDarkTheme ? 'fa' : 'fa-regular'" class="fa-moon"></i>
      Dark Mode
    </div>
  </nav>
</template>

<style scoped>
nav {
  background: white;
  width: 100%;
  box-shadow: 0 5px 5px 0 #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.switcher {
  cursor: pointer;
}

nav.dark-theme {
  background: hsl(209, 23%, 22%);
  color: white;
  box-shadow: 0 5px 5px 0 hsl(209, 23%, 15%);
}
</style>