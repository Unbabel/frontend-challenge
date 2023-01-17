<script setup>
import { computed } from "vue";
const props = defineProps({
  value: {
    type: Boolean,
  },
  id: {
    type: String,
    default: "checkbox",
  },
});

const emit = defineEmits(["update:modelValue"]);

const checked = computed({
  get: () => props.value,
  set: (val) => emit("input", val),
});
</script>

<template>
  <input
    class="checkbox"
    type="checkbox"
    :id="id"
    v-model="checked"
    :checked="!!checked"
  />
</template>

<style scoped lang="scss">
$checkbox-size: 16px;
$checkbox-color: #859eff;

input.checkbox {
  appearance: none;
  border: 2px solid $checkbox-color;
  width: $checkbox-size;
  height: $checkbox-size;
  border-radius: 2px;
  margin-right: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: $checkbox-color;

    &::before {
      position: absolute;
      top: 2px;
      left: 1px;
      content: "";
      width: 8px;
      height: 3px;
      border-style: solid;
      border-width: 0 0 2px 2px;
      border-color: white;
      transform: rotate(-45deg);
    }
  }
}
</style>
