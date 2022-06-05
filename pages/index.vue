<script lang="ts" setup>

  const {data: countries} = useFetch('https://restcountries.com/v3.1/all')
</script>

<template>
  <div class="container-fluid px-4 mt-5">
    <div class="bars d-flex justify-content-between px-4">
      <Search />
      <Filter />
    </div>
    <div class="row mt-4">
      <div v-for="country in countries" class="col-12 col-md-6 col-lg-3" :key="country.name.common">
        <CountryCard 
          :name="country.name.common" 
          :population="country.population" 
          :region="country.region" 
          :capital="country.capital"
          :svgUrl="country.flags.svg"
        />
      </div>
    </div>
  </div>
</template>