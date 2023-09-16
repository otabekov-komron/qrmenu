<template>
    <NuxtLink to="/" class="text-[#F6F6F9] bg-[#fa4a0c] w-[100%]  text-center btn text-[17px] p-4 py-5  rounded-[30px]
        ">
        {{ title }}
    </NuxtLink>
</template>
<script setup>
defineProps({
    title: String,

})
</script>
<style>
.btn {
    font-family: "sf_Text";
    font-weight: 400;
}
</style>