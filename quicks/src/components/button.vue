<template>
  <div
    class="flex flex-row items-center bg-primary px-4 py-2 cursor-pointer rounded"
  >
    <p class="text-white">{{ buttonTitle }}</p>
  </div>
</template>
<script>
export default {
  props: {
    buttonTitle: {
      type: String,
      required: true,
    },
  },
};
</script>
