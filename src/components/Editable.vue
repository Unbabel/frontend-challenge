<template>
  <div class="">
    <p
      @click="setEditing"
      v-if="!isEditing"
      :aria-hidden="!isEditing"
      :class="type"
    >
      {{ lValue }}
    </p>
    <textarea
      cols="40"
      :class="type"
      :placeholder="placeholder"
      v-model="lValue"
      v-if="isEditing || noValue"
      @blur="resetEditing"
    ></textarea>
  </div>
</template>

<script>
const createDOMPurify = require("dompurify");

export default {
  name: "Editable",
  props: {
    type: {
      type: String,
      default: "title"
    },
    value: {
      required: true,
      type: String
    },
    placeholder: {
      type: String,
      default: "Title..."
    }
  },
  data() {
    return {
      DOMPurify: false,
      lValue: this.value,
      isEditing: false,
      noValue: false
    };
  },
  mounted() {
    this.DOMPurify = createDOMPurify(window);
    const purifiedValue = this.purify(this.lValue);
    this.checkIfInputIsEmpty(purifiedValue);

    if (this.lValue === "") {
      this.isEditing = true;
    }
  },
  methods: {
    setEditing() {
      this.isEditing = true;
    },
    resetEditing() {
      this.isEditing = false;
      this.checkIfInputIsEmpty(this.lValue);
    },
    checkIfInputIsEmpty(value) {
      value === "" ? (this.noValue = true) : (this.noValue = false);
    },
    purify(value) {
      return this.DOMPurify.sanitize(value);
    }
  },
  watch: {
    lValue: function(value) {
      this.isEditing = true;
      const purifiedValue = this.purify(value);
      this.lValue = purifiedValue;
      this.checkIfInputIsEmpty(purifiedValue);
    }
  }
};
</script>

<style scoped lang="scss">
div {
  display: inline-block;
  vertical-align: top;
  width: 100%;

  &:first-of-type {
    margin-bottom: 2px;
  }

  p,
  textarea {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    font-family: $font-open-sans;
    line-height: 1.3rem;
    padding: 0 4px;
    box-sizing: border-box;
    border: 0;
    border-bottom: 2px solid transparent;
    color: $color-transcription-body;

    &.title {
      font-weight: 600;
      font-family: $font-montserrat;
    }
  }
  textarea {
    display: inline-block;
    border: 0;
    border-bottom: 2px solid $color-purple;
    outline: none;
    overflow: hidden;
    width: 100%;
    max-width: 600px;
    min-height: 6rem;

    &.title {
      max-height: 1.5rem;
      min-height: 1rem;
    }
  }
}
</style>
