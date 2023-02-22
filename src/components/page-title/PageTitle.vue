<script setup>
defineProps({
  text: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<template>
  <span class="page-title" data-test="page-title">
    {{ text }}
  </span>
</template>

<style scoped>
.page-title {
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--palette-dark);
}
</style>
