<template>
    <div class="m-0 min-h-screen py-10 bg-[#F5F5F5]">
        <PageHead text="Favorites" />

        <div class="flex flex-col gap-3 py-40 items-center justify-center text-center">
            <Icon name="icon-park-outline:unlike" size="108px" color="rgba(199, 199, 199, 1)" />
            <h1 class="history text-[28px]'">No favorites yet</h1>
            <p class="opacity-[0.57] w-[60%] font-[100] history text-17px">Hit the orange button down below to Create an
                order</p>
        </div>
        <div class="flex sticky bottom-0 justify-center px-8">
            <Btn class="w-[100%]" title="Start ordering" />
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: false
})
</script>

<style  scoped>
.history {
    font-family: "sf_Text";
    font-weight: 600;

}
</style>