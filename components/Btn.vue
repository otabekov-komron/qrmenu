<template>
    <div>
        <button class="text-[#F6F6F9] w-[100%] text-center btn text-[17px] p-4  rounded-[30px]
        ">
            {{ title }}
        </button>
    </div>
</template>
<script setup>
defineProps({
    title: String,
})
</script>
<style scoped>
.btn {
    font-family: "sf_Text";
    font-weight: 400;
    background: rgba(250, 74, 12, 1);
}
</style>