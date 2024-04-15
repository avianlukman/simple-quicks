<template>
  <textarea
    v-model="inputValue"
    class="w-full rounded-md resize-none focus:outline-none font-lato font-bold text-base text-primary-dark-grey"
    :placeholder="placeholder"
    :style="{
      maxHeight: maxLines ? `calc(${lineHeight} * ${maxLines})` : 'none',
      textDecoration: taskData.status === 'done' ? 'line-through' : 'none',
    }"
  ></textarea>
</template>

<script>
export default {
  props: {
    maxLines: {
      type: Number,
      default: 5,
    },
    placeholder: {
      type: String,
      default: "Enter text...",
    },
    taskData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      inputValue: "",
      lineHeight: "1.5rem",
    };
  },
  watch: {
    taskData: {
      handler(newVal) {
        if (newVal && newVal.title) {
          this.inputValue = newVal.title;
        } else {
          this.inputValue = "";
        }
      },
      immediate: true,
    },
  },
  methods: {
    clearInput() {
      this.inputValue = "";
    },
  },
};
</script>

<style scoped>
textarea {
  overflow-y: auto;
}
</style>
