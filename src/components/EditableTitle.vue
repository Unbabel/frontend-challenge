<template>
  <div>
    <p @click="setEditing" v-if="!isEditing" :aria-hidden="!isEditing">
      {{ item.voice }}
    </p>
    <textarea
      cols="40"
      class="input-body"
      ref="textarea"
      v-model="item.voice"
      v-if="isEditing || isInputEmpty"
      placeholder="Title..."
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
    const { voice } = this.item;
    this.checkIfInputIsEmpty(voice);
    if (voice === "") {
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
      this.checkIfInputIsEmpty(this.item.voice);
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
    font-weight: 600;
    font-family: $font-montserrat;
    line-height: 1.3rem;
    padding: 0 4px;
    box-sizing: border-box;
    border: 0;
    border-bottom: 2px solid transparent;
    color: $color-transcription-body;
  }
  textarea {
    display: inline-block;
    border: 0;
    border-bottom: 2px solid $color-purple;
    width: 100%;
    outline: none;
    max-height: 1.5rem;
    overflow: hidden;
  }
}
</style>
