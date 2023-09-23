<template>
    <div class="flex flex-col gap-3 items-center justify-center text-center">
        <Icon :name="icon" :size="sizeIcon" color="rgba(199, 199, 199, 1)" />
        <h1 class="history text-[58px]'">{{ text }}</h1>
        <p class="opacity-[0.57] w-[60%] font-[400] desc  text-17px">{{ desc }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    icon: String,
    sizeIcon: String,
    text: String,
    desc: String,
})
</script>

<style  scoped>
.history {
    font-family: "sf_Text";
    font-weight: 600;
    font-size: 25px;
}
.desc{
    font-family: "sf_Text";
    font-weight: 600;
}
</style>
