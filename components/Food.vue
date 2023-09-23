<template>
    <div class="flex card flex-col items-center bg-white rounded-[30px] min-w-[120px]">
        <img class="rounded-full relative bottom-10 w-[70%] " :src="`/images/${product}`" alt="Image">

        <div class="flex flex-col  w-[70%] text-center">
            <p class="name text-[14px] -mt-6 w-[100%] ">{{ name }}</p>
            <p class=" text-[#FA4A0C] mt-4 mb-4">{{ price }}</p>
        </div>
    </div>
</template>
<style>
.card {
    box-shadow: 0px 30px 60px 0px rgba(57, 57, 57, 0.10);
}

.name {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "sf_Text";
    font-weight: bolder;
}
</style>
<script setup>
defineProps({
    product: String,
    name: String,
    price: String
})
</script>