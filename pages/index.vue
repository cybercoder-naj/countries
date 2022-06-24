<script setup>
const search = ref("")
const filter = ref("")
const { data: countries } = await useFetch('https://restcountries.com/v3.1/all')

function handleSearch(e) {
  search.value = e
}

function handleFilter(e) {
  filter.value = e
}

const filteredCountries = computed(() => {
  return countries.value.filter(country => {
    return country.name.common.toLowerCase().includes(search.value.toLowerCase()) &&
      (!filter.value.length || country.region === filter.value)
  })
})

useHead({
  title: 'Countries'
})
</script>

<template>
  <div class="container-fluid px-4 mt-5">
    <div class="sub-head px-4">
      <Search @search="handleSearch" />
      <Filter @filter="handleFilter" />
    </div>
    <div class="row mt-4">
      <div v-for="country in filteredCountries" class="col-12 col-md-6 col-lg-3" :key="country.name.common">
        <CountryCard :name="country.name.common" :population="country.population" :region="country.region"
          :capital="country.capital" :svgUrl="country.flags.svg" :code="country.cca2" />
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