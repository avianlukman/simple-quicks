<template>
  <div v-if="chat.status === 'unread'" class="flex items-center">
    <div class="flex-1 border-t border-indicator-red"></div>
    <div class="font-lato font-base mx-4 text-indicator-red">New Messages</div>
    <div class="flex-1 border-t border-indicator-red"></div>
  </div>
  <div
    class="flex flex-col space-y-1"
    :class="[chat.sender === 'You' ? 'items-end' : 'items-start']"
  >
    <!-- Name -->
    <p
      class="font-lato font-bold text-base"
      :class="[
        chat.sender === 'You'
          ? 'text-indicator-purple'
          : 'text-indicator-yellow',
      ]"
    >
      {{ chat.sender }}
    </p>
    <!-- Chat Baloon -->
    <div
      class="flex flex-row space-x-2 rounded-lg bg-indicator-red items-start"
      :class="[
        chat.sender === 'You' ? 'bg-chat-light-purple' : 'bg-chat-light-yellow',
      ]"
      style="padding: 10px"
    >
      <div class="flex flex-col space-y-3">
        <p class="max-w-xl">{{ chat.text }}</p>
        <p>{{ chat.date }}</p>
      </div>
      <!-- Option icon -->
      <svgIcon
        class="cursor-pointer mt-2"
        size="24"
        path="M10.5 1.75C10.5 2.7125 11.2875 3.5 12.25 3.5C13.2125 3.5 14 2.7125 14 1.75C14 0.7875 13.2125 -3.44227e-08 12.25 -7.64949e-08C11.2875 -1.18567e-07 10.5 0.7875 10.5 1.75ZM8.75 1.75C8.75 0.7875 7.9625 -2.63908e-07 7 -3.0598e-07C6.0375 -3.48052e-07 5.25 0.7875 5.25 1.75C5.25 2.7125 6.0375 3.5 7 3.5C7.9625 3.5 8.75 2.7125 8.75 1.75ZM1.75 -5.35465e-07C2.7125 -4.93392e-07 3.5 0.7875 3.5 1.75C3.5 2.7125 2.7125 3.5 1.75 3.5C0.7875 3.5 -1.18567e-07 2.7125 -7.64949e-08 1.75C-3.44227e-08 0.787499 0.7875 -5.77537e-07 1.75 -5.35465e-07Z"
        stroke="none"
        fill="primary-dark-grey"
        viewBox="0 0 24 24"
      />
    </div>
  </div>
</template>
<script>
import svgIcon from "./svg.vue";
export default {
  components: {
    svgIcon,
  },
  props: {
    chat: {
      type: Object,
      required: true,
      default: () => ({
        sender: "",
        date: "",
        text: "",
        status: "",
      }),
    },
  },
};
</script>
