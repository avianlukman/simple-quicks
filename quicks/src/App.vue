<template>
  <div class="bg-primary-dark-grey w-screen h-screen items-end justify-end">
    <div class="flex flex-col w-1/2 h-5/6 absolute bottom-0 right-0 px-5">
      <div class="w-full h-5/6">
        <tasks></tasks>
        <!-- <inbox></inbox> -->
      </div>

      <div
        class="flex w-full h-1/6 flex-row absolute bottom-0 right-0 pb-5 px-5"
      >
        <circleButton></circleButton>
        <circleButton></circleButton>
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
</style>
