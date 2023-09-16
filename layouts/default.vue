<template>
    <div>
        <div class="flex items-center justify-center sticky top-0 z-10 bg-[#fff] p-4">
            <img src="/images/logo.png" alt="logo" class="w-[55px]" />
        </div>
        <slot />
        <div class="fixed w-[100%]  bottom-0  z-10 bg-[#F2F2F2] flex items-center justify-between p-4">
            <NuxtLink to="/">
                <Icon size="30px" name="material-symbols:home-outline" color="#9A9A9D" />
            </NuxtLink>

            <NuxtLink to="/history">
                <Icon size="30px" name="akar-icons:history" color="#9A9A9D" />
            </NuxtLink>
            <NuxtLink to="/cart">
                <Icon size="30px" name="material-symbols:shopping-cart-outline" color="#9A9A9D" />
            </NuxtLink>
            <NuxtLink to="/favorite">
                <Icon size="30px" name="ic:baseline-favorite-border" color="#9A9A9D" />
            </NuxtLink>
            

        </div>
    </div>
</template>