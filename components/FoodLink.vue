<template>
    <NuxtLink :to="`/product/${id}`">
        <div class="food-link">
            <Food :name="name" :price="price" :product="product" />
        </div>
    </NuxtLink>
</template>
  
<script setup>
const props = defineProps({
    id: Number,
    name: String,
    price: String,
    product: String,
});
</script>
  

  