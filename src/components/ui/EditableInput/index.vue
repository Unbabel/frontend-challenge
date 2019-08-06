<template>
  <div>
    <h1 @click="setEditing" v-if="!isEditing">
      {{ type === 'multiline' ? item.text : item.voice }}
    </h1>
    <input
      class="edit-title"
      type="text"
      ref="input"
      v-model="item.voice"
      v-if="(type !== 'multiline' && isEditing) || isInputEmpty"
      @blur="resetEditing"
      @keyup.enter="resetEditing"
    />
    <textarea
      class="edit-text"
      type="text"
      ref="input"
      v-model="item.text"
      v-if="(type === 'multiline' && isEditing) || isInputEmpty"
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
  width: calc(100% - 94px);
  margin-left: 7px;
  h1,
  .edit-title {
    color: #566074;
    font-family: $font-montserrat;
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
  }
  .edit-title {
    display: inline-block;
    border: 0;
    border: 1px solid #eaedef;
    width: 100%;
  }
}
</style>
