<template>
    <div class="flex px-8 justify-between items-center">
        <NuxtLink to="/">
            <Icon color="rgba(0, 0, 0, 1)" size="24px" name="material-symbols:arrow-back-ios-rounded" />
        </NuxtLink>
        <h1 class="pe-5 history text-[#000]  text-[18px]">{{ text }}</h1>
        <div> </div>
    </div>
</template>

<script setup>
defineProps({
    text: String
})
</script>