<template>
    <div class="m-0  min-h-screen py-10 bg-[#F5F5F5]">

        <PageHead text="Cart" />

        <div class="flex gap-5 flex-col items-center  mx-7 mt-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <div class="flex fixed bottom-0 bg-inherit pt-2 pb-2 w-full justify-center">
            <NuxtLink to="/checkout" class="text-[#F6F6F9] bg-[#fa4a0c] w-[90%]  text-center btn text-[17px] p-4 py-5  rounded-[30px]
        ">
                Complete order
            </NuxtLink>
        </div>
        <!-- <div class="flex flex-col gap-3 py-40 items-center justify-center text-center">
            <Icon name="carbon:shopping-cart-clear" size="108px" color="rgba(199, 199, 199, 1)" />
            <h1 class="history text-[28px]'">No orders yet</h1>
            <p class="opacity-[0.57] w-[60%] font-[100] history text-17px">Hit the orange button down below to Create an
                order</p>
        </div>
        <div class="flex sticky bottom-0 justify-center px-8">
            <Btn class="w-[100%]" title="Start ordering" />
        </div> -->
    </div>
    <div>

    </div>
</template>


<script setup>

definePageMeta({
    layout: false
})
</script>

<style  scoped>
.btn {
    font-family: "sf_Text";
    font-weight: 400;
}

.history {
    font-family: "sf_Text";
    font-weight: 600;

}

.swipe {
    font-family: "sf_Text";
    font-weight: 400;
}
</style>