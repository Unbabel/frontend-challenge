<template>
  <div>
    <span :class="[{'empty': !value}, {'hide': activeInput}, customClass]" v-on:click="toogleInput">
      {{ value ? value : 'Click to add content here...' }}
    </span>
    <input v-if="type !== 'multiline'" ref="input" type="text" :value="value" v-on:input="$emit('input', $event.target.value)" v-on:blur="toogleInput">
    <textarea v-if="type === 'multiline'" ref="input" type="text" :value="value" v-on:input="$emit('input', $event.target.value)" v-on:blur="toogleInput"></textarea>
  </div>
</template>

<script>

export default {
  name: 'EditableText',
  props: {
    value: String,
    customClass: String,
    type: String
  },
  data () {
    return {
      activeInput: false
    }
  },
  methods: {
    toogleInput: function () {
      this.activeInput = !this.activeInput
      if (this.activeInput) {
        let input = this.$refs.input

        // to make sure input is showing for focus
        window.setTimeout(function () {
          input.focus()
        }, 50)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/main.scss';

span {
  cursor: pointer;
  display: block;

  &.voice {
    @include list-title;
    margin: 2px 0 8px 0;

    & + input {
      @include list-title;
      margin: 0 0 4px 0;
    }
    & + textarea {
      @include list-title;
      margin: 0 0 4px 0;
    }
  }

  &.text {
    @include list-text;

    & + input {
      @include list-text;
    }
    & + textarea {
      @include list-text;
    }
  }

  &.empty {
    opacity: 0.6;
  }

  &.hide {
    display: none;

    & + input {
      display: block;
    }
    & + textarea {
      display: block;
    }
  }

  & + input {
    display: none;
    width: 100%;
  }
  & + textarea {
    display: none;
    width: 100%;
    resize: none;
  }
}
</style>
