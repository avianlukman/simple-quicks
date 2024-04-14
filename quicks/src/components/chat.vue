<template>
  <div
    class="flex flex-row border-b border-primary-grey space-x-4"
    style="padding-top: 22px; padding-bottom: 22px"
  >
    <!-- Multiple Participants Icon -->
    <div
      v-if="chatParticipants > 2"
      class="items-center justify-center"
      style="width: 51px"
    >
      <div class="relative">
        <div
          class="absolute inset-0 flex items-center justify-center rounded-full p-2 bg-primary-light-grey"
          style="width: 34px; height: 34px"
        >
          <svgIcon
            class="items-center justify-center"
            style="height: 18px; width: 18px"
            size="12"
            path="M10.5673 0C7.78868 0 5.53809 2.25058 5.53809 5.02924C5.53809 7.80789 7.78868 10.0585 10.5673 10.0585C13.346 10.0585 15.5966 7.80789 15.5966 5.02924C15.5966 2.25058 13.346 0 10.5673 0ZM13.0819 5.02927C13.0819 3.64623 11.9503 2.51465 10.5673 2.51465C9.18423 2.51465 8.05265 3.64623 8.05265 5.02927C8.05265 6.41231 9.18423 7.54389 10.5673 7.54389C11.9503 7.54389 13.0819 6.41231 13.0819 5.02927ZM18.1111 17.6023C17.8596 16.7096 13.9619 15.0877 10.5672 15.0877C7.18504 15.0877 3.31253 16.6971 3.02335 17.6023H18.1111ZM0.508789 17.6023C0.508789 14.2579 7.21025 12.5731 10.5673 12.5731C13.9243 12.5731 20.6257 14.2579 20.6257 17.6023V20.1169H0.508789V17.6023Z"
            stroke="none"
            fill="primary-dark-grey"
            viewBox="0 0 24 24"
          />
        </div>
        <div
          class="absolute transform translate-x-1/2 items-center rounded-full p-2 bg-primary"
          style="width: 34px; height: 34px"
        >
          <svgIcon
            class="items-center justify-center"
            style="height: 18px; width: 18px"
            size="12"
            path="M10.5673 0C7.78868 0 5.53809 2.25058 5.53809 5.02924C5.53809 7.80789 7.78868 10.0585 10.5673 10.0585C13.346 10.0585 15.5966 7.80789 15.5966 5.02924C15.5966 2.25058 13.346 0 10.5673 0ZM13.0819 5.02927C13.0819 3.64623 11.9503 2.51465 10.5673 2.51465C9.18423 2.51465 8.05265 3.64623 8.05265 5.02927C8.05265 6.41231 9.18423 7.54389 10.5673 7.54389C11.9503 7.54389 13.0819 6.41231 13.0819 5.02927ZM18.1111 17.6023C17.8596 16.7096 13.9619 15.0877 10.5672 15.0877C7.18504 15.0877 3.31253 16.6971 3.02335 17.6023H18.1111ZM0.508789 17.6023C0.508789 14.2579 7.21025 12.5731 10.5673 12.5731C13.9243 12.5731 20.6257 14.2579 20.6257 17.6023V20.1169H0.508789V17.6023Z"
            stroke="none"
            fill="white"
            viewBox="-1 -1 24 24"
          />
        </div>
      </div>
    </div>
    <!-- Single Participants Icon -->
    <div
      v-if="chatParticipants < 3"
      class="items-center justify-center"
      style="width: 51px"
    >
      <div class="relative">
        <div
          class="absolute items-center align-center rounded-full p-2 bg-primary"
          style="width: 34px; height: 34px"
        >
          <p class="font-lato font-bold text-base text-white text-center">
            {{ senderFirstLetter }}
          </p>
        </div>
      </div>
    </div>
    <!-- Details -->
    <div class="flex flex-col space-y-2">
      <!-- Heading & Date -->
      <div class="flex flex-row space-x-4">
        <!-- Heading -->
        <p class="font-lato font-bold text-base text-primary">
          {{ chatSubject }}
        </p>
        <!-- Date -->
        <p class="font-lato font-light text-base text-primary-dark-grey">
          {{ getLastChatDate }}
        </p>
      </div>
      <!-- Name & Last Chat -->
      <div class="flex flex-col space-y-1">
        <p class="font-lato font-bold text-sm text-primary-dark-grey">
          {{ getLastChatSender }}
        </p>
        <p class="font-lato font-light text-sm text-primary-dark-grey">
          {{ getLastChatText }}
        </p>
      </div>
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
    // props validation with default value
    chatData: {
      type: Object,
      default: () => ({
        subject: "",
        participants: "",
        chat: [],
      }),
    },
  },
  data() {
    return {
      chatSubject: this.chatData.subject,
      chatParticipants: this.chatData.participants,
      chatContent: this.chatData.chat,
    };
  },
  computed: {
    filteredSenders() {
      // Filter sender names that are not "you"
      return this.chatContent.filter((chat) => chat.sender !== "you");
    },
    senderFirstLetter() {
      if (this.filteredSenders.length > 0) {
        const sender =
          this.filteredSenders[this.filteredSenders.length - 1].sender;
        return sender.charAt(0);
      }
      return "";
    },
    getLastChatDate() {
      if (this.chatContent.length > 0) {
        return this.chatContent[this.chatContent.length - 1].date;
      }
      return "";
    },
    getLastChatSender() {
      if (this.chatContent.length > 0) {
        return this.chatContent[this.chatContent.length - 1].sender;
      }
      return "";
    },
    getLastChatText() {
      if (this.chatContent.length > 0) {
        return this.chatContent[this.chatContent.length - 1].text;
      }
      return "";
    },
  },
};
</script>
