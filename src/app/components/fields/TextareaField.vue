<template>
  <textarea ref="textarea" :value="modelValue" @input="onInput" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

withDefaults(
  defineProps<{
    /**
     * Field value, syncable with v-model
     */
    modelValue: string;
  }>(),
  {
    modelValue: ''
  }
);

const emit = defineEmits(['update:modelValue']);
const textarea = ref(null);

function resizeArea() {
  const element = textarea.value as any as HTMLElement;
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

onMounted(() => resizeArea());
</script>

<stlye lang="scss" scoped></stlye>
