<template>
  <label class="checkbox-wrapper">
    <input type="checkbox" @input="onInput" v-bind="$attrs" />
    <span class="check" />
  </label>
</template>

<script setup lang="ts">
/**
 * Checkbox Form Field
 *
 * The current component will display a custom checkbox input
 */

withDefaults(
  defineProps<{
    /**
     * Field value, syncable with v-model
     * Defaults to false
     */
    modelValue: boolean;
  }>(),
  {
    modelValue: false
  }
);

const emit = defineEmits(['update:modelValue']);

function onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value);
}
</script>
