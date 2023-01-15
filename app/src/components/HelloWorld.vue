<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped></style>
