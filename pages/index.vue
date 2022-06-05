<script lang="ts" setup>

  const {data: countries} = useFetch('https://restcountries.com/v3.1/all')
</script>

<template>
  <div class="container-fluid px-4">
    <div class="row">
      <div v-for="country in countries" class="col-12 col-md-6 col-lg-3">
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