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
        <img src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt="India" class="ms-4" />
      </div>
      <div class="col-12 col-lg-6 row">
        <div class="col-12 mb-0">
          <h2>India</h2>
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column">
          <div class="mt-4">
            <p class="my-1"><strong>Native Name:</strong> Bharat</p>
            <p class="my-1"><strong>Population:</strong> 1.5 Billion</p>
            <p class="my-1"><strong>Region:</strong> Asia</p>
            <p class="my-1"><strong>Sub Region:</strong> Indian Subcontinent</p>
            <p class="my-1"><strong>Capital:</strong> New Delhi</p>
          </div>
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column">
          <div class="mt-4">
            <p class="my-1"><strong>Top Level Domain: </strong> .in</p>
            <p class="my-1"><strong>Currencies:</strong> Rupee</p>
            <p class="my-1"><strong>Languages:</strong> English, Hindi</p>
          </div>
        </div>
        <div class="col-12 mt-5">
          <p>
            <strong>Border Countries: </strong>
            <span class="white-pill px-3 py-2 mx-3">Pakistan</span>
            <span class="white-pill px-3 py-2 ">Nepal</span>
            <span class="white-pill px-3 py-2 ">Bhutan</span>
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