<script setup>
const route = useRoute()
const code = route.params.name

const { data } = await useAsyncData(code, async () => {
  const response = (await $fetch(`https://restcountries.com/v3.1/alpha/${code}`))[0]

  const borders = []
  for (let i = 0; i < response.borders.length; i++) {
    const border = response.borders[i]
    const borderRes = (await $fetch(`https://restcountries.com/v3/alpha/${border}`))[0]
    borders.push(borderRes.name.common)
  }

  return { 
    country: response,
    borders
  }
})

useHead({
  title: `Countries | ${data.value.country.name.common}`
})

const nativeName = computed(() => {
  let name;
  Object.keys(data.value.country.name.nativeName).forEach(lang => {
    name = data.value.country.name.nativeName[lang].common
    return
  })
  return name
})

const currencies = computed(() => {
  const currencies = [];
  Object.keys(data.value.country.currencies).forEach(place => {
    currencies.push(data.value.country.currencies[place].name)
    return
  })
  return currencies.join(', ')
})

const languages = computed(() => {
  const langs = [];
  Object.keys(data.value.country.languages).forEach(place => {
    langs.push(data.value.country.languages[place])
    return
  })
  return langs.join(', ')
})

const topLevelDomains = computed(() => data.value.country.tld.join(', '))
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
        <img :src="data.country.flags.svg" :alt="data.country.name.common" class="ms-md-4" />
      </div>
      <div class="col-12 col-lg-6 row px-4 px-lg-0 mt-3 mt-lg-0">
        <div class="col-12 mb-0">
          <h2>{{ data.country.name.common }}</h2>
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column">
          <div class="mt-4">
            <p class="my-1"><strong>Native Name:</strong> {{ nativeName }}</p>
            <p class="my-1"><strong>Population:</strong> {{ data.country.population }}</p>
            <p class="my-1"><strong>Region:</strong> {{ data.country.region }}</p>
            <p class="my-1"><strong>Sub Region:</strong> {{ data.country.subregion }}</p>
            <p class="my-1"><strong>Capital:</strong> {{ data.country.capital[0] }}</p>
          </div>
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column">
          <div class="mt-4">
            <p class="my-1"><strong>Top Level Domain: </strong> {{ topLevelDomains }}</p>
            <p class="my-1"><strong>Currencies:</strong> {{ currencies }}</p>
            <p class="my-1"><strong>Languages:</strong> {{ languages }}</p>
          </div>
        </div>
        <div class="col-12 col-lg-10 mt-5">
          <p>
            <strong>Border Countries: </strong>
            <p v-for="border in data.borders" :key="border" class="white-pill px-3 py-2 m-2">{{ border }}</p>
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

p.white-pill {
  display: inline-flex;
}

img {
  width: 100%;
}

@media (min-width: 992px) {
  img {
    width: 80%;
  }
}

a {
  all: unset;
  cursor: pointer;
}
</style>