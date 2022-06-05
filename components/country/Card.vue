<script lang="ts" setup>
interface CardProps {
  name: string
  population: number
  region: string
  capital?: string[]
  svgUrl: string
}

const props = defineProps<CardProps>()
</script>

<template>
  <div class="card mx-4 mb-5">
    <img :src="svgUrl" :alt="name" />

    <div class="country-content ms-3 ms-lg-5 my-4">
      <h3>{{ name }}</h3>

      <p class="mt-4 mb-1"><strong>Population:</strong> {{ population }}</p>
      <p class="mb-1"><strong>Region:</strong> {{region}}</p>
      <p><strong>Capital:</strong> {{capital == null ? "None" : capital[0] }}</p>
    </div>

  </div>
</template>

<style scoped>
img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: contain;
}
</style>