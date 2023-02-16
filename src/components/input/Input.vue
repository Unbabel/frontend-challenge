<script setup>
const emit = defineEmits(['onChangeCallback']);

defineProps({
  value: {
    type: String,
  },
  placeholder: {
    type: String,
    default: 'Insert text here'
  },
  customStyles: {
    type: String,
    default: ''
  }
});

const onChangeHandler = (ev) => emit('onChangeCallback', ev.target.value);

</script>

<template>
  <input :class="customStyles" :value="value" @input="onChangeHandler" :placeholder="placeholder" />
</template>

<style scoped>
input {
  width: 100%;
  border: 1px solid transparent;
  outline: none;
}

input:focus {
  border: 1px solid var(--palette-lighter-grey);
  border-radius: 3px;
  background-color: var(--palette-dirty-white);
}
</style>
