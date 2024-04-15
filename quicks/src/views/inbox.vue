<template>
  <div
    class="flex h-full flex-col bg-white py-6 px-8 items-center rounded overflow-hidden"
  >
    <!-- Header -->
    <SearchBar />
    <!-- Content -->
    <LoadingAnimation :isLoading="isLoading" loadingText="Loading chats ..." />
    <div v-if="!isLoading" class="w-full h-full">
      <Chat
        v-for="(chat, index) in this.chats[0].chats"
        :key="index"
        :chatData="chat"
        @click="showChatDetails(chat)"
      />
      <!-- Chat Details Slide-in -->
      <div
        class="chat-details-slide w-full h-5/6 py-4 px-5 items-center rounded overflow-hidden"
        :class="{ 'chat-details-slide-open': isChatDetailsOpen }"
      >
        <ChatDetails
          :chatData="selectedChat"
          @closeChatDetails="closeChatDetails"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/searchBar.vue";
import LoadingAnimation from "../components/loading.vue";
import Chat from "../components/chat.vue";
import ChatDetails from "./chatDetails.vue";

export default {
  components: {
    SearchBar,
    LoadingAnimation,
    Chat,
    ChatDetails,
  },
  created() {
    this.getChats();
  },
  data() {
    return {
      isLoading: true,
      chats: [],
      isChatDetailsOpen: false,
      selectedChat: null,
    };
  },
  methods: {
    async getChats() {
      let result = await fetch("db.json");
      let data = await result.json();

      this.chats = data;
    },
    fetchData() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
    showChatDetails(chat) {
      this.selectedChat = chat;
      this.isChatDetailsOpen = true;
    },
    closeChatDetails() {
      this.isChatDetailsOpen = false;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
.chat-details-slide {
  position: absolute;
  top: 0;
  right: 0;
  right: -100%;
  transition: right 0.3s ease;
}

.chat-details-slide-open {
  right: 0;
}
</style>
