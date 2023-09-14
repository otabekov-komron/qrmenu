<template>
    <div class="p-4 flex flex-col min-h-screen flex-wrap items-center justify-center ">
        <p class="text-[34px] font-[900]   "> Delicious food for you</p>
        <div class="mt-7 flex justify-center pb-4 w-[100%] bg-[#f2f2f2] sticky top-[62px] z-10">
            <form class=" flex gap-2 w-[90%] items-center p-5 py-3 rounded-full bg-[#EFEEEE] ">
                <Icon size="28px" name="lucide:search" />
                <input
                    class="opacity-[0.5]  search  font-[400] bg-[#EFEEEE] text-[#000] outline-none text-[17px]   font-['light_sf']"
                    type="search" placeholder="Search" name="" id="">

            </form>
        </div>
        <FoodTypes />
        <div class="ps-10 mt-10 w-[100%] flex gap-7 pt-10 pb-4 scrollbar-hidden overflow-x-auto">
            <NuxtLink :to="`/product/${id}`">
                <Food img="@/assets/images/product.png" title="Veggie tomato mix" price="17,000 so'm" id="1" />
            </NuxtLink>
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
            <Food />
        </div>
    </div>
</template>
<script setup>
const id = ref(1);
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