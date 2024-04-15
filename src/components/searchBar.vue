<template>
  <div
    class="flex flex-row w-full py-2 justify-between items-center rounded-md border border-primary-grey"
  >
    <input
      type="text"
      v-model="searchQuery"
      @input="handleInput"
      placeholder="Search"
      class="focus:outline-none ml-12 w-full"
    />
    <svgIcon
      class="w-5 h-5 cursor-pointer text-gray-500 hover:text-gray-700 mr-12"
      size="24"
      path="M 9 2 C 5.1458495 2 2 5.1458524 2 9 C 2 12.854148 5.1458495 16 9 16 C 10.747999 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747997 16 9 C 16 5.1458524 12.854151 2 9 2 z M 9 4 C 11.773271 4 14 6.2267307 14 9 C 14 11.773269 11.773271 14 9 14 C 6.226729 14 4 11.773269 4 9 C 4 6.2267307 6.226729 4 9 4 z"
      stroke="none"
      fill="currentColor"
      viewBox="0 0 24 24"
    />
  </div>
</template>

<script>
import svgIcon from "./svg.vue";

export default {
  components: { svgIcon },
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleInput() {
      // Handle input logic here
    },
  },
};
</script>
