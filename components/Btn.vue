<template>
    <div>
        <button class="text-[#F6F6F9] bg-[rgba(250, 74, 12, 1)] w-[100%] text-center btn text-[17px] p-4 py-5  rounded-[30px]
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
<style>
.btn {
    font-family: "sf_Text";
    font-weight: 400;
}
</style>