<template>
  <div id="root">
    <Nav />
    <slot />
  </div>
</template>

<style scoped>
div#root {
  width: 100%;
  height: 100vh;
  background: hsl(0, 0%, 98%);
}
</style>