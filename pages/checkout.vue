<template>
    <div class="m-0 py-10 bg-[#F5F5F5]">
        <PageHead text="Checkout" />
        <div class="mx-8">
            <h1 class="py-[35px] text-[34px] title">Payment</h1>
            <div>
                <p class="text-[17px] title">Payment methods</p>
                <div class="rounded-[30px] bg-[#fff] p-4 my-4 flex flex-col">
                    <span>
                        <input type="radio" v-model="selectedPage" id="card" name="payment_type" value="card">
                        <label for="card">
                            <Icon name="bi:credit-card-2-front-fill" class="bg-[#F47B0A] rounded-[10px] p-2" size="45px"
                                color="white" />
                            <p class="payment_type">Card</p>
                        </label>
                    </span>
                    <span>
                        <input type="radio" v-model="selectedPage" id="cash" name="payment_type" value="cash">
                        <label for="cash">
                            <Icon name="iconoir:hand-cash" class="bg-[#1c853a] rounded-[10px] p-2" size="45px"
                                color="white" />
                            <p class="payment_type">Cash</p>
                        </label>
                    </span>
                    <span>
                        <input type="radio" v-model="selectedPage" id="payme" name="payment_type" value="payme">
                        <label for="payme">
                            <img src="/images/payme.png" class="bg-[#00CCCC] rounded-[10px] p-2 w-11" />
                            <p class="payment_type">Payme</p>
                        </label>
                    </span>
                    <span>
                        <input type="radio" v-model="selectedPage" id="click" name="payment_type" value="click">
                        <label for="click">
                            <img src="/images/click.png" class="bg-[#343643] rounded-[10px] p-2 w-11" />
                            <p class="payment_type">Click</p>
                        </label>
                    </span>
                    <span>
                        <input type="radio" v-model="selectedPage" id="uzum" name="payment_type" value="uzum">
                        <label for="uzum">
                            <img src="/images/uzum.png" class="bg-[#6F00FF] rounded-[10px] p-2 w-11" />
                            <p class="payment_type">Uzum bank</p>
                        </label>
                    </span>
                </div>
            </div>
            <div class="flex justify-between btn my-10">
                <p  class="text-[17px]">Total:</p>
                <p class="text-[22px] title">230000 so'm</p>
            </div>
            <div class="flex justify-center ">
                <NuxtLink :to="getPageLink" class="text-[#F6F6F9] bg-[#fa4a0c] w-[100%]  text-center btn text-[17px] p-4 py-5  rounded-[30px]
        ">Proceed to payment</NuxtLink>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectedPage: 'card',
        };
    },
    computed: {
        getPageLink() {

            const pageRoutes = {
                click: 'click',
                uzum: 'uzum',
                payme: 'payme',
                cash: 'cash',
                card: 'card'
            };
            return {
                name: pageRoutes[this.selectedPage],
            };
        },
    },
};
</script>
<script setup>

definePageMeta({
    layout: false
})

</script>

<style scoped>
input {
    accent-color: #fa4a0c;
}

span {
    align-items: center;
    display: flex;
    gap: 14px;
    padding: 15px 0;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(0, 0, 0, 0.135);
}

span:last-child {
    border-bottom: 0;
}

label {
    align-items: center;
    display: flex;
    gap: 14px;
}

.title {
    font-family: "sf_Text";
    font-weight: bolder;
}

.payment_type {
    font-family: "sf_Text";
    font-weight: 400;
    font-size: 17px;
}

.btn {
    font-family: "sf_Text";
    font-weight: 400;
}
</style>