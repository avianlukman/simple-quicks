<template>
  <textarea
    v-model="inputValue"
    class="w-full rounded-md resize-none focus:outline-none font-lato font-light text-base text-primary-dark-grey"
    placeholder="Enter text..."
    :style="{
      maxHeight: maxLines ? `calc(${lineHeight} * ${maxLines})` : 'none',
    }"
  ></textarea>
  <!-- <div v-if="inputValue" class="absolute inset-y-0 right-0 flex items-center pr-3">
      <button
        class="text-gray-500 hover:text-gray-700 focus:outline-none"
        @click="clearInput"
      >
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div> -->
</template>

<script>
export default {
  props: {
    maxLines: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      inputValue: "",
      lineHeight: "1.5rem", // Adjust this value based on your line height
    };
  },
  methods: {
    clearInput() {
      this.inputValue = "";
    },
  },
};
</script>

<style scoped>
textarea {
  overflow-y: auto;
}
</style>
