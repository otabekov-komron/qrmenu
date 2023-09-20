<template>
  <div class="flex items-center z-10 sticky top-14 w-[100%] bg-[#Fff] py-5 px-4">
    <button @click="scrollLeft">
      <Icon color="black" size="24px" name="ic:baseline-keyboard-arrow-left" />
    </button>
    <ul
      class="scrollbar-hidden overflow-x-auto ul-list font-[400] text-[17px] flex"
      ref="scrollContainer"
      @scroll="handleScroll"
    >
      <li
        v-for="section in sections"
        :key="section.id"
        class="text-[#9A9A9D] py-2 px-1 mx-3"
        :class="{ active: activeSection === section.id }"
      >
        <router-link :to="`#${section.id}`">{{ section.label }}</router-link>
      </li>
    </ul>
    <button @click="scrollRight">
      <Icon color="black" size="24px" name="ic:baseline-keyboard-arrow-right" />
    </button>
  </div>
</template>

<script>

export default {
  setup() {
    const activeSection = ref(null);
    const scrollContainer = ref(null);
    const scrollStep = 300; 

    const sections = [
      { id: 'foods', label: 'Foods' },
      { id: 'drinks', label: 'Drinks' },
      { id: 'snacks', label: 'Snacks' },
      { id: 'sweets', label: 'Sweets' },
      { id: 'sauces', label: 'Sauces' },
    ];

    const handleScroll = () => {
  const containerRect = scrollContainer.value.getBoundingClientRect();

  for (const section of sections) {
    const sectionElement = document.getElementById(section.id);

    if (sectionElement) {
      const rect = sectionElement.getBoundingClientRect();

      if (
        rect.top >= containerRect.top &&
        rect.bottom <= containerRect.bottom
      ) {
        activeSection.value = section.id;
        break;
      }
    }
  }
};

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

    onMounted(() => {
      if (process.client) {
        window.addEventListener('scroll', handleScroll);
      }
    });

    onBeforeUnmount(() => {
      if (process.client) {
        window.removeEventListener('scroll', handleScroll);
      }
    });

    return {
      activeSection,
      scrollContainer,
      scrollLeft,
      scrollRight,
      sections,
    };
  },
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
  border-bottom: 3px solid #fa4a0c;
}
</style>

