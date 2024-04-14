<template>
  <div
    class="flex flex-col w-full h-full bg-white py-6 px-8 items-center rounded"
  >
    <!-- Header -->
    <div class="flex flex-row w-full justify-between">
      <!-- Drop Down -->
      <DropDown />
      <!-- Button -->
      <PrimaryButton buttonTitle="New Task"></PrimaryButton>
    </div>
    <!-- Content -->
    <LoadingAnimation :isLoading="isLoading" loadingText="Loading chats ..." />
    <div v-if="!isLoading" class="w-full h-full">
      <Task />
    </div>
    <!-- Tasks -->
  </div>
</template>
<script>
import LoadingAnimation from "../components/loading.vue";
import DropDown from "../components/dropDown.vue";
import PrimaryButton from "../components/button.vue";
import Task from "../components/task.vue";

export default {
  components: {
    LoadingAnimation,
    DropDown,
    PrimaryButton,
    Task,
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
