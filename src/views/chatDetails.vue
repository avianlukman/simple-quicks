<template>
  <!-- Header -->
  <div
    class="absolute top-0 left-5 right-5 flex flex-row items-center border-b bg-white border-primary-grey px-8 py-4 rounded-tl rounded-tr"
  >
    <!-- Back Icon -->
    <svgIcon
      @click="closeChatDetails"
      class="items-center justify-center cursor-pointer"
      style="height: 18px; width: 18px"
      size="16"
      path="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
      stroke="none"
      fill="primary-dark-grey"
      viewBox="-1 -1 24 24"
    />
    <!-- Subject & Participants -->
    <div class="flex flex-col space-y-2 ml-4 mr-auto">
      <p v-if="chatData" class="font-lato font-bold text-base text-primary">
        {{ chatData.subject }}
      </p>
      <p v-else>Error Loading</p>
      <p
        v-if="chatData"
        class="font-lato font-light text-base text-primary-dark-grey"
      >
        {{ chatData.participants }} Participants
      </p>
      <p v-else>Error Loading</p>
    </div>
    <!-- Close Icon -->
    <svgIcon
      @click="closeChatDetails"
      class="items-center justify-center cursor-pointer"
      style="height: 18px; width: 18px"
      size="16"
      path="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
      stroke="none"
      fill="primary-dark-grey"
      viewBox="-1 -1 24 24"
    />
  </div>
  <!-- Content -->
  <div
    v-if="chatData"
    class="flex flex-col w-full max-h-full space-y-2 px-8 bg-white overflow-y-auto pb-20"
    style="padding-top: 75px"
  >
    <ChatBaloon
      v-for="(chat, index) in this.chatData.chat"
      :chat="chat"
      :key="index"
    />
  </div>
  <div v-else>
    <p>Error Loading</p>
  </div>
  <!-- New Chat -->
  <div
    class="absolute bottom-4 left-5 right-5 flex flex-row bg-white space-x-3 px-8 py-3"
  >
    <input
      type="text"
      v-model="textInput"
      class="mt-1 block w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      placeholder="Type your new message"
    />
    <PrimaryButton buttonTitle="Send" @click="sendNewMessage()"></PrimaryButton>
  </div>
</template>
<script>
import svgIcon from "../components/svg.vue";
import ChatBaloon from "../components/chatBaloon.vue";
import PrimaryButton from "../components/button.vue";

export default {
  components: {
    svgIcon,
    ChatBaloon,
    PrimaryButton,
  },
  props: {
    chatData: {
      type: Object,
      required: true,
      default: () => ({
        subject: "",
        participants: "",
        chat: [],
      }),
    },
  },
  data() {
    return {
      textInput: "",
    };
  },
  methods: {
    closeChatDetails() {
      this.$emit("closeChatDetails");
    },
    sendNewMessage() {
      let newMessage = {
        sender: "You",
        date: "Now",
        text: this.textInput,
        status: "read",
      };
      this.chatData.chat.push(newMessage);
      this.textInput = "";
    },
  },
};
</script>
