<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits(['update:modelValue'])

const checked = ref(false)
const change = () => {
  const newValue = !checked.value
  emit('update:modelValue', newValue)
  checked.value = newValue
}
</script>

<template>
  <label class="atom-checkbox">
    <input type="checkbox" class="atom-checkbox__input" :checked="checked" @change="change">
    <span class="atom-checkbox__checkmark" />
  </label>
</template>

<style lang="scss" scoped>
.atom-checkbox {
  display: block;
  position: relative;
  width: 16px;
  height: 16px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    transition: background-color 0.15s ease-in;
    border-radius: 2px;
  }

  &__checkmark:after {
    content: '';
    position: absolute;
    display: none;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  &__input:not(:checked) ~ &__checkmark {
    border: 2px solid #96abfe;
  }

  &:hover &__input:not(:checked) ~ .atom-checkbox__checkmark,
  &__input:not(:checked):focus ~ .atom-checkbox__checkmark {
    background-color: #eceaf0;
  }

  &:hover &__input:checked ~ .atom-checkbox__checkmark,
  &__input:checked:focus ~ .atom-checkbox__checkmark {
    background-color: #b0c0ff;
  }

  &__input:checked ~ .atom-checkbox__checkmark {
    background-color: #859eff;
  }

  &__input:checked ~ .atom-checkbox__checkmark:after {
    display: block;
  }
}
</style>
