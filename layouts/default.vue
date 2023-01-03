<script setup>
  const {isDarkTheme} = useDarkTheme();
</script>

<template>
  <div id="root" :class="isDarkTheme ? 'dark-theme' : null">
    <a href="https://github.com/cybercoder-naj/countries.git" class="source-icon" target="_blank">
      <i class="fa-solid fa-code"></i>
    </a>

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

.source-icon {
  all: unset;
  position: fixed;
  bottom: 3em;
  right: 3em;
  z-index: 100;
  background-color: lightblue;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  padding: 0.5em;
  border-radius: 50%;
  cursor: pointer;
}

.source-icon i {
  font-size: 3em;
}
</style>