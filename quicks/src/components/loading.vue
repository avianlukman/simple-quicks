<template>
  <div
    v-if="isLoading"
    class="absolute inset-0 bg-gray-100 flex items-center justify-center"
  >
    <div class="flex flex-col items-center">
      <svg
        class="animate-spin h-12 w-12 text-blue-500 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-100"
          stroke="currentColor"
          stroke-width="4"
          r="10"
          d="M2,12 a10,10 0 0,1 20,0"
        ></path>
      </svg>
      <p class="text-gray-600">{{ loadingText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    loadingText: {
      type: String,
      required: true,
    },
  },
};
</script>
