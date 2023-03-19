<template>
  <input type="text" :value="modelValue" @input="onInput" v-bind="$attrs" />
</template>

<script setup lang="ts">
/**
 * Text Form Field
 * 
 * The current component will display a text input
 */

withDefaults(
  defineProps<{
    /**
     * Field value, syncable with v-model
     * Defaults to empty string
     */
    modelValue: string;
  }>(),
  {
    modelValue: ''
  }
);

const emit = defineEmits(['update:modelValue']);

function onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value);
}
</script>

<stlye lang="scss" scoped></stlye>
