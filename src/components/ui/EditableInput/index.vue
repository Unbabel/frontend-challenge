<template>
  <div>
    <h1 @click="setEditing" v-if="type !== 'multiline' && !isEditing">
      {{ item.voice }}
    </h1>
    <span @click="setEditing" v-if="type === 'multiline' && !isEditing">
      {{ item.text }}
    </span>
    <input
      class="input-title"
      type="text"
      ref="input"
      v-model="item.voice"
      v-if="(type !== 'multiline' && isEditing) || (type !== 'multiline' && isInputEmpty) "
      placeholder="Title..."
      @blur="resetEditing"
      @keyup.enter="resetEditing"
    />
    <textarea
      class="input-body"
      ref="input"
      v-model="item.text"
      v-if="(type === 'multiline' && isEditing) || (type === 'multiline' && isInputEmpty) "
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
    this.checkIfVoiceIsEmpty(this.item.voice);
    if (this.item.voice === "") {
      this.isEditing = true;
    }
  },
  methods: {
    setEditing() {
      this.isEditing = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    resetEditing() {
      this.isEditing = false;
      this.checkIfVoiceIsEmpty(this.item.voice);
    },
    checkIfVoiceIsEmpty(voice) {
      voice === "" ? (this.isInputEmpty = true) : (this.isInputEmpty = false);
    }
  },
  watch: {
    "item.voice": function(val) {
      this.isEditing = true;
      this.checkIfVoiceIsEmpty(val);
    },
    "item.text": function(val) {
      this.isEditing = true;
      this.checkIfVoiceIsEmpty(val);
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

  h1,
  span,
  .input-body,
  .input-title {
    font-size: 16px;
    line-height: 28px;
    padding: 0 4px;
    box-sizing: border-box;
    border: 0;
    border-bottom: 2px solid transparent;
  }
  .input-body,
  .input-title {
    display: inline-block;
    border: 0;
    border-bottom: 2px solid $color-blue;
    width: 100%;
    outline: none;
  }
  span {
    font-weight: 400;
    font-family: $font-open-sans;
    color: $color-transcription-body;
  }

  h1 {
    font-family: $font-montserrat;
    font-weight: 600;
    color: $color-transcription-title;
  }

  textarea {
    min-height: 8rem;
    min-width: 100%;
    max-width: 100%;
    overflow: hidden;
  }
}
</style>
