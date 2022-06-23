<script lang="ts" setup>
useHead({
  title: 'Countries'
})
</script>

<template>
  <div class="container-fluid px-4 mt-5">
    <div class="bars d-flex justify-content-between px-4">
      <Search />
      <Filter />
    </div>
    <div class="row mt-4">
      <div v-for="i in [1, 2, 3, 4]" class="col-12 col-md-6 col-lg-3">
        <CountryCard />
      </div>
    </div>
  </div>
</template>