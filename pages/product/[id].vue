<template>
    <div class="pt-5">
        <div class="flex justify-between px-7 items-center">
            <NuxtLink :to="`/`">
                <Icon color="rgba(0, 0, 0, 1)" size="24px" name="material-symbols:arrow-back-ios-rounded" />
            </NuxtLink>
            <button>
                <Icon name="ic:baseline-favorite-border" size="20px" />
            </button>
        </div>
        <Swiper :height="300" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
            :effect="'creative'" :autoplay="{
                delay: 8000,
                disableOnInteraction: true
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
</template>

<script setup>
const slides = ref(Array.from({ length: 10 }, () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    // Figure out contrast color for font
    const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

    return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
}))


const props = defineProps({
    data: {
        type: String,
    }
});
definePageMeta({
    layout: false,
})
</script>
<style scoped>
.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: 20vh;
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
}
</style>