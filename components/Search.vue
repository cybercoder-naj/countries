<template>
  <div class="input-container">
    <i class="fa-solid fa-magnifying-glass icon"></i>
    <input class="input-field" type="text" placeholder="Search for a country...">
  </div>
</template>

<style scoped>
  .input-field {
    padding: 8px 10px 8px 0;
    border: none;
    outline: none;
  }

  .input-container {
    display: inline-flex;
    align-items: center;
    background: white;
    box-shadow: 0px 0px 5px 5px #eeeeee;
  }

  .icon {
    padding: 10px;
    min-width: 40px;
  }
</style>