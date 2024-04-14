<template>
  <div class="flex flex-col items-center">
    <!-- Dorpdown Button -->
    <div
      class="flex flex-row cursor-pointer border border-primary-grey rounded-md items-center justify-center"
      style="
        padding-left: 14px;
        padding-right: 14px;
        padding-top: 10px;
        padding-bottom: 10px;
      "
      @click="toggleDropdown"
    >
      <p>My Tasks</p>
      <svgIcon
        v-if="isOpen"
        class="w-5 h-5 ml-2 transform rotate-180 transition-transform duration-300 text-gray-500 hover:text-gray-700"
        size="24"
        path="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        stroke="none"
        fill="primary-dark-grey"
        viewBox="0 0 24 24"
      />
      <svgIcon
        v-else
        class="w-5 h-5 ml-2 transform transition-transform duration-300 text-gray-500 hover:text-gray-700"
        size="24"
        path="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        stroke="none"
        fill="primary-dark-grey"
        viewBox="0 0 24 24"
      />
    </div>
    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="bg-white border border-gray-300 shadow-lg rounded-md overflow-hidden"
      style="margin-top: 7px; width: 288px"
    >
      <div class="dropdown-item py-2 px-4 border-b cursor-pointer">
        Option 2
      </div>
      <div class="dropdown-item py-2 px-4 border-b cursor-pointer">
        Option 1
      </div>
      <div class="dropdown-item py-2 px-4 cursor-pointer">Option 3</div>
    </div>
  </div>
</template>

<script>
import svgIcon from "./svg.vue";

export default {
  components: {
    svgIcon,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
