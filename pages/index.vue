<script lang="ts" setup>
useHead({
  title: 'Countries'
})
</script>

<template>
  <div class="container-fluid px-4 mt-5">
    <div class="sub-head px-4">
      <Search />
      <Filter />
    </div>
    <div class="row mt-5">
      <div v-for="i in [1, 2, 3, 4]" class="col-12 col-md-6 col-lg-3">
        <CountryCard />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sub-head {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .sub-head {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>