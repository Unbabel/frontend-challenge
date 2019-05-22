<template>
  <div
    ref="inputControl"
    class="input-control"
  >
    <!-- Hidden input to allow keyboard accessibility -->
    <input
      type="text"
      class="spoof-input"
      @focus="triggerEdit"
    >
    <span
      ref="textInput"
      v-text="value"
      :class="[{ 'editing': isEditing }, extraClass]"
      :style="{ maxWidth: maxWidth }"
      :contenteditable="isEditing"
      class="input"
      title="Click to edit"
      @click.self="triggerEdit"
      @input="storeValue"
      @blur="blurInput"
      @keydown.enter.prevent="blurInput"
      @keydown.esc.prevent="blurInput"
    />
  </div>
</template>

<script>
import { positionCursorEnd } from '@/utils/inputs'

//  Timeout for focus/blur to allow input to change editable state
const eventIntervalBuffer = 50

export default {
  name: 'TextInput',
  props: {
    initialValue: {
      type: String,
      default: ''
    },
    extraClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      value: '',
      localValue: '',
      isEditing: false,
      isSaving: false,
      maxWidth: 0
    }
  },
  mounted () {
    this.value = this.localValue = this.initialValue
    this.maxWidth = `${this.$refs.inputControl.getBoundingClientRect().width - 20}px`
  },
  methods: {
    triggerEdit () {
      this.isEditing = true
      setTimeout(() => {
        this.$refs.textInput.focus()
        positionCursorEnd(this.$refs.textInput)
      }, eventIntervalBuffer)
    },
    storeValue (e) {
      this.localValue = e.target.innerText
    },
    blurInput () {
      //  Hackish: avoids double method trigger when pressing Enter/Esc to save value.
      //  Ideally should handle Esc to cancel changes & Enter to submit.
      if (!this.isSaving) {
        this.isSaving = true

        setTimeout(() => {
          this.$refs.textInput.blur()

          if (this.localValue.length === 0) {
            this.value = this.initialValue
          }

          if (this.localValue !== this.initialValue) {
            this.$emit('changedValue', this.localValue)
            this.value = this.localValue
          }

          this.isEditing = false
          this.isSaving = false
        }, eventIntervalBuffer)
      }
    }
  }
}
</script>

<style lang="scss">
  .input-control{
    width: 100%;

    .spoof-input{
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
    }

    .edit-toggle, .input{
      padding: .5em;
      border-radius: $default-border-radius;
    }

    .input{
      display: inline-block;
      width: auto;
      min-height: 23px;
      min-width: 50px;
      max-width: 100px;
      box-shadow: inset 0 0px 0px 2px rgba(transparent, 0);
      transition: box-shadow $default-transition-speed;
      margin: 0;

      &:hover{
        box-shadow: inset 0 0px 0px 2px rgba($gray, .1);
        transition: box-shadow $default-transition-speed;
      }

      &.headline{
        color: $gray;
        font-family: $font-montserrat;
        font-weight: $font-weight-semibold;
      }

      &.fullwidth{
        width: 100%;
      }

      &.editing{
        outline: none;
        box-shadow: inset 0 0px 0px 2px rgba($purple, 1);
      }
    }
  }
</style>
