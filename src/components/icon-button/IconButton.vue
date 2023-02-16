<script setup>
const emit = defineEmits(['onClickCallback']);

defineProps({
  icon: {
    type: String,
    required: true
  },
});

const onClickHandler = () => emit('onClickCallback');

</script>

<template>
  <button class="icon-button" @click="onClickHandler" data-test="action">
    <img :src="icon" alt="action-icon" />
  </button>
</template>

<style scoped>
.icon-button {
  background-color: transparent;
  border: none;
}

.icon-button:hover {
  cursor: pointer;
}
</style>
