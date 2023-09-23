<template>
  <div class="flex items-center z-10 sticky top-14 w-[100%] bg-[#Fff] py-5 px-4">
    <button @click="scrollLeft">
      <Icon color="black" size="24px" name="ic:baseline-keyboard-arrow-left" />
    </button>
    <ul
      ref="scrollContainer" class="z-10 sticky top-14 w-[100%] bg-[#Fff] scrollbar-hidden overflow-x-auto ul-list font-[400] text-[17px] flex "
    >
      <!-- Navigation links -->
      <li class="text-[#9A9A9D] py-2 px-4">
        <router-link to="#foods" :class="{ 'active': activeSection === 'foods' }">Foods</router-link>
      </li>
      <li class="text-[#9A9A9D] py-2 px-4">
        <router-link to="#drinks" :class="{ 'active': activeSection === 'drinks' }">Drinks</router-link>
      </li>
      <li class="text-[#9A9A9D] py-2 px-4">
        <router-link to="#snacks" :class="{ 'active': activeSection === 'snacks' }">Snacks</router-link>
      </li>
      <li class="text-[#9A9A9D] py-2 px-4">
        <router-link to="#sweets" :class="{ 'active': activeSection === 'sweets' }">Sweets</router-link>
      </li>
      <li class="text-[#9A9A9D] py-2 px-4">
        <router-link to="#sauces" :class="{ 'active': activeSection === 'sauces' }">Sauces</router-link>
      </li>

      <!-- Repeat for other sections -->
    </ul>
    <button @click="scrollRight">
      <Icon color="black" size="24px" name="ic:baseline-keyboard-arrow-right" />
    </button>
  </div>
</template>

<script setup>
const activeSection = ref(null);
const scrollContainer = ref(null); // Define scrollContainer ref

const currentActiveSection = ref(null);
const scrollStep = 300;
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

const isSectionActive = (sectionId) => {
  const currentRoute = useRoute();

  // Check if the current route matches the section's route
  if (currentRoute.hash === `#${sectionId}`) {
    return true;
  }

  // Check if the section is currently in view based on scroll position
  return currentActiveSection.value === sectionId;
};

const setCurrentActive = (sectionId) => {
  currentActiveSection.value = sectionId;
};

const handleScroll = () => {
  const sections = ['foods', 'drinks', 'snacks', 'sweets', 'sauces'];

  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        activeSection.value = sectionId;
        break;
      }
    }
  }
};

// Add an event listener to handle scrolling
onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll);
  }
});

// Remove the event listener when the component is unmounted
onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll);
  }
});
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
  padding-bottom: 5px;
}
</style>
