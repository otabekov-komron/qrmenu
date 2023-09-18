<template>
    <div class="">
        <div class="flex justify-between sticky top-0 z-10 bg-[#f6f6f6] py-4 px-4 items-center">
            <NuxtLink to="/">
                <Icon color="rgba(0, 0, 0, 1)" size="24px" name="material-symbols:arrow-back-ios-rounded" />
            </NuxtLink>
            <span @click="toggleLike" class="like-button" :class="{ 'clicked': liked }">
                <Icon v-if="liked" name="ic:baseline-favorite-border" size="28px" />
                <Icon v-else name="ic:baseline-favorite" color="#FA4A0C" size="28px" />
            </span>
        </div>
        <div class="pb-4">
            <Swiper :height="300" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
                :effect="'creative'" :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false
                }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1]
    },
    next: {
        translate: ['100%', 0, 0]
    }
}">
                <SwiperSlide v-for="(slide, idx) in slides" :key="idx"
                    :style="`background-color: ${slide.bg}; color: ${slide.color}`">
                    {{ idx }}
                </SwiperSlide>

                <!-- useSwiper() within a swiper instance -->
                <SwiperControls />
            </Swiper>
        </div>
        <div>
            <p class="text-black text-[28px] text-center font-normal">Veggie tomato mix</p>
            <p class="text-[#FA4A0C] text-[22px] text-center font-normal">17,000 so'm</p>
        </div>
        <div class="my-10 mx-2">
            <p class="text-[18px] uppercase">Ingredients:</p>
            <div class="my-5 text-[17px] text-justify ingredients ">San Marzano tomatoes, Olive oil, Veggies, Tomato paste,
                Vegetable broth, Garlic, Seasonings</div>
        </div>
        <div class="my-10 mb-[100px] mx-2">
            <p class="text-[18px] uppercase">Ingredients:</p>
            <div class="my-5 text-[17px] text-justify ingredients ">San Marzano tomatoes, Olive oil, Veggies, Tomato paste,
                Vegetable broth, Garlic, Seasonings</div>
        </div>
        <div class="flex w-[100%] justify-center px-8 py-4 fixed bottom-0 bg-[#f6f6f6] border-none">
            <button class="text-[#F6F6F9]  w-[100%] text-center button text-[17px] p-4 py-5 rounded-[30px]"
                :class="{ 'bg-[#f4f4f4]': isDisabled }" @click="addToCart" :disabled="isDisabled">
                {{ buttonText }}
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            buttonText: "Add to cart",
            isDisabled: false,
        };
    },
    methods: {
        addToCart() {
            // Perform any necessary logic, e.g., adding the product to the cart

            // Update the button text
            this.buttonText = "Product has been added";

            // Disable the button
            this.isDisabled = true;
        },
    },
};
</script>


<script setup>
const liked = ref(true);
const toggleLike = () => {
    liked.value = !liked.value
}
const slides = ref(Array.from({ length: 10 }, () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

    return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
}))

definePageMeta({
    layout: false,
});

</script>
<style scoped>
.gray-button {
    background-color: #ccc;
    /* Gray background color */
    color: #000;
    /* Text color */
}

.like-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.like-button.clicked {
    transform: scale(0.9);
    /* Shrink the button when clicked */
}

.like-button:hover {
    transform: scale(1.1);
}

.button {
    font-family: "sf_Text";
    font-weight: 400;
    background: rgba(250, 74, 12, 1);
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: 200px;
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
}

.ingredients {
    font-family: 'sf_Text';
}
</style>