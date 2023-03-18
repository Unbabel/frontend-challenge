<template>
  <label class="checkbox-wrapper">
    <input type="checkbox" @input="onInput" v-bind="$attrs" v-on="$listeners" />
    <span class="check" />
  </label>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    /**
     * Field value, syncable with v-model
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

<stlye lang="scss" scoped></stlye>
