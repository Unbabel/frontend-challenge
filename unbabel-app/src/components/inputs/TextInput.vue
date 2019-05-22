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
      @blur="blurInput"
      @keydown.enter.prevent="blurInput"
      @keydown.esc.prevent="blurInput"
    />
  </div>
</template>

<script>
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
        isEditing: false,
        dynamicWidth: 0,
        maxWidth: 0
      }
    },
    mounted () {
      this.value = this.initialValue
      this.maxWidth = `${this.$refs.inputControl.getBoundingClientRect().width - 20}px`
    },
    methods: {
      triggerEdit () {
        this.isEditing = true
        setTimeout(() => {
          this.$refs.textInput.focus()
        }, 50)
      },
      blurInput () {
        this.value = this.value.trim()

        setTimeout(() => {
          this.$refs.textInput.blur()
        }, 50)

        if (this.value.length === 0) {
          this.value = this.initialValue
        }

        if (this.value !== this.initialValue) {
          console.log('save it!')
        }

        this.isEditing = false
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
