<template>
    <div class="bg-[#fff] rounded-[30px] p-4">
        <div class="flex items-center justify-between"><img class="w-[30%] rounded-full" src="/images/product.png"
                alt="product-img">
            <div class="flex w-[66%] flex-col">
                <p class="text-[17px] whitespace-nowrap text-ellipsis overflow-hidden w-[90%] ">Lorem ipsum dolor sit amet
                    dfe</p>
                <p class="text-[#fa4a0c] text-[15px]">25000 so'm</p>
                <div class="flex justify-end">
            <div
                class="border-[1px]  bg-[#fa4a0c] w-fit flex items-center gap-4 text-[13px] incdec text-[#fff] rounded-full ">
                <button class=" p-2 py-1 flex  justify-center text-center " @click="dec">-</button>
                <div class="text-center flex items-center justify-center max-w-[5px]">{{ num }}</div>
                <button class=" p-2 py-1 flex  justify-center text-center " @click="inc">+</button>
            </div>
        </div>
            </div>
            
        </div>
        
    </div>
</template>

<script setup>
const num = ref(0);

const inc = () => {
    num.value += 1;
}
const dec = () => {
    if (num.value === 0) {
        return num.value = 0;
    }
    return num.value -= 1;
}
</script>

<style scoped>
.incdec {
    font-family: "sf_Text";
    font-weight: 600;
}
</style>