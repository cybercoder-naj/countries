<script lang="ts" setup>
const { isDarkTheme } = useDarkTheme()

interface CardProps {
  name: string
  population: number
  region: string
  capital?: string[]
  svgUrl: string
  code: string
}

const props = defineProps<CardProps>()
</script>

<template>
  <div class="card mx-4 mb-5" :class="isDarkTheme ? 'dark-theme' : null">
    <img :src="svgUrl" :alt="name" />


    <NuxtLink :to="`/country/${code}`">
      <div class="country-content ms-4 ms-md-3 my-4 pe-2">
        <h3>{{ name }}</h3>

        <p class="mt-4 mb-1"><strong>Population:</strong> {{ population }}</p>
        <p class="mb-1"><strong>Region:</strong> {{ region }}</p>
        <p><strong>Capital:</strong> {{ capital == null ? "None" : capital[0] }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: contain;
}

.card.dark-theme {
  background: hsl(209, 23%, 22%);
  color: white;
}

a {
  all: unset;
  cursor: pointer;
}

a:hover h3 {
  text-decoration: underline;
}
</style>