<!-- components/Section.vue -->
<template>
    <div :id="id" class="section">
      <p class="section-title">{{ title }}</p>
      <div class="grid items-start grid-cols-2 gap-4 gap-y-14 mt-10 pt-4 px-4 pb-5">
        <FoodLink
          v-for="food in foods"
          :key="food.id"
          :id="food.id"
          :name="food.name"
          :price="food.price"
          :product="food.product"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  
  const props = defineProps({
    id: String,
    title: String,
    foods: Array,
  });
  </script>
  
  <style scoped>
  .section {
    scroll-margin: 9rem;
  }
  
  .section-title {
    padding: 14px;
    font-size: 22px;
    text-transform: uppercase;
    border-bottom: 2px solid rgba(178, 178, 178, 0.534);
  }
  </style>
  