<template>
  <textarea
    cols="30"
    rows="10"
    class="qa-text-area c-text-area"
    v-model="updatedText"
    @input="$emit('input', updatedText)"
  >
  </textarea>
</template>

<script>
export default {
  name: "TextArea",
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
.c-text-area {
  padding: $vertical-spacing;
  border: $border-width solid $primary-color;
  border-radius: $border-radius;
}
</style>
