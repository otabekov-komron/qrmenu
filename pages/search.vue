<template>
    <div class="m-0 h-[100vh]  py-10 bg-[#F5F5F5]">
        <div class="flex  px-8 justify-between items-center">
            <NuxtLink to="/">
                <Icon color="rgba(0, 0, 0, 1)" size="24px" name="material-symbols:arrow-back-ios-rounded" />
            </NuxtLink>

            <form class="flex items-center p-5 py-2 rounded-full bg-[#EFEEEE]">
                <input
                    class="opacity-[0.5] search font-[400] bg-[#EFEEEE] text-[#000] outline-none text-[17px] font-['light_sf'] pr-3"
                    type="search" placeholder="Search" name="" id="" />
                <button type="submit">
                    <Icon size="18px" name="lucide:search" />
                </button>
            </form>
        </div>

        <!-- <div class="py-[25vh]">
            <ErrorItem icon="tdesign:search-error" sizeIcon="100px" text="Item not found"
            desc="Try searching the item with different keyword." />
        </div> 
        Error  -->
        <div class="grid  items-start grid-cols-2 gap-4 gap-y-14 mt-14 pt-4 px-4 pb-5">
            <FoodLink key="1" id="1" name="Qo'yni boynidan bolgan tandir goshtidan bolgan" price="17000 so'm" product="product.png" />
            <FoodLink key="1" id="1" name="Soup" price="17000 so'm" product="product.png" />
        </div>
    </div>
</template>

<script setup>



definePageMeta({
    layout: false
})
</script>

<style scoped>
input[type="search"]::-webkit-search-cancel-button {
    all: unset;
}

.history {
    font-family: "sf_Text";
    font-weight: 600;

}
</style>