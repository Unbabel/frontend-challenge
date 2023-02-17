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
  rows: {
    type: String,
    default: "1",
  },
  customStyles: {
    type: String,
    default: ''
  }
});

const onChangeHandler = (ev) => emit('onChangeCallback', ev.target.value);

</script>

<template>
  <textarea :class="customStyles" :value="value" @input="onChangeHandler" :placeholder="placeholder" :rows="rows">
  </textarea>
</template>

<style scoped>
textarea {
  width: 100%;
  border: 1px solid transparent;
  outline: none;
  resize: none;
}

textarea:focus {
  border: 1px solid var(--palette-lighter-grey);
  border-radius: 3px;
  background-color: var(--palette-dirty-white);
}
</style>
