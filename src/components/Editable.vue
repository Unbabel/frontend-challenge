<template>
  <div>
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
      ref="textarea"
      :class="type"
      :placeholder="placeholder"
      v-model="lValue"
      v-if="isEditing || isInputEmpty"
      @blur="resetEditing"
      @keyup.enter="resetEditing"
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
      isInputEmpty: false
    };
  },
  mounted() {
    this.DOMPurify = createDOMPurify(window);
    this.$el.addEventListener("textarea", this.resizeTextarea);
    this.checkIfInputIsEmpty(this.lValue);

    if (this.lValue === "") {
      this.isEditing = true;
    }
  },
  beforeDestroy() {
    this.$el.removeEventListener("input", this.resizeTextarea);
  },
  methods: {
    setEditing() {
      this.isEditing = true;
      this.$nextTick(() => {
        this.$refs.textarea.focus();
      });
    },
    resetEditing() {
      this.isEditing = false;
      this.checkIfInputIsEmpty(this.lValue);
    },
    checkIfInputIsEmpty(value) {
      value === "" ? (this.isInputEmpty = true) : (this.isInputEmpty = false);
    },
    resizeTextarea(event) {
      debugger;
      console.log(event.target.scrollHeight);
      event.target.style.height = "auto";
      event.target.style.height = event.target.scrollHeight + "px";
    },
    purify(value) {

      return this.DOMPurify.sanitize(value);
    }
  },
  watch: {
    lValue: function(val) {
      this.isEditing = true;
      const purifiedValue = this.purify(val);
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
    width: 100%;
    outline: none;
    overflow: hidden;
    /*min-height: 8rem;*/

    &.title {
      /*max-height: 1.5rem;*/
      /*min-height: 1rem;*/
    }
  }
}
</style>
