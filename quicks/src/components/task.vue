<template>
  <div class="flex flex-col py-5">
    <!-- Task Header -->
    <div
      class="flex flex-row w-full justify-between"
      style="padding-right: 25px"
    >
      <!-- Check Box & Task Name  -->
      <div class="flex flex-row space-x-5 items-center">
        <!-- Check Box -->
        <svgIcon
          class="w-5 h-5 text-gray-500 hover:text-gray-700 mt-2 cursor-pointer"
          size="24"
          path="M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM16 16V2H2V16H16Z"
          stroke="none"
          fill="primary-grey"
          viewBox="0 0 24 24"
        />
        <!-- Task Name -->
        <p class="font-lato font-bold text-base text-primary-dark-grey">
          Task Name
        </p>
      </div>
      <!-- Days Count, Date, Toggle, Action -->
      <div class="flex flex-row space-x-3 items-center">
        <!-- Days Count -->
        <p class="font-lato font-light text-sm text-indicator-red">
          2 Days left
        </p>
        <!-- Date -->
        <p class="font-lato font-light text-sm text-primary-dark-grey">Date</p>
        <!-- Dropdown icon -->
        <svgIcon
          v-if="isOpen"
          @click="toggleDropdown"
          class="w-5 h-5 ml-2 transform rotate-180 transition-transform duration-300 text-gray-500 hover:text-gray-700"
          size="24"
          path="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          stroke="none"
          fill="primary-dark-grey"
          viewBox="0 0 24 24"
        />
        <svgIcon
          v-else
          @click="toggleDropdown"
          class="w-5 h-5 ml-2 transform transition-transform duration-300 text-gray-500 hover:text-gray-700"
          size="24"
          path="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          stroke="none"
          fill="primary-dark-grey"
          viewBox="0 0 24 24"
        />
        <svgIcon
          class="w-5 h-5 text-gray-500 hover:text-gray-700 mt-5 cursor-pointer"
          size="24"
          path="M10.5 1.75C10.5 2.7125 11.2875 3.5 12.25 3.5C13.2125 3.5 14 2.7125 14 1.75C14 0.7875 13.2125 -3.44227e-08 12.25 -7.64949e-08C11.2875 -1.18567e-07 10.5 0.7875 10.5 1.75ZM8.75 1.75C8.75 0.7875 7.9625 -2.63908e-07 7 -3.0598e-07C6.0375 -3.48052e-07 5.25 0.7875 5.25 1.75C5.25 2.7125 6.0375 3.5 7 3.5C7.9625 3.5 8.75 2.7125 8.75 1.75ZM1.75 -5.35465e-07C2.7125 -4.93392e-07 3.5 0.7875 3.5 1.75C3.5 2.7125 2.7125 3.5 1.75 3.5C0.7875 3.5 -1.18567e-07 2.7125 -7.64949e-08 1.75C-3.44227e-08 0.787499 0.7875 -5.77537e-07 1.75 -5.35465e-07Z"
          stroke="none"
          fill="primary-dark-grey"
          viewBox="0 0 24 24"
        />
      </div>
    </div>
    <!-- Task Content -->
    <div class="flex flex-col pl-10 pt-3 space-y-3">
      <!-- Date Picker -->
      <div class="flex flex-row items-center" style="gap: 18px">
        <!-- Icon -->
        <svgIcon
          size="20"
          path="M8.99187 0.666672C4.39187 0.666672 0.66687 4.40001 0.66687 9.00001C0.66687 13.6 4.39187 17.3333 8.99187 17.3333C13.6002 17.3333 17.3335 13.6 17.3335 9.00001C17.3335 4.40001 13.6002 0.666672 8.99187 0.666672ZM9.00037 15.6667C5.31703 15.6667 2.3337 12.6833 2.3337 9C2.3337 5.31667 5.31703 2.33334 9.00037 2.33334C12.6837 2.33334 15.667 5.31667 15.667 9C15.667 12.6833 12.6837 15.6667 9.00037 15.6667ZM8.16687 4.83334H9.41687V9.20834L13.1669 11.4333L12.5419 12.4583L8.16687 9.83334V4.83334Z"
          stroke="none"
          fill="primary-dark-grey"
          viewBox="0 0 24 24"
        />
        <!-- Picker -->
      </div>
      <!-- Description -->
      <div class="flex flex-row items-leading" style="gap: 18px">
        <!-- Icon -->
        <svgIcon
          class="mt-1"
          size="20"
          path="M12.2165 0C12.0082 0 11.7915 0.0833333 11.6332 0.241667L10.1082 1.76667L13.2332 4.89167L14.7582 3.36667C15.0832 3.04167 15.0832 2.51667 14.7582 2.19167L12.8082 0.241667C12.6415 0.075 12.4332 0 12.2165 0ZM9.21667 5.01667L9.98333 5.78333L2.43333 13.3333H1.66667V12.5667L9.21667 5.01667ZM0 11.875L9.21667 2.65833L12.3417 5.78333L3.125 15H0V11.875Z"
          stroke="none"
          fill="primary-dark-grey"
          viewBox="0 0 24 24"
        />
        <!-- Text Field -->
        <TextField></TextField>
      </div>
    </div>
  </div>
</template>
<script>
import svgIcon from "./svg.vue";
import TextField from "./textField.vue";
export default {
  components: {
    svgIcon,
    TextField,
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
