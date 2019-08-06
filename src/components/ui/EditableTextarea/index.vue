<template>
  <div>
    <p @click="setEditing" v-if="!isEditing">
      {{ item.text }}
    </p>
    <textarea
      class="input-body"
      ref="textarea"
      v-model="item.text"
      v-if="isEditing || isInputEmpty"
      placeholder="Body..."
      @blur="resetEditing"
      @keyup.enter="resetEditing"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    type: {
      type: String
    }
  },
  data() {
    return {
      isEditing: false,
      isInputEmpty: false
    };
  },
  mounted() {
    const { text } = this.item;
    this.checkIfInputIsEmpty(text);
    if (text === "") {
      this.isEditing = true;
    }
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
      this.checkIfInputIsEmpty(this.item.text);
    },
    checkIfInputIsEmpty(value) {
      value === "" ? (this.isInputEmpty = true) : (this.isInputEmpty = false);
    }
  },
  watch: {
    "item.text": function(val) {
      this.isEditing = true;
      this.checkIfInputIsEmpty(val);
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
  }
  textarea{
    display: inline-block;
    border: 0;
    border-bottom: 2px solid $color-blue;
    width: 100%;
    outline: none;
  }

  textarea {
    min-height: 8rem;
    min-width: 100%;
    max-width: 100%;
    overflow: hidden;
  }
}
</style>
