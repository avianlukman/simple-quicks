<template>
  <div
    :class="[
      'flex items-center justify-center rounded-full p-2 cursor-pointer',
      buttonColor,
    ]"
    :style="{
      width: `${buttonSize}px`,
      height: `${buttonSize}px`,
      padding: buttonPadding,
      backgroundColor: buttonColor,
    }"
  >
    <svg
      class="items-center justify-center"
      :width="iconWidth"
      :height="iconHeight"
      :viewBox="viewBox"
      stroke-width="1.5"
      :stroke="stroke"
      :fill="fill"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
        :d="path"
      />
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    iconWidth: {
      type: [Number, String],
      default: "26px",
    },
    iconHeight: {
      type: [Number, String],
      default: "26px",
    },
    buttonColor: {
      type: String,
      default: "bg-primary-light-grey",
    },
    buttonSize: {
      type: [Number, String],
      default: 60,
    },
    buttonPadding: {
      type: [Number, String],
      default: "8px",
    },
    path: {
      type: String,
      required: true,
    },
    stroke: {
      type: String,
      required: true,
    },
    fill: {
      type: String,
      required: true,
    },
    viewBox: {
      type: [Number, String],
      default: "0 0 24 24",
    },
  },
};
</script>
