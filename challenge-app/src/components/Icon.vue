<template>
  <picture>
    <source type="image/svg+xml" :srcset="url('svg')" />
    <img :src="url('png', '@1x')" :srcset="`${url('png', '@2x')} 2x`" :alt="description" />
  </picture>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  }
});

const { icon, description } = toRefs(props);

const url = (extension, size = "") =>
  new URL(`../assets/icons/${icon.value}${size}.${extension}`, import.meta.url);
</script>

<style scoped></style>
