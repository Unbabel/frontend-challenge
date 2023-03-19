<template>
  <textarea ref="textarea" :value="modelValue" @input="onInput" v-bind="$attrs" />
</template>

<script setup lang="ts">
/**
 * Textarea Form Field
 *
 * The current component will display a textarea that will
 * auto resize on:
 *  - Text input
 *  - Component width change
 */
import { onMounted, ref, type Ref } from 'vue';

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
const textarea = ref({}) as Ref<HTMLElement>;

/**
 * On call will resize the component to match the
 * scroll height
 */
function resizeArea() {
  const element = textarea.value;
  if (element) {
    element.style.height = '5px';
    element.style.height = element.scrollHeight + 'px';
  }
}

function onInput(event: Event) {
  resizeArea();
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value);
}

onMounted(() => {
  resizeArea();
  window.addEventListener('resize', () => resizeArea());
});
</script>
