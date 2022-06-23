<script setup>
  const {isDarkTheme} = useDarkTheme();
</script>

<template>
  <div id="root" :class="isDarkTheme ? 'dark-theme' : null">
    <Nav />
    <slot />
  </div>
</template>

<style scoped>
div#root {
  width: 100%;
  min-height: 100vh;
  background: hsl(0, 0%, 98%);
}

div#root.dark-theme {
  background: hsl(207, 26%, 17%)
}
</style>