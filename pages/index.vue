<template>
    <div class="bg-[#fff] p-4 px-0 flex flex-col min-h-screen flex-wrap items-center justify-center">
        <p class="text-[30px] font-[900] px-4 text-center">Delicious food for you</p>
        <div class="mt-7 flex justify-center pb-4 w-[100%] bg-[#fff]">
            <form class="flex gap-2 w-[90%] items-center p-5 py-3 rounded-full bg-[#EFEEEE]">
                <Icon size="28px" name="lucide:search" />
                <input
                    class="opacity-[0.5] search font-[400] bg-[#EFEEEE] text-[#000] outline-none text-[17px] font-['light_sf']"
                    type="search" placeholder="Search" name="" id="" />
            </form>
        </div>
        <FoodTypes />
        <div class="list mb-10 bg-[#f2f2f2]">
            <Section :id="'foods'" title="Foods" :foods="foodsData.foods" />
            <Section :id="'drinks'" title="Drinks" :foods="foodsData.drinks" />
            <Section :id="'snacks'" title="Snacks" :foods="foodsData.snacks" />
            <Section :id="'sweets'" title="Sweets" :foods="foodsData.sweets" />
            <Section :id="'sauces'" title="Sauces" :foods="foodsData.sauces" />
        </div>
    </div>
</template>
  
<script setup>

const foodsData = {
    foods: [
        { id: 1, name: 'Hot Soup Mix', price: '17000 so\'m', product: 'product.png' },
        { id: 2, name: 'Hot Soup Mix', price: '17000 so\'m', product: 'product.png' },
        { id: 3, name: 'Hot Soup Mix', price: '17000 so\'m', product: 'product.png' },
        { id: 4, name: 'Hot Soup Mix', price: '17000 so\'m', product: 'product.png' },
    ],
    drinks: [
        { id: 101, name: 'Orange cocktail', price: '25000 so\'m', product: 'drink.png' },
        { id: 102, name: 'Orange cocktail', price: '25000 so\'m', product: 'drink.png' },
        { id: 103, name: 'Orange cocktail', price: '25000 so\'m', product: 'drink.png' },
        { id: 104, name: 'Orange cocktail', price: '25000 so\'m', product: 'drink.png' },
    ],
    snacks: [
        { id: 201, name: 'Onion rings', price: '15000 so\'m', product: 'snack.png' },
        { id: 202, name: 'Onion rings', price: '15000 so\'m', product: 'snack.png' },
        { id: 203, name: 'Onion rings', price: '15000 so\'m', product: 'snack.png' },
        { id: 204, name: 'Onion rings', price: '15000 so\'m', product: 'snack.png' },
    ],
    sweets: [
        { id: 301, name: 'Cheese cake', price: '20000 so\'m', product: 'dessert.png' },
        { id: 302, name: 'Cheese cake', price: '20000 so\'m', product: 'dessert.png' },
        { id: 303, name: 'Cheese cake', price: '20000 so\'m', product: 'dessert.png' },
        { id: 304, name: 'Cheese cake', price: '20000 so\'m', product: 'dessert.png' },
    ],
    sauces: [
        { id: 401, name: 'Tomato sauce', price: '3000 so\'m', product: 'sauce.png' },
        { id: 402, name: 'Tomato sauce', price: '3000 so\'m', product: 'sauce.png' },
        { id: 403, name: 'Tomato sauce', price: '3000 so\'m', product: 'sauce.png' },
        { id: 404, name: 'Tomato sauce', price: '3000 so\'m', product: 'sauce.png' },
    ],
};
</script>
<style scoped>
input[type="search"]::-webkit-search-cancel-button {
  color: white;
  cursor: pointer;
  position: relative;
  left: 4px;
  background: #000;
  bottom: 15px;
  z-index: 10;
}
.active {
    border-bottom: 2px solid #fa4a0c;
}

.search {
  font-family: 'sf_Text';
  width: 150%;
}
</style>
  