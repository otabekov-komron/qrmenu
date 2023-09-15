<template>
    <div class="p-4 px-0 flex flex-col min-h-screen flex-wrap items-center justify-center ">
        <p class="text-[34px] font-[900]   "> Delicious food for you</p>
        <div class="mt-7 flex justify-center pb-4 w-[100%] bg-[#f2f2f2]">
            <form class=" flex gap-2 w-[90%] items-center p-5 py-3 rounded-full bg-[#EFEEEE] ">
                <Icon size="28px" name="lucide:search" />
                <input
                    class="opacity-[0.5]  search  font-[400] bg-[#EFEEEE] text-[#000] outline-none text-[17px]   font-['light_sf']"
                    type="search" placeholder="Search" name="" id="">

            </form>
        </div>
        <FoodTypes />

        <div class="mb-10">
            <div id="foods">
            <p class="px-4 py-4 text-[22px] border-b-2">FOODS</p>
            <div class="grid px-4 grid-cols-2 gap-2 gap-x-4 gap-y-20 mt-10 pt-4 pb-5 ">

                <NuxtLink :to="`/product/${id}`">
                    <Food />
                </NuxtLink>
                <NuxtLink :to="`/product/${id}`">
                    <Food />
                </NuxtLink>
                <NuxtLink :to="`/product/${id}`">
                    <Food />
                </NuxtLink>
                <NuxtLink :to="`/product/${id}`">
                    <Food />
                </NuxtLink>

            </div>
        </div>
        <div id="drinks">
            <p class="px-4 py-4 text-[22px] border-b-2 uppercase">drinks</p>
            <div class="grid px-4 grid-cols-2 gap-2 gap-x-4 gap-y-20 mt-10 pt-4 pb-4 ">

                <NuxtLink :to="`/product/${id}`">
                    <Food />
                </NuxtLink>
                <NuxtLink :to="`/product/${id}`">
                    <Food />
                </NuxtLink>
                <NuxtLink :to="`/product/${id}`">
                    <Food />
                </NuxtLink>
                <NuxtLink :to="`/product/${id}`">
                    <Food />
                </NuxtLink>

            </div>
        </div>
        <div id="snacks">
            <p class="px-4 py-4 text-[22px] border-b-2 uppercase">Snacks</p>
            <div class="grid px-4 grid-cols-2 gap-2 gap-x-4 gap-y-20 mt-10 pt-4 pb-4">

                <NuxtLink :to="`/product/${id}`">
                    <Food />
                </NuxtLink>
                <NuxtLink :to="`/product/${id}`">
                    <Food />
                </NuxtLink>
                <NuxtLink :to="`/product/${id}`">
                    <Food />
                </NuxtLink>
                <NuxtLink :to="`/product/${id}`">
                    <Food />
                </NuxtLink>

            </div>
        </div>
        </div>
    </div>
</template>
<script setup>
const id = ref(1)
</script>
<style>
.scrollbar-hidden::-webkit-scrollbar {
    display: none;
}

.search {
    font-family: 'sf_Text';
    width: 150%;
}

input[type="search"]::-webkit-search-cancel-button {
    color: white;
    position: relative;
    left: 4px;
    background: #000;
    bottom: 15px;
    z-index: 10;
}
</style>