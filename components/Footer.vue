<template>
    <div class="fixed w-[100%]  bottom-0 z-10 bg-[#F2F2F2] flex items-center justify-between p-4">
        <NuxtLink :to="`/`">
            <Icon size="30px" name="material-symbols:home-outline" color="#9A9A9D" />
        </NuxtLink>
        <NuxtLink :to="`/history`">
            <Icon size="30px" name="akar-icons:history" color="#9A9A9D" />
        </NuxtLink>
        <NuxtLink :to="`/favorite`">
            <Icon size="30px" name="ic:baseline-favorite-border" color="#9A9A9D" />
        </NuxtLink>
    </div>
</template>

<script setup>

</script>

