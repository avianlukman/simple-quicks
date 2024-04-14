<template>
  <div
    class="bg-primary-dark-grey w-screen h-screen items-end justify-end fixed"
  >
    <div class="flex flex-col w-1/2 h-5/6 absolute bottom-0 right-0 px-5">
      <!-- <transition name="slide">
        <div class="w-full h-5/6" v-if="showTaskView">
          <tasks></tasks>
        </div>
      </transition>
      <transition name="slide">
        <div class="w-full h-5/6" v-if="showInboxView">
          <inbox></inbox>
        </div>
      </transition> -->
      <div class="w-full h-5/6">
        <tasks v-if="showTaskView"></tasks>
        <inbox v-if="showInboxView"></inbox>
      </div>
      <div
        class="flex w-full h-1/6 flex-row absolute bottom-0 right-0 pb-5 px-5 items-end justify-end"
        style="gap: 26px"
      >
        <!-- Inbox Button -->
        <circleButton
          buttonColor="bg-indicator-purple"
          path="M18.0371 0.926147H1.66673C0.974137 0.926147 0.407471 1.49281 0.407471 2.18541V19.815L5.44451 14.778H18.0371C18.7297 14.778 19.2964 14.2113 19.2964 13.5187V2.18541C19.2964 1.49281 18.7297 0.926147 18.0371 0.926147ZM16.7779 3.44458V12.2594H4.39933L3.65637 13.0024L2.926 13.7327V3.44458H16.7779ZM21.8149 5.96321H24.3334C25.026 5.96321 25.5927 6.52987 25.5927 7.22247V26.1114L20.5556 21.0743H6.70376C6.01117 21.0743 5.4445 20.5077 5.4445 19.8151V17.2965H21.8149V5.96321Z"
          stroke="none"
          fill="white"
          viewBox="0 0 24 24"
          @click="toggleInboxView"
        />
        <!-- Tasks Button -->
        <circleButton
          buttonColor="bg-indicator-orange"
          path="M3.11114 0.66626H23.1111C24.3334 0.66626 25.3334 1.66626 25.3334 2.88848V17.3329C25.3334 18.5551 24.3334 19.5551 23.1111 19.5551H3.11114C1.88892 19.5551 0.888916 18.5551 0.888916 17.3329V2.88848C0.888916 1.66626 1.88892 0.66626 3.11114 0.66626ZM3.11114 2.88848V17.3329H12V2.88848H3.11114ZM23.1111 17.3329H14.2222V2.88848H23.1111V17.3329ZM22 6.77737H15.3334V8.44404H22V6.77737ZM15.3334 9.55515H22V11.2218H15.3334V9.55515ZM22 12.3329H15.3334V13.9996H22V12.3329Z"
          stroke="none"
          fill="white"
          viewBox="0 0 24 24"
          @click="toggleTaskView"
        />
        <!-- Toggle Menu Button -->
        <circleButton
          iconSize="24"
          buttonColor="bg-primary"
          path="M12.4427 0.335868C13.3618 0.948573 13.6101 2.19031 12.9974 3.10937L5.73704 14H16C16.7376 14 17.4153 14.4059 17.7634 15.0563C18.1114 15.7066 18.0732 16.4957 17.6641 17.1094L8.33077 31.1094C7.71807 32.0284 6.47633 32.2768 5.55727 31.6641C4.63821 31.0514 4.38986 29.8096 5.00257 28.8906L12.263 18H2C1.26241 18 0.584692 17.594 0.236654 16.9437C-0.111384 16.2934 -0.0732391 15.5043 0.335902 14.8906L9.66924 0.890568C10.2819 -0.0284895 11.5237 -0.276837 12.4427 0.335868Z"
          stroke="none"
          fill="white"
          viewBox="0 0 18 32"
        />
      </div>
    </div>
  </div>
</template>

<script>
import inbox from "./views/inbox.vue";
import tasks from "./views/tasks.vue";
import circleButton from "./components/circleButton.vue";

export default {
  name: "App",
  data() {
    return {
      showTaskView: false,
      showInboxView: false,
    };
  },
  methods: {
    toggleTaskView() {
      this.showTaskView = !this.showTaskView;
      this.showInboxView = false;
    },
    toggleInboxView() {
      this.showInboxView = !this.showInboxView;
      this.showTaskView = false;
    },
  },
  components: {
    inbox,
    tasks,
    circleButton,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
#app {
  font-family: "Lato";
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-enter,
.slide-leave-to /* .slide-leave-active below version 2.1.8 */ {
  transform: translate(100%, 100%);
}
</style>
