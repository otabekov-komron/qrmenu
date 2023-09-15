<template>
    <ul class="z-10 sticky  top-14 w-[100%] bg-[#F2F2F2] py-5 ps-10 scrollbar-hidden overflow-x-auto list font-[400] text-[17px] flex w-[100%] ">
        
        <li class="text-[#9A9A9D] py-2 px-4 "><NuxtLink to="/#foods">Foods</NuxtLink></li>
        <li class="text-[#9A9A9D] py-2 px-4 "><NuxtLink to="/#drinks">Drinks</NuxtLink></li>
        <li class="text-[#9A9A9D] py-2 px-4 "><NuxtLink to="/#snacks">Snacks</NuxtLink></li>
        <li class="text-[#9A9A9D] py-2 px-4 "><NuxtLink to="/#sweets">Sweets</NuxtLink></li>
        <li class="text-[#9A9A9D] py-2 px-4 "><NuxtLink to="/#sauces">Sauces</NuxtLink></li>
    </ul>
</template>
<style scoped>

.list {
    font-family: 'sf_Text';
}

.scrollbar-hidden::-webkit-scrollbar {
    display: none;
}
</style>
