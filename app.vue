<template>
  <div id="root">
    <Nav />

    <div class="container-fluid px-4">
      <div class="row">
        <div v-for="i in [1,2,3,4]" class="col-12 col-md-6 col-lg-3">
          <CountryCard />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div#root {
  width: 100%;
  height: 100vh;
  background: hsl(0, 0%, 98%);
}
</style>