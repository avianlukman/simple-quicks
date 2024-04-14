<template>
  <div
    class="flex h-full w-full flex-col bg-white py-6 px-8 items-center rounded"
  >
    <!-- Header -->
    <SearchBar />
    <!-- Content -->
    <LoadingAnimation :isLoading="isLoading" loadingText="Loading chats ..." />
    <div v-if="!isLoading" class="w-full h-full">
      <Chat />
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/searchBar.vue";
import LoadingAnimation from "../components/loading.vue";
import Chat from "../components/chat.vue";

export default {
  components: {
    SearchBar,
    LoadingAnimation,
    Chat,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    fetchData() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
