<template>
    <div class="bg-[#fff] p-4 px-0 flex flex-col min-h-screen flex-wrap items-center justify-center ">
        <p class="text-[30px] font-[900] px-4 text-center"> Delicious food for you</p>
        <div class="mt-7 flex justify-center pb-4 w-[100%] bg-[#fff]">
            <form class=" flex gap-2 w-[90%] items-center p-5 py-3 rounded-full bg-[#EFEEEE] ">
                <Icon size="28px" name="lucide:search" />
                <input
                    class="opacity-[0.5]  search  font-[400] bg-[#EFEEEE] text-[#000] outline-none text-[17px]   font-['light_sf']"
                    type="search" placeholder="Search" name="" id="">

            </form>
        </div>
        <FoodTypes />

        <div class="list mb-10 bg-[#f2f2f2]">
            <div id="foods">
                <p class="px-4 py-4 text-[22px] border-b-2">FOODS</p>
                <div class="grid px-4 grid-cols-2 gap-2 gap-x-4 gap-y-20 mt-10 pt-4 pb-5 ">

                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Hot Soup Mix" price="17000 so'm" product="product.png" />
                    </NuxtLink>
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Hot Soup Mix" price="17000 so'm" product="product.png" />
                    </NuxtLink>
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Hot Soup Mix" price="17000 so'm" product="product.png" />
                    </NuxtLink>
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Hot Soup Mix" price="17000 so'm" product="product.png" />
                    </NuxtLink>
                </div>
            </div>
            <div id="drinks">
                <p class="px-4 py-4 text-[22px] border-b-2 uppercase">drinks</p>
                <div class="grid px-4 grid-cols-2 gap-2 gap-x-4 gap-y-20 mt-10 pt-4 pb-4 ">

                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Orange cocktail" price="25000 so'm" product="drink.png" />
                    </NuxtLink>
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Orange cocktail" price="25000 so'm" product="drink.png" />
                    </NuxtLink>
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Orange cocktail" price="25000 so'm" product="drink.png" />
                    </NuxtLink>
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Orange cocktail" price="25000 so'm" product="drink.png" />
                    </NuxtLink>
                </div>
            </div>
            <div id="snacks">
                <p class="px-4 py-4 text-[22px] border-b-2 uppercase">Snacks</p>
                <div class="grid px-4 grid-cols-2 gap-2 gap-x-4 gap-y-20 mt-10 pt-4 pb-4">

                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Onion rings" price="15000 so'm" product="snack.png" />
                    </NuxtLink>
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Onion rings" price="15000 so'm" product="snack.png" />
                    </NuxtLink>
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Onion rings" price="15000 so'm" product="snack.png" />
                    </NuxtLink>
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Onion rings" price="15000 so'm" product="snack.png" />
                    </NuxtLink>

                </div>
            </div>
            <div id="sweets">
                <p class="px-4 py-4 text-[22px] border-b-2 uppercase">Sweets</p>
                <div class="grid px-4 grid-cols-2 gap-2 gap-x-4 gap-y-20 mt-10 pt-4 pb-4">
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Cheese cake" price="20000 so'm" product="dessert.png" />
                    </NuxtLink>
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Cheese cake" price="20000 so'm" product="dessert.png" />
                    </NuxtLink>
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Cheese cake" price="20000 so'm" product="dessert.png" />
                    </NuxtLink>
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Cheese cake" price="20000 so'm" product="dessert.png" />
                    </NuxtLink>
                </div>
            </div>
            <div id="sauces">
                <p class="px-4 py-4 text-[22px] border-b-2 uppercase">Sauces</p>
                <div class="grid px-4 grid-cols-2 gap-2 gap-x-4 gap-y-20 mt-10 pt-4 pb-4">
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Tomato sauce" price="3000 so'm" product="sauce.png" />
                    </NuxtLink>
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Tomato sauce" price="3000 so'm" product="sauce.png" />
                    </NuxtLink>
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Tomato sauce" price="3000 so'm" product="sauce.png" />
                    </NuxtLink>
                    <NuxtLink :to="`/product/${id}`">
                        <Food name="Tomato sauce" price="3000 so'm" product="sauce.png" />
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

#snacks,
#foods,
#drinks,
#sauces,
#sweets {
    scroll-margin: 9rem;
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