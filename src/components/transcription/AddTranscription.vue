<template>
  <button @click="click" class="add-transcription">
    <AddRowIcon />
  </button>
</template>

<script lang="ts" setup>
import AddRowIcon from '@/assets/icons/add-row.svg?component';

const emit = defineEmits(['add-row']);
const click = () => {
  emit('add-row');
};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/utils/mixins.scss';

button.add-transcription {
  @include mixins.button-reset;

  border-radius: 100%;
  outline: 0;

  &:hover,
  &:focus {
    box-shadow: #213243 0px 10px 20px -10px;
  }

  &:active {
    transition: transform 0.15s ease-in;
    transform: translateY(1px);
  }
}
</style>
