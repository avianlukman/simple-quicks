<template>
  <div
    class="flex h-full w-full flex-col bg-white py-6 px-8 items-center rounded"
  >
    <!-- Header -->
    <div
      class="flex flex-row items-center justify-between border-b border-primary-grey"
    >
      <!-- Back Icon -->
      <!-- Subject & Participants -->
      <div class="flex flex-col w-full space-y-2">
        <p class="font-lato font-bold text-base text-primary">Subject</p>
        <p class="font-lato font-light text-base text-primary-dark-grey">
          Participants
        </p>
      </div>
      <!-- Close Icon -->
    </div>
    <!-- Content -->
  </div>
</template>
<script>
import svgIcon from "../components/svg.vue";
import ChatBaloon from "../components/chatBaloon.vue";

export default {
  components: {
    svgIcon,
    ChatBaloon,
  },
};
</script>
