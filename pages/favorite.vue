<template>
    <div class="m-0 h-[100vh] py-10 bg-[#F5F5F5]">
        <PageHead text="Favorites" />
        <div>
            <div class="py-[20vh]">
                <ErrorItem icon="tabler:heart-x" sizeIcon="100px" text="No favorites yet" desc="Hit the orange button down below to Create an
                order" />   
            </div>
            <div class="flex fixed w-full bottom-10 justify-center px-8 ">
                <Btn class="w-[100%]" title="Start ordering" />
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: false
})
</script>

<style  scoped>
.history {
    font-family: "sf_Text";
    font-weight: 600;

}
</style>