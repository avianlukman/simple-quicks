<template>
  <textarea
    v-model="inputValue"
    class="w-full rounded-md resize-none focus:outline-none font-lato font-light text-base text-primary-dark-grey"
    :placeholder="placeholder"
    :style="{
      maxHeight: maxLines ? `calc(${lineHeight} * ${maxLines})` : 'none',
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
        if (newVal && newVal.description) {
          this.inputValue = newVal.description;
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
