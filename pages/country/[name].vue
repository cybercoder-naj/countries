<script setup>
const route = useRoute()

const borderNames = ref([])

const countryName = route.params.name

const { data } = await useAsyncData(countryName, async () => {
  const response = (await $fetch(`https://restcountries.com/v3.1/name/${countryName}`))[0]

  response.borders.forEach(async border => {
    const borderRes = (await $fetch(`https://restcountries.com/v3/alpha/${border}`))[0]

    borderNames.value = [...borderNames.value, borderRes.name.common]
    console.log(borderNames.value)
  })
  return response
})

const nativeName = computed(() => {
  let name;
  Object.keys(data.value.name.nativeName).forEach(lang => {
    name = data.value.name.nativeName[lang].common
    return
  })
  return name
})

const currencies = computed(() => {
  const currencies = [];
  Object.keys(data.value.currencies).forEach(place => {
    currencies.push(data.value.currencies[place].name)
    return
  })
  return currencies.join(', ')
})

const languages = computed(() => {
  const langs = [];
  Object.keys(data.value.languages).forEach(place => {
    langs.push(data.value.languages[place])
    return
  })
  return langs.join(', ')
})

const topLevelDomains = computed(() => data.value.tld.join(', '))
</script>

<template>
  <div class="container-fluid px-4 mt-5">
    <div class="row">
      <div class="col-12">
        <NuxtLink to="/">
          <div class="ms-4 d-inline-flex px-3 py-2 bg-white white-pill justify-content-center align-items-center">
            <i class="fa fa-arrow-left icon me-2"></i>
            Back
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center">
        <img :src="data.flags.svg" :alt="countryName" class="ms-4" />
      </div>
      <div class="col-12 col-lg-6 row">
        <div class="col-12 mb-0">
          <h2>{{ countryName }}</h2>
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column">
          <div class="mt-4">
            <p class="my-1"><strong>Native Name:</strong> {{ nativeName }}</p>
            <p class="my-1"><strong>Population:</strong> {{ data.population }}</p>
            <p class="my-1"><strong>Region:</strong> {{ data.region }}</p>
            <p class="my-1"><strong>Sub Region:</strong> {{ data.subregion }}</p>
            <p class="my-1"><strong>Capital:</strong> {{ data.capital[0] }}</p>
          </div>
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column">
          <div class="mt-4">
            <p class="my-1"><strong>Top Level Domain: </strong> {{ topLevelDomains }}</p>
            <p class="my-1"><strong>Currencies:</strong> {{ currencies }}</p>
            <p class="my-1"><strong>Languages:</strong> {{ languages }}</p>
          </div>
        </div>
        <div class="col-12 mt-5">
          <p>
            <strong>Border Countries: </strong>
            <span v-for="border in borderNames" :key="border" class="white-pill px-3 py-2 mx-3">{{ border }}</span>
            <!-- <span class="white-pill px-3 py-2 mx-3">Pakistan</span>
            <span class="white-pill px-3 py-2 mx-3">Nepal</span>
            <span class="white-pill px-3 py-2 mx-3">Bhutan</span> -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.white-pill {
  box-shadow: 0 0 5px 5px #eeeeee;
}

img {
  width: 80%;
}

a {
  all: unset;
  cursor: pointer;
}
</style>