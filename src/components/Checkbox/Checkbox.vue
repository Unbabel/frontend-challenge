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
