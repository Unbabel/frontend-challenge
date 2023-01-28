<template>
  <input
    type="text"
    class="qa-text-input c-text-input"
    v-model="updatedText"
    @input="$emit('input', updatedText)"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      updatedText: "",
    };
  },
  created() {
    this.updatedText = this.text;
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/variables.scss";
.c-text-input {
  padding: $vertical-spacing;
  border: $border-width solid $primary-color;
  border-radius: $border-radius;
}
</style>
