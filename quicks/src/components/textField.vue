<template>
  <textarea
    v-model="inputValue"
    class="w-full rounded-md resize-none focus:outline-none font-lato font-light text-base text-primary-dark-grey"
    :placeholder="placeholder"
    :style="{
      maxHeight: maxLines ? `calc(${lineHeight} * ${maxLines})` : 'none',
      fontWeight: fontWeight,
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
    fontWeight: {
      type: String,
      default: "light",
    },
  },
  data() {
    return {
      inputValue: "",
      lineHeight: "1.5rem", // Adjust this value based on your line height
    };
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
