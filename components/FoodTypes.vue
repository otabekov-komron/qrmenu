<template>
    <ul
        class="z-10 sticky top-14 w-[100%] bg-[#Fff] py-5 ps-10 scrollbar-hidden overflow-x-auto ul-list font-[400] text-[17px] flex w-[100%] ">
        <li class="text-[#9A9A9D] py-2 px-4 ">
            <router-link to="#foods" :class="{ 'active': activeSection === 'foods' }" >Foods</router-link>
        </li>
        <li class="text-[#9A9A9D] py-2 px-4 ">
            <router-link to="#drinks" :class="{ 'active': activeSection === 'drinks' }">Drinks</router-link>
        </li>
        <li class="text-[#9A9A9D] py-2 px-4 ">
            <router-link to="#snacks" :class="{ 'active': activeSection === 'snacks' }">Snacks</router-link>
        </li>
        <li class="text-[#9A9A9D] py-2 px-4  " >
            <router-link to="#sweets" :class="{ 'active': activeSection === 'sweets' }">Sweets</router-link>
        </li>
        <li class="text-[#9A9A9D] py-2 px-4 ">
            <router-link to="#sauces" :class="{ 'active': activeSection === 'sauces' }">Sauces</router-link>
        </li>
    </ul>
</template>
<script>
export default {
  data() {
    return {
      activeSection: null,
    };
  },
  created() {
    // Check if we are running on the client side before adding the event listener
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed() {
    // Check if we are running on the client side before removing the event listener
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      // Check if we are running on the client side before accessing the window object
      if (process.client) {
        // Determine which section is currently in the viewport based on scroll position
        const scrollPosition = window.scrollY;
        const sections = ['foods', 'snacks', 'drinks', 'sweets', 'sauces'];

        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
              this.activeSection = sectionId;
              break;
            }
          }
        }
      }
    },
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
