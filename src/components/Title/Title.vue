<template>
  <component :is="type" class="qa-title c-title">{{ text }}</component>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "h1",
      validator(value) {
        return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
      },
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/variables.scss";
.c-title {
  margin: 0;
  font-family: $monserrat, sans-serif;
  font-weight: 600;
  color: $forth-color;
  margin: $vertical-spacing $horizontal-spacing;
}
</style>
