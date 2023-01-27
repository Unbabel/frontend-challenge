<template>
  <span class="qa-checkbox c-checkbox">
    <input
      type="checkbox"
      class="qa-checkbox__input c-checkbox__input"
      :name="text"
      :value="checked"
      @click="$emit('change', !checked)"
    />
    <span class="c-checkbox__checkmark"></span>
    <label class="qa-checkbox__label c-checkbox__label" :for="text">
      {{ text }}
    </label>
  </span>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    text: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/variables.scss";
.c-checkbox {
  display: block;
  position: relative;
  margin: $vertical-spacing $horizontal-spacing;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: $checkbox-size;
  width: $checkbox-size;

  &:hover {
    .c-checkbox__checkmark {
      background-color: lighten($color: $primary-color, $amount: 20);
    }
  }

  .c-checkbox__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: $checkbox-size;
    width: $checkbox-size;
    left: 0;
    z-index: 1;
  }

  .c-checkbox__input:checked {
    ~ .c-checkbox__checkmark {
      background-color: $primary-color;
    }
    ~ .c-checkbox__checkmark::after {
      display: block;
    }
  }

  .c-checkbox__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: $checkbox-size;
    width: $checkbox-size;
    background-color: white;
    border: $border-width solid $primary-color;
    border-radius: $border-width;
  }

  .c-checkbox__checkmark::after {
    content: "";
    position: absolute;
    display: none;
    left: 4px;
    top: 0px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>
