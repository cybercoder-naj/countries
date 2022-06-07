<template>
  <div class="card mx-4 mb-5">
    <img src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt="India" />

    <NuxtLink to="/country/India">
      <div class="country-content ms-4 ms-md-3 my-4">
        <h3>India</h3>

        <p class="mt-4 mb-1"><strong>Population:</strong> 1.5 Billion</p>
        <p class="mb-1"><strong>Region:</strong> Asia</p>
        <p><strong>Capital:</strong> New Delhi</p>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
a {
  all: unset;
  cursor: pointer;
}

a:hover h3 {
  text-decoration: underline;
}
</style>