<template>
  <div class="flex items-center z-10 sticky top-14 w-[100%] bg-[#Fff] py-5 px-4">
    <button @click="scrollLeft">
      <Icon color="black" size="24px" name="ic:baseline-keyboard-arrow-left" />
    </button>
    <ul class="scrollbar-hidden overflow-x-auto ul-list font-[400] text-[17px] flex" ref="scrollContainer">
      <li :class="{ active: activeSection === section.id }" v-for="section in sections" :key="section.id"
        class="text-[#9A9A9D] py-2 px-1 mx-3">
        <router-link :to="`#${section.id}`">{{ section.label
        }}</router-link>
      </li>
    </ul>
    <button @click="scrollRight">
      <Icon color="black" size="24px" name="ic:baseline-keyboard-arrow-right" />
    </button>
  </div>
</template>

<script setup>

const scrollContainer = ref(null);
const scrollStep = 300;
const activeSection = ref(null);

const sections = [
  { id: 'foods', label: 'Foods' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'snacks', label: 'Snacks' },
  { id: 'sweets', label: 'Sweets' },
  { id: 'sauces', label: 'Sauces' },
];

const scrollLeft = () => {
  const currentScroll = scrollContainer.value.scrollLeft;
  scrollContainer.value.scrollTo({
    left: currentScroll - scrollStep,
    behavior: 'smooth',
  });
};

const scrollRight = () => {
  const currentScroll = scrollContainer.value.scrollLeft;
  scrollContainer.value.scrollTo({
    left: currentScroll + scrollStep,
    behavior: 'smooth',
  });
};

</script>

<style scoped>
.ul-list {
  font-family: 'sf_Text';
  white-space: nowrap;
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.active {
  border-bottom: 2px solid #fa4a0c;
}
</style>


