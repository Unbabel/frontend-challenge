<script setup>
import { onMounted, ref } from "vue";

const textareaRef = ref(null);
const emit = defineEmits(['onChangeCallback']);

onMounted(() => {
  fitToContent();
})

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

const fitToContent = () => {
  textareaRef.value.style.height = "5px";
  textareaRef.value.style.height = (textareaRef.value.scrollHeight) + "px";
}

const onChangeHandler = (ev) => {
  fitToContent();
  emit('onChangeCallback', ev.target.value);
};

</script>

<template>
  <textarea ref="textareaRef" :class="customStyles" :value="value" @input="onChangeHandler" :placeholder="placeholder">
  </textarea>
</template>

<style scoped>
textarea {
  width: 100%;
  border: 1px solid transparent;
  outline: none;
  resize: none;
  max-height: 200px;
}

textarea:focus {
  border: 1px solid var(--palette-lighter-grey);
  border-radius: 3px;
  background-color: var(--palette-dirty-white);
}
</style>
